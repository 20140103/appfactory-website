#!/bin/bash
# 构建并部署到 Cloudflare Pages（静态资源 out/ + Functions API）
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

PROJECT_NAME="appfactory-website"
BRANCH="main"
SKIP_BUILD=false
DRY_RUN=false

usage() {
    cat <<'EOF'
用法: ./deploy.sh [选项]

构建 Next.js 静态站点，并将 out/ 与 functions/ 一并部署到 Cloudflare Pages。

选项:
  --skip-build    跳过 yarn install / yarn build，直接部署现有 out/
  --dry-run       仅检查环境，不执行部署
  --branch NAME   部署分支名（默认: main）
  --project NAME  Pages 项目名（默认: appfactory-website）
  -h, --help      显示帮助

示例:
  ./deploy.sh
  ./deploy.sh --skip-build
  ./deploy.sh --branch preview

部署内容:
  - 静态资源: ./out
  - API 接口: ./functions/api/contact.ts  →  /api/contact

前置条件:
  1. yarn wrangler login
  2. Cloudflare Pages 中已存在同名项目（或首次部署时按提示创建）
  3. 联系表单数据保存在 Cloudflare D1 数据库 appfactory-contacts
EOF
}

while [[ $# -gt 0 ]]; do
    case "$1" in
        --skip-build) SKIP_BUILD=true ;;
        --dry-run) DRY_RUN=true ;;
        --branch) BRANCH="$2"; shift ;;
        --project) PROJECT_NAME="$2"; shift ;;
        -h|--help) usage; exit 0 ;;
        *) echo "未知选项: $1"; usage; exit 1 ;;
    esac
    shift
done

echo "🚀 Cloudflare Pages 部署（静态资源 + API）"
echo "   项目: $PROJECT_NAME"
echo "   分支: $BRANCH"
echo ""

WRANGLER="yarn wrangler"

if ! command -v yarn &>/dev/null; then
    echo "❌ 未找到 yarn，请先安装 Node.js / Yarn"
    exit 1
fi

echo "📦 确保依赖已安装..."
yarn install --frozen-lockfile 2>/dev/null || yarn install

# 检查登录状态
echo "🔐 检查 Cloudflare 登录状态..."
if ! $WRANGLER whoami &>/dev/null; then
    echo "❌ 未登录 Cloudflare，请先执行:"
    echo "   yarn wrangler login"
    exit 1
fi
$WRANGLER whoami
echo ""

# 构建
if [[ "$SKIP_BUILD" == false ]]; then
    echo "🔨 构建静态站点..."
    yarn build
else
    echo "⏭️  跳过构建，使用现有 ./out"
fi

# 校验产物
if [[ ! -d "out" ]]; then
    echo "❌ 未找到 ./out，请先执行 yarn build"
    exit 1
fi

if [[ ! -f "functions/api/contact.ts" ]]; then
    echo "❌ 未找到 functions/api/contact.ts，API 无法部署"
    exit 1
fi

echo "✅ 构建产物检查通过"
echo "   静态资源: ./out ($(find out -type f | wc -l | tr -d ' ') 个文件)"
echo "   API 函数: functions/api/contact.ts"
echo ""

if [[ "$DRY_RUN" == true ]]; then
    echo "🏁 干运行完成，未执行部署"
    exit 0
fi

# 部署（从项目根目录执行，wrangler 会自动打包 functions/）
echo "🌐 正在部署到 Cloudflare Pages..."
$WRANGLER pages deploy ./out \
    --project-name="$PROJECT_NAME" \
    --branch="$BRANCH" \
    --commit-dirty=true

echo ""
echo "✅ 部署完成！"
echo ""
echo "📋 后续步骤:"
echo "   1. 在 Cloudflare Dashboard 查看部署状态"
echo "   2. 测试 API: curl -X POST https://<你的域名>/api/contact \\"
echo "        -H 'Content-Type: application/json' \\"
echo "        -d '{\"name\":\"测试\",\"email\":\"test@example.com\",\"message\":\"hello\"}'"
    echo "   3. 使用 yarn db:list 查看联系表单留言"
echo ""
echo "💡 本地预览（含 API）: yarn preview:cf"

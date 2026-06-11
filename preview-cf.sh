#!/bin/bash
# 本地预览 Cloudflare Pages（静态资源 + Functions API）
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "🔨 构建静态站点..."
yarn install --frozen-lockfile 2>/dev/null || yarn install
yarn build

if [[ ! -d "out" ]]; then
    echo "❌ 构建失败，未生成 ./out"
    exit 1
fi

if [[ ! -f ".dev.vars" && -f ".dev.vars.example" ]]; then
    echo "💡 提示: 联系表单数据保存在 D1 数据库，使用 yarn db:list 查看留言"
fi

echo ""
echo "🌐 启动 Cloudflare Pages 本地预览（含 /api/contact）..."
echo "   按 Ctrl+C 停止"
echo ""

npx wrangler pages dev ./out --compatibility-date=2024-01-01

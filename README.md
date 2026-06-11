# AppFactory 官网

AppFactory 是一个专业的软件开发工作室官网，展示我们的产品成果和服务项目。

**在线地址**: [https://appfactory.xuzhen.top](https://appfactory.xuzhen.top)

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Next.js 14（App Router，静态导出） |
| 语言 | TypeScript |
| 样式 | Tailwind CSS |
| 动画 | Framer Motion |
| 图标 | Lucide React |
| 部署 | Cloudflare Pages + Pages Functions |
| 数据存储 | Cloudflare D1（联系表单） |
| 国际化 | 自定义 i18n（中/英） |

## 项目结构

```
├── app/                      # Next.js 页面与路由
│   ├── layout.tsx            # 根布局、SEO 元数据
│   ├── page.tsx              # 首页
│   ├── about/                # 关于我们
│   ├── products/             # 产品展示
│   ├── services/             # 服务项目
│   ├── contact/              # 联系我们
│   ├── globals.css           # 全局样式
│   ├── icon.svg              # 站点图标
│   ├── robots.txt            # 爬虫规则
│   └── sitemap.ts            # 站点地图生成
├── components/               # UI 组件
├── contexts/                 # React Context（多语言）
├── lib/                      # 工具与 i18n 文案
├── functions/                # Cloudflare Pages Functions
│   └── api/contact.ts        # POST /api/contact
├── migrations/               # D1 数据库迁移
├── _headers                  # Cloudflare 响应头配置
├── _redirects                # Cloudflare 路由规则
├── deploy.sh                 # 构建并部署到 Cloudflare Pages
├── preview-cf.sh             # 本地预览（含 API）
├── wrangler.toml             # Cloudflare / D1 配置
└── package.json
```

## 功能特性

### 首页
- 响应式英雄区域
- 统计数据展示
- 精选产品展示
- 服务项目介绍
- 客户评价与行动号召

### 产品展示
- 分类筛选
- 产品网格与详情
- 技术栈与项目状态标识

### 关于我们
- 公司发展历程、核心价值观
- 团队介绍与专业技能

### 服务项目
- 服务类型、开发流程
- 价格方案与技术栈说明

### 联系我们
- 联系表单（提交至 D1 数据库）
- 联系信息展示

### 其他
- 中/英双语切换（`LanguageSwitcher` + `lib/i18n.ts`）
- 响应式布局（桌面 / 平板 / 移动端）
- SEO 优化（sitemap、robots、Open Graph）

## 开发指南

本项目使用 **Yarn** 作为包管理器。

### 环境要求

- Node.js 18+
- Yarn 1.x

### 安装依赖

```bash
yarn install
```

### 启动开发服务器

```bash
yarn dev
```

访问 [http://localhost:3000](http://localhost:3000)。

> `yarn dev` 仅用于前端页面开发，**无法**调用 `/api/contact`。测试联系表单请使用下方的 `yarn preview:cf`。

### 构建

```bash
yarn build
```

构建产物输出到 `./out`（`next.config.js` 中配置了 `output: 'export'`）。

### 常用命令

| 命令 | 说明 |
|------|------|
| `yarn dev` | 启动 Next.js 开发服务器 |
| `yarn build` | 构建静态站点到 `out/` |
| `yarn lint` | ESLint 检查 |
| `yarn preview:cf` | 本地预览（静态资源 + API） |
| `yarn deploy` | 构建并部署到 Cloudflare Pages |
| `yarn db:migrate` | 对远程 D1 执行数据库迁移 |
| `yarn db:list` | 查看最近 20 条联系表单留言 |

## 自定义指南

### 修改公司信息

- 页眉 / 页脚：`components/Header.tsx`、`components/Footer.tsx`
- 联系信息：`components/Footer.tsx`、`components/ContactInfo.tsx`
- 团队信息：`components/TeamSection.tsx`

### 修改文案与多语言

所有中英文文案集中在 `lib/i18n.ts`，按 `nav`、`hero`、`services` 等模块组织。新增或修改翻译后，在组件中通过 `useLanguage()` 的 `t('key')` 引用。

### 添加产品

在 `components/FeaturedProducts.tsx` 和 `components/ProductsGrid.tsx` 的 `products` 数组中添加：

```typescript
{
  id: 4,
  title: '新产品名称',
  description: '产品描述',
  image: '产品图片 URL',
  category: '产品类别',
  technologies: ['技术栈'],
  features: ['功能特性'],
  demoUrl: '#',
  githubUrl: '#',
  status: '已完成',
}
```

### 修改服务项目

编辑 `components/Services.tsx` 和 `components/ServicesOverview.tsx`。

### 自定义样式

- 全局样式：`app/globals.css`
- 主题配置：`tailwind.config.js`
- 组件样式：Tailwind CSS 类名

## 部署

项目配置为静态导出，部署目标为 **Cloudflare Pages**。静态资源来自 `out/`，API 来自 `functions/`。

- **Pages 项目名**: `appfactory-website`
- **生产域名**: `appfactory.xuzhen.top`

### 方式一：Wrangler CLI 部署（推荐）

```bash
# 首次需登录
yarn wrangler login

# 构建并部署静态资源 + API
yarn deploy
# 或
./deploy.sh
```

常用选项：

```bash
./deploy.sh --skip-build    # 跳过构建，仅重新部署
./deploy.sh --dry-run       # 检查环境，不实际上传
./deploy.sh --help          # 查看全部选项
```

### 方式二：Git 自动部署

1. 将代码推送到 GitHub
2. 在 [Cloudflare Pages](https://pages.cloudflare.com/) 创建项目并连接仓库
3. 构建设置：
   - **构建命令**: `yarn build`
   - **构建输出目录**: `out`
4. 在 Pages 项目设置中绑定 D1 数据库 `appfactory-contacts`（binding 名称：`DB`）
5. 确保 `functions/` 目录位于仓库根目录，Cloudflare 会自动识别 Pages Functions

### 本地预览（含 API）

```bash
yarn preview:cf
```

首次本地测试联系表单前，需应用本地 D1 迁移：

```bash
yarn build
yarn wrangler d1 migrations apply appfactory-contacts --local
yarn preview:cf
```

### 自定义域名

在 Cloudflare Pages 项目设置中添加自定义域名，DNS 由 Cloudflare 管理。

## 联系表单与 D1 数据库

联系表单通过 Cloudflare Pages Function（`functions/api/contact.ts`）将提交内容写入 D1 数据库 `appfactory-contacts`，无需配置邮件服务。

### 数据库结构

表 `contacts` 字段：

| 字段 | 说明 |
|------|------|
| `name` | 姓名（必填） |
| `email` | 邮箱（必填） |
| `phone` | 手机号（选填） |
| `company` | 公司 |
| `project_type` | 项目类型 |
| `budget` | 预算范围 |
| `message` | 留言内容（必填） |
| `created_at` | 提交时间 |

### 数据库迁移

```bash
# 远程（生产环境）
yarn db:migrate

# 本地开发
yarn wrangler d1 migrations apply appfactory-contacts --local
```

迁移文件位于 `migrations/` 目录，`wrangler.toml` 中已配置 `migrations_dir`。

### 查看提交的留言

```bash
yarn db:list
```

或在 Cloudflare Dashboard → **Workers & Pages** → **D1** → `appfactory-contacts` → **Console** 中执行：

```sql
SELECT * FROM contacts ORDER BY created_at DESC;
```

### 测试 API

```bash
curl -X POST https://appfactory.xuzhen.top/api/contact \
  -H 'Content-Type: application/json' \
  -d '{"name":"测试","email":"test@example.com","message":"hello"}'
```

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目。

## 联系我们

- 邮箱: suport@xuzhen.top
- 地址: 广东省深圳市南山区科技园南区

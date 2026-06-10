# AppFactory 官网

AppFactory 是一个专业的软件开发工作室官网，展示我们的产品成果和服务项目。

## 🚀 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React

## 📁 项目结构

```
├── app/                    # Next.js App Router 页面
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   ├── about/             # 关于我们页面
│   ├── products/          # 产品展示页面
│   ├── services/          # 服务项目页面
│   └── contact/           # 联系我们页面
├── components/            # 可复用组件
│   ├── Header.tsx         # 导航栏
│   ├── Footer.tsx         # 页脚
│   ├── Hero.tsx           # 首页英雄区
│   ├── FeaturedProducts.tsx # 精选产品展示
│   ├── Services.tsx       # 服务项目展示
│   ├── Stats.tsx          # 统计数据
│   ├── Testimonials.tsx   # 客户评价
│   ├── CTA.tsx            # 行动号召
│   ├── ContactForm.tsx    # 联系表单
│   ├── ContactInfo.tsx    # 联系信息
│   ├── ProductsGrid.tsx   # 产品网格
│   ├── ProductsFilter.tsx # 产品筛选
│   ├── CompanyStory.tsx   # 公司故事
│   ├── ValuesSection.tsx  # 价值观展示
│   ├── TeamSection.tsx    # 团队展示
│   ├── ServicesOverview.tsx # 服务概览
│   ├── ProcessSection.tsx # 开发流程
│   └── PricingSection.tsx # 价格方案
├── public/                # 静态资源
└── ...配置文件
```

## 🎨 功能特性

### 首页
- 响应式英雄区域
- 统计数据展示
- 精选产品展示
- 服务项目介绍
- 客户评价
- 行动号召区域

### 产品展示页面
- 产品筛选功能
- 产品网格展示
- 详细产品信息
- 技术栈展示
- 项目状态标识

### 关于我们页面
- 公司发展历程
- 核心价值观
- 团队介绍
- 专业技能展示

### 服务项目页面
- 服务类型展示
- 开发流程介绍
- 价格方案
- 技术栈说明

### 联系我们页面
- 联系表单
- 联系信息展示
- 快速响应承诺
- 团队优势介绍

## 🛠️ 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 🎯 自定义指南

### 修改公司信息

1. **公司名称**: 在 `components/Header.tsx` 和 `components/Footer.tsx` 中修改
2. **联系信息**: 在 `components/Footer.tsx` 和 `components/ContactInfo.tsx` 中修改
3. **团队信息**: 在 `components/TeamSection.tsx` 中修改团队成员信息

### 添加产品

在 `components/FeaturedProducts.tsx` 和 `components/ProductsGrid.tsx` 中的 `products` 数组中添加新产品：

```typescript
{
  id: 4,
  title: '新产品名称',
  description: '产品描述',
  image: '产品图片URL',
  category: '产品类别',
  technologies: ['技术栈'],
  features: ['功能特性'],
  demoUrl: '#',
  githubUrl: '#',
  status: '已完成'
}
```

### 修改服务项目

在 `components/Services.tsx` 和 `components/ServicesOverview.tsx` 中修改服务内容。

### 自定义样式

- 全局样式: `app/globals.css`
- 主题配置: `tailwind.config.js`
- 组件样式: 使用 Tailwind CSS 类名

## 📱 响应式设计

网站采用响应式设计，支持以下设备：

- 桌面端 (1024px+)
- 平板端 (768px - 1023px)
- 移动端 (< 768px)

## 🚀 部署

本项目已配置为静态导出（`output: 'export'`），构建产物位于 `./out` 目录，可部署到 Cloudflare Pages。

### Cloudflare Pages 部署

#### 方式一：Git 自动部署（推荐）

1. 将代码推送到 GitHub
2. 访问 [Cloudflare Pages](https://pages.cloudflare.com/) 并创建新项目
3. 连接 Git 仓库，配置构建设置：
   - **构建命令**: `yarn build`
   - **构建输出目录**: `out`
4. 保存后每次推送代码将自动部署

#### 方式二：Wrangler CLI 部署

```bash
# 安装依赖并构建
yarn install
yarn build

# 部署到 Cloudflare Pages
npx wrangler pages deploy ./out
```

#### 方式三：使用部署脚本

```bash
./deploy.sh
```

脚本会完成依赖安装和构建，并提示后续部署步骤。

#### 自定义域名

在 Cloudflare Pages 项目设置中添加自定义域名即可，DNS 由 Cloudflare 自动配置。

### 联系表单配置

联系表单通过 Cloudflare Pages Function（`functions/api/contact.ts`）发送邮件。

#### 方式一：Resend（推荐）

1. 在 [Resend](https://resend.com/) 注册并创建 API Key
2. 在 Resend 中验证发信域名（如 `xuzhen.top`）
3. 在 Cloudflare Pages 项目 **Settings → Environment variables** 中添加：
   - `RESEND_API_KEY`：Resend API Key（Secret）
   - `CONTACT_TO_EMAIL`：`suport@xuzhen.top`（可选，已有默认值）
   - `CONTACT_FROM_EMAIL`：`noreply@xuzhen.top`（可选，需为已验证域名）

#### 方式二：Mailchannels（无需第三方账号）

若不配置 `RESEND_API_KEY`，将自动使用 Mailchannels 发信。需在 Cloudflare DNS 为 `xuzhen.top` 添加 TXT 记录：

- **名称**: `_mailchannels`
- **内容**: `v=mc1 cfid=<你的 Cloudflare Account ID>`

Account ID 可在 Cloudflare Dashboard 右侧栏找到。

#### 本地测试

```bash
yarn build
cp .dev.vars.example .dev.vars   # 填入 RESEND_API_KEY
npx wrangler pages dev ./out
```

访问本地地址后，在联系页面提交表单即可测试。

> 注意：使用 `npm run dev` 启动时无法调用 `/api/contact`，请使用 `wrangler pages dev` 测试发信功能。

### 其他平台

静态站点也可部署到其他平台，如 Netlify、AWS S3、阿里云 OSS、腾讯云 COS 等。

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目。

## 📞 联系我们

- 邮箱: suport@xuzhen.top
- 地址: 广东省深圳市南山区科技园南区

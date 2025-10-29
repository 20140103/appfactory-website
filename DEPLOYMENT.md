# Cloudflare Pages 部署指南

## 🚀 部署方法

### 方法一：通过GitHub自动部署（推荐）

1. **准备GitHub仓库**
   ```bash
   # 初始化Git仓库
   git init
   git add .
   git commit -m "Initial commit: AppFactory website"
   
   # 推送到GitHub
   git remote add origin https://github.com/yourusername/appfactory-website.git
   git branch -M main
   git push -u origin main
   ```

2. **连接Cloudflare Pages**
   - 访问 [Cloudflare Pages](https://pages.cloudflare.com/)
   - 点击 "Connect to Git"
   - 选择您的GitHub仓库
   - 配置构建设置：
     - **Framework preset**: Next.js
     - **Build command**: `yarn build`
     - **Build output directory**: `out`
     - **Root directory**: `/` (留空)

3. **自动部署**
   - 每次推送到main分支都会自动触发部署
   - 部署完成后会获得一个 `*.pages.dev` 域名

### 方法二：手动上传文件

1. **构建项目**
   ```bash
   # 运行构建脚本
   ./deploy.sh
   
   # 或者手动构建
   yarn build
   ```

2. **上传到Cloudflare Pages**
   - 访问 [Cloudflare Pages](https://pages.cloudflare.com/)
   - 点击 "Upload assets"
   - 选择 `out` 文件夹中的所有内容
   - 点击 "Deploy site"

### 方法三：使用Wrangler CLI

1. **安装Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **登录Cloudflare**
   ```bash
   wrangler login
   ```

3. **部署**
   ```bash
   # 构建项目
   yarn build
   
   # 部署到Cloudflare Pages
   wrangler pages publish out
   ```

## ⚙️ 配置说明

### 构建配置
- **输出目录**: `out` (静态文件)
- **框架**: Next.js (静态导出)
- **图片优化**: 支持外部图片域名

### 性能优化
- **缓存策略**: 静态资源缓存1年
- **压缩**: 自动Gzip/Brotli压缩
- **CDN**: 全球CDN加速

### 安全配置
- **安全头**: 已配置安全响应头
- **HTTPS**: 自动SSL证书
- **DDoS保护**: Cloudflare DDoS保护

## 🌐 自定义域名

1. **添加自定义域名**
   - 在Cloudflare Pages项目设置中
   - 点击 "Custom domains"
   - 添加您的域名

2. **DNS配置**
   - 将域名CNAME记录指向 `*.pages.dev`
   - 或使用Cloudflare的DNS服务

## 📊 监控和分析

- **访问统计**: Cloudflare Analytics
- **性能监控**: Web Vitals
- **错误日志**: Cloudflare Dashboard

## 🔄 持续部署

### GitHub Actions (可选)
创建 `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: yarn install
      - run: yarn build
      - uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: appfactory-website
          directory: out
```

## 🛠️ 故障排除

### 常见问题

1. **构建失败**
   - 检查Node.js版本 (推荐18+)
   - 确保所有依赖已安装
   - 查看构建日志

2. **页面404**
   - 检查路由配置
   - 确保静态导出配置正确

3. **图片不显示**
   - 检查图片域名配置
   - 确保图片URL可访问

### 调试命令
```bash
# 本地预览构建结果
npx serve out

# 检查构建输出
ls -la out/

# 验证静态文件
curl -I https://your-domain.pages.dev/
```

## 📈 性能优化建议

1. **图片优化**
   - 使用WebP格式
   - 设置合适的图片尺寸
   - 启用懒加载

2. **代码分割**
   - 动态导入组件
   - 按需加载库

3. **缓存策略**
   - 静态资源长期缓存
   - API响应适当缓存

## 🔒 安全建议

1. **内容安全策略**
   - 配置CSP头
   - 限制资源来源

2. **HTTPS**
   - 强制HTTPS重定向
   - 使用HSTS

3. **访问控制**
   - 设置访问限制
   - 配置防火墙规则

---

## 📞 支持

如果遇到问题，请：
1. 查看Cloudflare Pages文档
2. 检查构建日志
3. 联系技术支持

# GitHub 仓库设置指南

## 🚀 已完成的步骤

✅ Git仓库已初始化  
✅ 主分支设置为 `main`  
✅ 所有文件已添加到暂存区  
✅ 初始提交已完成 (39个文件, 6571行代码)

## 📋 下一步：创建GitHub仓库

### 1. 在GitHub上创建新仓库

1. 访问 [GitHub](https://github.com)
2. 点击右上角的 "+" 按钮
3. 选择 "New repository"
4. 填写仓库信息：
   - **Repository name**: `appfactory-website`
   - **Description**: `Professional software development studio website built with Next.js`
   - **Visibility**: Public (推荐) 或 Private
   - **不要**勾选 "Add a README file" (我们已经有了)
   - **不要**勾选 "Add .gitignore" (我们已经有了)
   - **不要**勾选 "Choose a license" (可选)

5. 点击 "Create repository"

### 2. 连接本地仓库到GitHub

复制GitHub提供的命令，或者使用以下命令：

```bash
# 添加远程仓库 (替换 YOUR_USERNAME 为您的GitHub用户名)
git remote add origin https://github.com/YOUR_USERNAME/appfactory-website.git

# 推送到GitHub
git push -u origin main
```

### 3. 验证推送

推送成功后，您应该能在GitHub仓库页面看到所有文件。

## 🌐 部署到Cloudflare Pages

### 方法一：通过GitHub自动部署

1. 访问 [Cloudflare Pages](https://pages.cloudflare.com/)
2. 点击 "Connect to Git"
3. 选择您的GitHub账户
4. 选择 `appfactory-website` 仓库
5. 配置构建设置：
   - **Framework preset**: Next.js
   - **Build command**: `yarn build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (留空)
6. 点击 "Save and Deploy"

### 方法二：手动上传

如果选择手动上传，运行以下命令构建项目：

```bash
./deploy.sh
```

然后上传 `out` 文件夹到Cloudflare Pages。

## 📊 项目统计

- **总文件数**: 39个文件
- **代码行数**: 6,571行
- **主要技术栈**:
  - Next.js 14 (React框架)
  - TypeScript (类型安全)
  - Tailwind CSS (样式框架)
  - Framer Motion (动画库)
  - Lucide React (图标库)

## 🔧 常用Git命令

```bash
# 查看状态
git status

# 添加文件
git add .

# 提交更改
git commit -m "描述更改内容"

# 推送到GitHub
git push

# 拉取最新更改
git pull

# 查看提交历史
git log --oneline
```

## 🚀 部署后的优势

- **全球CDN**: Cloudflare的全球网络
- **自动HTTPS**: 免费SSL证书
- **自动部署**: 每次推送自动更新网站
- **性能优化**: 静态文件缓存和压缩
- **安全保护**: DDoS防护和安全头

## 📞 需要帮助？

如果遇到任何问题：
1. 检查GitHub仓库是否正确创建
2. 确认远程仓库URL是否正确
3. 查看Cloudflare Pages的构建日志
4. 参考 `DEPLOYMENT.md` 详细部署指南

---

**下一步**: 创建GitHub仓库并推送代码，然后连接Cloudflare Pages进行自动部署！

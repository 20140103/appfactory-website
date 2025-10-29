#!/bin/bash

echo "🚀 开始构建和部署到Cloudflare Pages..."

# 安装依赖
echo "📦 安装依赖..."
yarn install

# 构建项目
echo "🔨 构建项目..."
yarn build

# 检查构建是否成功
if [ $? -eq 0 ]; then
    echo "✅ 构建成功！"
    echo ""
    echo "📁 构建文件位置: ./out"
    echo ""
    echo "🌐 部署选项："
    echo "1. 通过Cloudflare Pages Dashboard上传 ./out 文件夹"
    echo "2. 通过Wrangler CLI部署: wrangler pages publish ./out"
    echo "3. 通过Git连接自动部署"
    echo ""
    echo "📋 部署步骤："
    echo "1. 访问 https://pages.cloudflare.com/"
    echo "2. 创建新项目"
    echo "3. 上传 ./out 文件夹或连接Git仓库"
    echo "4. 配置自定义域名（可选）"
else
    echo "❌ 构建失败，请检查错误信息"
    exit 1
fi

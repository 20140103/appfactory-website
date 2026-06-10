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
    echo "1. 通过 Git 连接自动部署（推荐，包含 Functions）"
    echo "2. 通过 Wrangler CLI 部署: npx wrangler pages deploy ./out"
    echo ""
    echo "📋 注意："
    echo "- 请从项目根目录部署，以包含 functions/ 联系表单 API"
    echo "- 仅上传 ./out 文件夹不会部署 API 功能"
    echo "- 联系表单需在 Cloudflare 配置 RESEND_API_KEY 或 Mailchannels DNS"
else
    echo "❌ 构建失败，请检查错误信息"
    exit 1
fi

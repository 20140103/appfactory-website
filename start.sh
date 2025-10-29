#!/bin/bash

echo "🚀 启动 AppFactory 官网开发服务器..."
echo ""

# 检查是否已安装依赖
if [ ! -d "node_modules" ]; then
    echo "📦 安装依赖包..."
    npm install
    echo ""
fi

echo "🌐 启动开发服务器..."
echo "访问地址: http://localhost:3000"
echo "按 Ctrl+C 停止服务器"
echo ""

npm run dev

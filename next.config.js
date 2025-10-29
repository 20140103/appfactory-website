/** @type {import('next').NextConfig} */
const nextConfig = {
    // 为Cloudflare Pages优化
    output: 'export',
    distDir: 'out',
    // 启用trailingSlash以确保静态导出路由正确
    trailingSlash: true,
    // 禁用图片优化以支持静态导出
    images: {
        unoptimized: true,
        domains: ['images.unsplash.com', 'via.placeholder.com'],
    },
}

module.exports = nextConfig

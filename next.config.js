/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'via.placeholder.com'],
    },
    // 为Cloudflare Pages优化
    output: 'export',
    distDir: 'out',
    // 禁用trailingSlash以避免路由问题
    trailingSlash: false,
}

module.exports = nextConfig

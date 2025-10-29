/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'via.placeholder.com'],
    },
    // 为Cloudflare Pages优化
    trailingSlash: true,
    output: 'export',
    distDir: 'out',
}

module.exports = nextConfig

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'AppFactory - 专业软件开发工作室',
    description: '专注于高质量软件产品开发，提供Web应用、移动应用、桌面应用等全方位开发服务',
    keywords: '软件开发,Web开发,移动应用,桌面应用,AppFactory',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="zh-CN">
            <body className={inter.className}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}

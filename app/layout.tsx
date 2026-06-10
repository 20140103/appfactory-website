import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://appfactory.xuzhen.top'),
  title: {
    default: 'AppFactory - 专业软件开发工作室',
    template: '%s | AppFactory'
  },
  description: '专注于高质量软件产品开发，提供Web应用、移动应用、桌面应用等全方位开发服务',
  keywords: ['软件开发', 'Web开发', '移动应用', '桌面应用', 'AppFactory', '外包开发', '定制开发'],
  applicationName: 'AppFactory',
  authors: [{ name: 'AppFactory' }],
  creator: 'AppFactory',
  publisher: 'AppFactory',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    url: 'https://appfactory.xuzhen.top/',
    siteName: 'AppFactory',
    title: 'AppFactory - 专业软件开发工作室',
    description: '专注于高质量软件产品开发，提供Web应用、移动应用、桌面应用等全方位开发服务',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'AppFactory - 专业软件开发工作室'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AppFactory - 专业软件开发工作室',
    description: '专注于高质量软件产品开发，提供Web应用、移动应用、桌面应用等全方位开发服务',
    images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop']
  },
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>

        {/* 结构化数据：Organization 与 WebSite */}
        <Script id="ld-org" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'AppFactory',
            url: 'https://appfactory-website.pages.dev',
            logo: 'https://appfactory-website.pages.dev/icon.png',
            sameAs: [
              'https://github.com/',
              'https://www.linkedin.com/'
            ],
            contactPoint: [{
              '@type': 'ContactPoint',
              contactType: 'sales',
              email: 'suport@xuzhen.top',
              availableLanguage: ['zh-CN', 'en']
            }]
          })}
        </Script>
        <Script id="ld-website" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'AppFactory',
            url: 'https://appfactory-website.pages.dev',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://appfactory-website.pages.dev/search?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          })}
        </Script>
      </body>
    </html>
  )
}

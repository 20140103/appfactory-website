'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Code2 } from 'lucide-react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    const navigation = [
        { name: '首页', href: '/' },
        { name: '产品展示', href: '/products' },
        { name: '服务项目', href: '/services' },
        { name: '关于我们', href: '/about' },
        { name: '联系我们', href: '/contact' },
    ]

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <Code2 className="h-8 w-8 text-primary-600" />
                        <span className="text-xl font-bold text-gray-900">AppFactory</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navigation.map((item) => {
                            // 简化的路径匹配逻辑
                            const isActive = pathname === item.href || 
                                           (item.href !== '/' && pathname.startsWith(item.href + '/'))
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative ${isActive
                                        ? 'text-primary-600'
                                        : 'text-gray-700 hover:text-primary-600'
                                        }`}
                                >
                                    {item.name}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"></span>
                                    )}
                                </Link>
                            )
                        })}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/contact" className="btn-primary">
                            开始合作
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-primary-600 p-2"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                            {navigation.map((item) => {
                                // 简化的路径匹配逻辑
                                const isActive = pathname === item.href || 
                                               (item.href !== '/' && pathname.startsWith(item.href + '/'))
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${isActive
                                            ? 'text-primary-600 bg-primary-50'
                                            : 'text-gray-700 hover:text-primary-600'
                                            }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            })}
                            <Link
                                href="/contact"
                                className="btn-primary block text-center mt-4"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                开始合作
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

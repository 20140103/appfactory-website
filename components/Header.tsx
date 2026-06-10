'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Code2 } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()
    const { t } = useLanguage()

    const navigation = [
        { name: t('nav.home'), href: '/' },
        { name: t('nav.products'), href: '/products/' },
        { name: t('nav.services'), href: '/services/' },
        { name: t('nav.about'), href: '/about/' },
        { name: t('nav.contact'), href: '/contact/' },
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
                    <nav className="hidden md:flex space-x-8 items-center">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href ||
                                (item.href !== '/' && pathname.startsWith(item.href))

                            return (
                                <Link
                                    key={item.href}
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
                        <LanguageSwitcher />
                        <Link href="/contact" className="btn-primary">
                            {t('hero.startCooperation')}
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
                                const isActive = pathname === item.href ||
                                    (item.href !== '/' && pathname.startsWith(item.href))

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${isActive
                                            ? 'text-primary-600 bg-primary-50'
                                            : 'text-gray-700 hover:text-primary-600'
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            })}
                            <div className="mt-4 space-y-2">
                                <LanguageSwitcher />
                                <Link
                                    href="/contact"
                                    className="btn-primary block text-center"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t('hero.startCooperation')}
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

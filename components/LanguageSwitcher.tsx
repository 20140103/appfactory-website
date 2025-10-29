'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Globe } from 'lucide-react'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  const toggleLanguage = () => {
    setLocale(locale === 'zh' ? 'en' : 'zh')
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200"
      title={locale === 'zh' ? 'Switch to English' : '切换到中文'}
    >
      <Globe className="h-4 w-4" />
      <span className="hidden sm:inline">
        {locale === 'zh' ? 'EN' : '中文'}
      </span>
    </button>
  )
}

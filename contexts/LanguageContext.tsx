'use client'

import React, { createContext, useContext, useState, useEffect, useRef } from 'react'
import { Locale, getMessages } from '@/lib/i18n'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  messages: ReturnType<typeof getMessages>
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('zh')
  const isInitialMount = useRef(true)

  useEffect(() => {
    const savedLocale = localStorage.getItem('language') as Locale
    if (savedLocale && ['zh', 'en'].includes(savedLocale)) {
      setLocale(savedLocale)
    }
  }, [])

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }
    localStorage.setItem('language', locale)
  }, [locale])

  const messages = getMessages(locale)

  // Translation function with nested key support
  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = messages
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, messages, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

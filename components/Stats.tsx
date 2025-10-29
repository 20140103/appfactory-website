'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
    {
        number: '50+',
        label: '完成项目',
        description: '涵盖Web、移动、桌面应用'
    },
    {
        number: '30+',
        label: '满意客户',
        description: '来自各行各业的合作伙伴'
    },
    {
        number: '5+',
        label: '年经验',
        description: '专业团队持续积累'
    },
    {
        number: '99%',
        label: '客户满意度',
        description: '基于项目交付质量'
    }
]

export default function Stats() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <section ref={ref} className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-lg font-semibold text-gray-900 mb-1">
                                {stat.label}
                            </div>
                            <div className="text-sm text-gray-600">
                                {stat.description}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

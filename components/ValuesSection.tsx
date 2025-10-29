'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Lightbulb, Shield, Users, Target, Zap } from 'lucide-react'

const values = [
    {
        icon: Heart,
        title: '客户至上',
        description: '我们始终将客户需求放在首位，致力于提供超越期望的服务体验。',
        color: 'text-red-600'
    },
    {
        icon: Lightbulb,
        title: '创新驱动',
        description: '持续学习新技术，探索创新解决方案，为客户创造更大价值。',
        color: 'text-yellow-600'
    },
    {
        icon: Shield,
        title: '质量保证',
        description: '严格的质量控制流程，确保每个项目都达到最高标准。',
        color: 'text-green-600'
    },
    {
        icon: Users,
        title: '团队协作',
        description: '重视团队合作，通过协作实现个人和团队的共同成长。',
        color: 'text-blue-600'
    },
    {
        icon: Target,
        title: '专业专注',
        description: '专注于软件开发领域，深耕技术，提供专业服务。',
        color: 'text-purple-600'
    },
    {
        icon: Zap,
        title: '高效执行',
        description: '快速响应客户需求，高效执行项目，确保按时交付。',
        color: 'text-orange-600'
    }
]

export default function ValuesSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <section ref={ref} className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        我们的价值观
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        这些核心价值观指导着我们的工作方式和决策过程，确保我们始终为客户提供最好的服务。
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="card p-8 text-center group hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className={`inline-flex p-4 rounded-full bg-gray-50 group-hover:bg-primary-50 transition-colors duration-300 mb-6`}>
                                <value.icon className={`h-8 w-8 ${value.color} group-hover:text-primary-600 transition-colors duration-300`} />
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                {value.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            加入我们的团队
                        </h3>
                        <p className="text-gray-600 mb-6">
                            我们正在寻找有才华的开发者加入我们的团队。如果你认同我们的价值观，
                            并且热爱软件开发，欢迎联系我们。
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact" className="btn-primary">
                                联系我们
                            </a>
                            <a href="/careers" className="btn-secondary">
                                查看职位
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code, Smartphone, Monitor } from 'lucide-react'

export default function Hero() {
    return (
        <section className="gradient-bg text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                                专业的
                                <span className="block text-yellow-300">软件开发</span>
                                工作室
                            </h1>
                            <p className="text-xl text-blue-100 max-w-lg">
                                我们专注于高质量软件产品开发，为客户提供Web应用、移动应用、桌面应用等全方位的开发服务。
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/products" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                                查看我们的作品
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600 transition-all duration-200">
                                开始合作
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 pt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-yellow-300">50+</div>
                                <div className="text-blue-100">完成项目</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-yellow-300">30+</div>
                                <div className="text-blue-100">满意客户</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-yellow-300">5+</div>
                                <div className="text-blue-100">年经验</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Elements */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10">
                            {/* Floating Cards */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-0 right-0 bg-white rounded-lg p-4 shadow-xl"
                            >
                                <div className="flex items-center space-x-2">
                                    <Code className="h-6 w-6 text-primary-600" />
                                    <span className="text-sm font-medium text-gray-700">Web开发</span>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                                className="absolute top-20 left-0 bg-white rounded-lg p-4 shadow-xl"
                            >
                                <div className="flex items-center space-x-2">
                                    <Smartphone className="h-6 w-6 text-primary-600" />
                                    <span className="text-sm font-medium text-gray-700">移动应用</span>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                                className="absolute bottom-0 right-10 bg-white rounded-lg p-4 shadow-xl"
                            >
                                <div className="flex items-center space-x-2">
                                    <Monitor className="h-6 w-6 text-primary-600" />
                                    <span className="text-sm font-medium text-gray-700">桌面应用</span>
                                </div>
                            </motion.div>

                            {/* Main Visual */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                <div className="space-y-4">
                                    <div className="h-4 bg-white/30 rounded w-3/4"></div>
                                    <div className="h-4 bg-white/30 rounded w-1/2"></div>
                                    <div className="h-4 bg-white/30 rounded w-2/3"></div>
                                    <div className="grid grid-cols-3 gap-2 mt-6">
                                        <div className="h-16 bg-white/20 rounded"></div>
                                        <div className="h-16 bg-white/20 rounded"></div>
                                        <div className="h-16 bg-white/20 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

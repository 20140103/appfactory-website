'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'

export default function CTA() {
    return (
        <section className="gradient-bg text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        准备开始您的下一个项目？
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                        让我们讨论您的需求，为您量身定制最适合的解决方案。
                        从概念到产品，我们全程陪伴您的数字化转型之旅。
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                            立即咨询
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link href="/products" className="btn-outline-light">
                            查看作品
                        </Link>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-md mx-auto"
                    >
                        <div className="flex items-center mb-4">
                            <Mail className="h-6 w-6 text-yellow-300 mr-3" />
                            <h3 className="text-lg font-semibold">邮件联系</h3>
                        </div>
                        <p className="text-blue-100 mb-2">发送邮件到我们的邮箱</p>
                        <a href="mailto:suport@xuzhen.top" className="text-yellow-300 hover:text-yellow-200 transition-colors">
                            suport@xuzhen.top
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-12 text-center"
                    >
                        <p className="text-blue-200 text-sm">
                            我们承诺在24小时内回复您的咨询
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

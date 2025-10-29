'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
    {
        id: 1,
        name: '张总',
        position: '科技公司CEO',
        company: '创新科技有限公司',
        content: 'AppFactory团队为我们开发的电商平台超出了我们的预期。他们不仅技术过硬，更重要的是能够理解我们的业务需求，提供了很多有价值的建议。',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
        id: 2,
        name: '李经理',
        position: '产品经理',
        company: '互联网公司',
        content: '从项目启动到上线，整个开发过程非常顺利。团队的专业性和责任心让我们印象深刻，最终交付的产品质量很高，用户体验也很好。',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
        id: 3,
        name: '王总监',
        position: '技术总监',
        company: '传统企业',
        content: '我们选择AppFactory进行数字化转型，他们帮助我们构建了完整的企业管理系统。现在我们的工作效率大大提升，客户满意度也显著提高。',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    }
]

export default function Testimonials() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <section ref={ref} className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        客户评价
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        听听我们的客户怎么说，他们的成功就是我们的成功。
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="card p-8 relative"
                        >
                            <div className="absolute top-6 right-6">
                                <Quote className="h-8 w-8 text-primary-100" />
                            </div>

                            <div className="flex items-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <div className="font-semibold text-gray-900">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        {testimonial.position}
                                    </div>
                                    <div className="text-sm text-primary-600">
                                        {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <div className="bg-primary-50 rounded-2xl p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            成为我们的下一个成功案例
                        </h3>
                        <p className="text-gray-600 mb-6">
                            加入我们的客户行列，让AppFactory帮助您实现数字化转型目标。
                        </p>
                        <a href="/contact" className="btn-primary">
                            开始合作
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

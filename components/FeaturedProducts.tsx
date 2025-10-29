'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ExternalLink, Github, Play } from 'lucide-react'

const products = [
    {
        id: 1,
        title: '企业管理系统',
        description: '基于React和Node.js开发的现代化企业管理系统，提供完整的用户管理、权限控制、数据统计等功能。',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
        category: 'Web应用',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
        features: ['用户管理', '权限控制', '数据统计', '实时通知'],
        demoUrl: '#',
        githubUrl: '#',
        status: '已完成'
    },
    {
        id: 2,
        title: '移动电商应用',
        description: '使用React Native开发的跨平台移动电商应用，支持iOS和Android平台，提供完整的购物体验。',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
        category: '移动应用',
        technologies: ['React Native', 'Redux', 'Firebase', 'Stripe'],
        features: ['商品浏览', '购物车', '支付集成', '订单管理'],
        demoUrl: '#',
        githubUrl: '#',
        status: '已完成'
    },
    {
        id: 3,
        title: '数据分析平台',
        description: '基于Vue.js和Python开发的数据可视化平台，支持多种数据源导入和实时数据分析展示。',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        category: 'Web应用',
        technologies: ['Vue.js', 'Python', 'D3.js', 'MongoDB'],
        features: ['数据导入', '实时分析', '图表展示', '报表生成'],
        demoUrl: '#',
        githubUrl: '#',
        status: '已完成'
    }
]

export default function FeaturedProducts() {
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
                        我们的作品展示
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        以下是我们在软件开发领域的代表性项目，展示了我们在不同技术栈和业务场景下的专业能力。
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="card group hover:scale-105 transition-transform duration-300"
                        >
                            <div className="relative overflow-hidden rounded-t-xl">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                        {product.category}
                                    </span>
                                </div>
                                <div className="absolute top-4 right-4">
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                        {product.status}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {product.title}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {product.description}
                                </p>

                                <div className="mb-4">
                                    <h4 className="text-sm font-medium text-gray-900 mb-2">技术栈</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {product.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h4 className="text-sm font-medium text-gray-900 mb-2">核心功能</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {product.features.map((feature) => (
                                            <span
                                                key={feature}
                                                className="bg-primary-50 text-primary-700 px-2 py-1 rounded text-xs"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex space-x-3">
                                    <Link
                                        href={product.demoUrl}
                                        className="flex-1 btn-primary text-center flex items-center justify-center"
                                    >
                                        <Play className="h-4 w-4 mr-2" />
                                        查看演示
                                    </Link>
                                    <Link
                                        href={product.githubUrl}
                                        className="btn-secondary flex items-center justify-center px-4"
                                    >
                                        <Github className="h-4 w-4" />
                                    </Link>
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
                    <Link href="/products" className="btn-primary">
                        查看所有项目
                        <ExternalLink className="ml-2 h-5 w-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useMemo } from 'react'
import Link from 'next/link'
import { ExternalLink, Github, Calendar, Users } from 'lucide-react'

const allProducts = [
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
        status: '已完成',
        completedDate: '2024-01-15',
        teamSize: 5,
        duration: '3个月'
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
        status: '已完成',
        completedDate: '2023-12-20',
        teamSize: 4,
        duration: '4个月'
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
        status: '已完成',
        completedDate: '2023-11-10',
        teamSize: 3,
        duration: '2个月'
    },
    {
        id: 4,
        title: '桌面办公套件',
        description: '使用Electron开发的跨平台桌面办公应用，集成文档编辑、表格处理、演示制作等功能。',
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop',
        category: '桌面应用',
        technologies: ['Electron', 'React', 'SQLite', 'WebRTC'],
        features: ['文档编辑', '表格处理', '演示制作', '团队协作'],
        demoUrl: '#',
        githubUrl: '#',
        status: '已完成',
        completedDate: '2023-10-05',
        teamSize: 6,
        duration: '5个月'
    },
    {
        id: 5,
        title: '智能客服系统',
        description: '集成AI技术的智能客服系统，支持多渠道接入、自动回复、情感分析等功能。',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
        category: 'Web应用',
        technologies: ['React', 'Python', 'TensorFlow', 'WebSocket'],
        features: ['智能回复', '情感分析', '多渠道接入', '工单管理'],
        demoUrl: '#',
        githubUrl: '#',
        status: '已完成',
        completedDate: '2023-09-15',
        teamSize: 4,
        duration: '3个月'
    },
    {
        id: 6,
        title: '健身追踪应用',
        description: '跨平台健身追踪应用，支持运动记录、数据分析、社交分享等功能。',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        category: '移动应用',
        technologies: ['Flutter', 'Firebase', 'HealthKit', 'Google Fit'],
        features: ['运动记录', '数据分析', '社交分享', '目标设定'],
        demoUrl: '#',
        githubUrl: '#',
        status: '已完成',
        completedDate: '2023-08-20',
        teamSize: 3,
        duration: '4个月'
    },
    {
        id: 7,
        title: '智能农业监控系统',
        description: '基于物联网技术的智能农业监控系统，实时监测土壤湿度、温度、光照等环境参数，支持远程控制和自动化管理。',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop',
        category: '物联网',
        technologies: ['Arduino', 'ESP32', 'MQTT', 'React', 'Node.js'],
        features: ['环境监测', '远程控制', '数据记录', '智能报警'],
        demoUrl: '#',
        githubUrl: '#',
        status: '已完成',
        completedDate: '2024-02-10',
        teamSize: 4,
        duration: '3个月'
    },
    {
        id: 8,
        title: '卫星通讯管理系统',
        description: '基于卫星通讯技术的远程监控管理系统，支持全球范围内的设备连接和数据传输，适用于海洋、航空、极地等特殊环境。',
        image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=600&h=400&fit=crop',
        category: '卫星通讯',
        technologies: ['C++', 'Python', 'Satellite API', 'WebSocket', 'React', 'MongoDB'],
        features: ['全球覆盖', '实时通讯', '数据中继', '位置追踪'],
        demoUrl: '#',
        githubUrl: '#',
        status: '已完成',
        completedDate: '2024-03-15',
        teamSize: 6,
        duration: '5个月'
    }
]

interface ProductsGridProps {
    filters: {
        category: string
        technologies: string[]
    }
}

export default function ProductsGrid({ filters }: ProductsGridProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    // 筛选产品
    const filteredProducts = useMemo(() => {
        return allProducts.filter(product => {
            // 按类别筛选
            const categoryMatch = filters.category === '全部' || product.category === filters.category
            
            // 按技术栈筛选
            const techMatch = filters.technologies.length === 0 || 
                filters.technologies.some(tech => product.technologies.includes(tech))
            
            return categoryMatch && techMatch
        })
    }, [filters])

    return (
        <div>
            {/* 筛选结果统计 */}
            <div className="mb-6 text-center">
                <p className="text-gray-600">
                    找到 <span className="font-semibold text-primary-600">{filteredProducts.length}</span> 个项目
                    {filters.category !== '全部' && (
                        <span className="ml-2">
                            (类别: <span className="font-medium">{filters.category}</span>)
                        </span>
                    )}
                    {filters.technologies.length > 0 && (
                        <span className="ml-2">
                            (技术: <span className="font-medium">{filters.technologies.join(', ')}</span>)
                        </span>
                    )}
                </p>
            </div>

            {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                    <div className="text-gray-400 mb-4">
                        <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">没有找到匹配的项目</h3>
                    <p className="text-gray-600 mb-4">请尝试调整筛选条件或清除筛选</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="btn-primary"
                    >
                        清除筛选
                    </button>
                </div>
            ) : (
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product, index) => (
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

                        <div className="mb-4">
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

                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {product.completedDate}
                            </div>
                            <div className="flex items-center">
                                <Users className="h-4 w-4 mr-1" />
                                {product.teamSize}人团队
                            </div>
                        </div>

                        <div className="text-sm text-gray-500 mb-4">
                            开发周期: {product.duration}
                        </div>

                        <div className="flex space-x-3">
                            <Link
                                href={product.demoUrl}
                                className="flex-1 btn-primary text-center flex items-center justify-center"
                            >
                                <ExternalLink className="h-4 w-4 mr-2" />
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
            )}
        </div>
    )
}

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Smartphone, Monitor, Database, Cloud, Shield } from 'lucide-react'

const services = [
    {
        icon: Code,
        title: 'Web应用开发',
        description: '使用现代技术栈开发响应式、高性能的Web应用程序',
        features: ['React/Vue.js开发', 'Node.js后端', '数据库设计', 'API开发'],
        color: 'text-blue-600'
    },
    {
        icon: Smartphone,
        title: '移动应用开发',
        description: '跨平台移动应用开发，支持iOS和Android平台',
        features: ['React Native', 'Flutter开发', '原生开发', '应用商店发布'],
        color: 'text-green-600'
    },
    {
        icon: Monitor,
        title: '桌面应用开发',
        description: '使用Electron等技术开发跨平台桌面应用程序',
        features: ['Electron应用', '原生桌面应用', '系统集成', '自动更新'],
        color: 'text-purple-600'
    },
    {
        icon: Database,
        title: '数据库设计',
        description: '专业的数据库架构设计和优化服务',
        features: ['数据库设计', '性能优化', '数据迁移', '备份策略'],
        color: 'text-orange-600'
    },
    {
        icon: Cloud,
        title: '云服务部署',
        description: '应用部署到云端，提供高可用性和可扩展性',
        features: ['AWS/Azure部署', 'Docker容器化', 'CI/CD流程', '监控运维'],
        color: 'text-cyan-600'
    },
    {
        icon: Shield,
        title: '安全审计',
        description: '全面的安全测试和代码审计服务',
        features: ['代码审计', '安全测试', '漏洞修复', '安全培训'],
        color: 'text-red-600'
    }
]

export default function Services() {
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
                        我们的服务项目
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        我们提供全方位的软件开发服务，从需求分析到产品上线，为您的业务提供完整的技术解决方案。
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="card p-8 group hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="mb-6">
                                <div className={`inline-flex p-3 rounded-lg bg-gray-50 group-hover:bg-primary-50 transition-colors duration-300`}>
                                    <service.icon className={`h-8 w-8 ${service.color} group-hover:text-primary-600 transition-colors duration-300`} />
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 mb-6">
                                {service.description}
                            </p>

                            <ul className="space-y-2">
                                {service.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            需要定制化解决方案？
                        </h3>
                        <p className="text-gray-600 mb-6">
                            我们理解每个项目都有独特的需求，我们提供完全定制化的开发服务，
                            确保解决方案完美匹配您的业务需求。
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact" className="btn-primary">
                                联系我们
                            </a>
                            <a href="/services" className="btn-secondary">
                                了解更多
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

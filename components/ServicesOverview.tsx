'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Smartphone, Monitor, Database, Cloud, Shield, Zap, Target, Wifi } from 'lucide-react'

const services = [
    {
        icon: Code,
        title: 'Web应用开发',
        description: '使用现代技术栈开发响应式、高性能的Web应用程序',
        features: [
            'React/Vue.js前端开发',
            'Node.js/Python后端开发',
            '数据库设计与优化',
            'RESTful API开发',
            '微服务架构设计',
            '性能优化与监控'
        ],
        technologies: ['React', 'Vue.js', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
        color: 'text-blue-600',
        bgColor: 'bg-blue-50'
    },
    {
        icon: Smartphone,
        title: '移动应用开发',
        description: '跨平台移动应用开发，支持iOS和Android平台',
        features: [
            'React Native跨平台开发',
            'Flutter应用开发',
            '原生iOS/Android开发',
            '应用商店发布',
            '推送通知集成',
            '支付系统集成'
        ],
        technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Stripe'],
        color: 'text-green-600',
        bgColor: 'bg-green-50'
    },
    {
        icon: Monitor,
        title: '桌面应用开发',
        description: '使用Electron等技术开发跨平台桌面应用程序',
        features: [
            'Electron桌面应用',
            '原生桌面应用开发',
            '系统集成与API调用',
            '自动更新机制',
            '离线功能支持',
            '多平台兼容性'
        ],
        technologies: ['Electron', 'React', 'Vue.js', 'C#', 'Java', 'Python'],
        color: 'text-purple-600',
        bgColor: 'bg-purple-50'
    },
    {
        icon: Database,
        title: '数据库设计',
        description: '专业的数据库架构设计和优化服务',
        features: [
            '数据库架构设计',
            '性能优化与调优',
            '数据迁移与同步',
            '备份与恢复策略',
            '数据安全与加密',
            '监控与维护'
        ],
        technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle'],
        color: 'text-orange-600',
        bgColor: 'bg-orange-50'
    },
    {
        icon: Cloud,
        title: '云服务部署',
        description: '应用部署到云端，提供高可用性和可扩展性',
        features: [
            'AWS/Azure云部署',
            'Docker容器化',
            'Kubernetes编排',
            'CI/CD流程搭建',
            '监控与日志管理',
            '自动扩缩容'
        ],
        technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
        color: 'text-cyan-600',
        bgColor: 'bg-cyan-50'
    },
    {
        icon: Shield,
        title: '安全审计',
        description: '全面的安全测试和代码审计服务',
        features: [
            '代码安全审计',
            '漏洞扫描与修复',
            '安全测试',
            '数据加密',
            '访问控制',
            '安全培训'
        ],
        technologies: ['OWASP', 'SAST', 'DAST', 'Penetration Testing', 'SSL/TLS', 'OAuth'],
        color: 'text-red-600',
        bgColor: 'bg-red-50'
    },
    {
        icon: Wifi,
        title: '物联网解决方案',
        description: '智能设备连接、数据采集和远程监控的完整物联网解决方案',
        features: [
            '智能设备连接',
            '传感器数据采集',
            '远程监控与控制',
            '实时数据处理',
            '设备管理平台',
            '数据分析与预测'
        ],
        technologies: ['Arduino', 'ESP32', 'MQTT', 'LoRaWAN', 'React', 'Node.js'],
        color: 'text-indigo-600',
        bgColor: 'bg-indigo-50'
    }
]

export default function ServicesOverview() {
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
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        我们的服务项目
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        我们提供全方位的软件开发服务，从需求分析到产品上线，为您的业务提供完整的技术解决方案。
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="card p-8 group hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-start space-x-4 mb-6">
                                <div className={`p-3 rounded-lg ${service.bgColor} group-hover:bg-primary-50 transition-colors duration-300`}>
                                    <service.icon className={`h-8 w-8 ${service.color} group-hover:text-primary-600 transition-colors duration-300`} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-sm font-medium text-gray-900 mb-3">服务内容</h4>
                                <ul className="space-y-2">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-sm font-medium text-gray-900 mb-3">技术栈</h4>
                                <div className="flex flex-wrap gap-2">
                                    {service.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
                        <h2 className="text-3xl font-bold mb-4">需要定制化解决方案？</h2>
                        <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
                            我们理解每个项目都有独特的需求。我们提供完全定制化的开发服务，
                            确保解决方案完美匹配您的业务需求。
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                                联系我们
                            </a>
                            <a href="#process" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600 transition-all duration-200">
                                了解流程
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

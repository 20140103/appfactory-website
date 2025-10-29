'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Search, PenTool, Code, TestTube, Rocket, Headphones } from 'lucide-react'

const processSteps = [
    {
        step: 1,
        title: '需求分析',
        description: '深入了解您的业务需求，分析技术可行性，制定项目计划',
        icon: Search,
        details: [
            '业务需求调研',
            '技术方案评估',
            '项目范围确定',
            '时间计划制定'
        ],
        color: 'text-blue-600',
        bgColor: 'bg-blue-50'
    },
    {
        step: 2,
        title: '设计阶段',
        description: 'UI/UX设计，系统架构设计，数据库设计',
        icon: PenTool,
        details: [
            '用户界面设计',
            '用户体验优化',
            '系统架构设计',
            '数据库结构设计'
        ],
        color: 'text-green-600',
        bgColor: 'bg-green-50'
    },
    {
        step: 3,
        title: '开发阶段',
        description: '按照设计规范进行编码实现，定期汇报进度',
        icon: Code,
        details: [
            '前端开发',
            '后端开发',
            '数据库实现',
            'API接口开发'
        ],
        color: 'text-purple-600',
        bgColor: 'bg-purple-50'
    },
    {
        step: 4,
        title: '测试阶段',
        description: '全面测试功能，确保产品质量和稳定性',
        icon: TestTube,
        details: [
            '功能测试',
            '性能测试',
            '安全测试',
            '兼容性测试'
        ],
        color: 'text-orange-600',
        bgColor: 'bg-orange-50'
    },
    {
        step: 5,
        title: '部署上线',
        description: '部署到生产环境，配置监控，确保稳定运行',
        icon: Rocket,
        details: [
            '生产环境部署',
            '性能监控配置',
            '安全配置',
            '备份策略实施'
        ],
        color: 'text-red-600',
        bgColor: 'bg-red-50'
    },
    {
        step: 6,
        title: '维护支持',
        description: '提供持续的技术支持和维护服务',
        icon: Headphones,
        details: [
            'bug修复',
            '功能更新',
            '性能优化',
            '技术支持'
        ],
        color: 'text-cyan-600',
        bgColor: 'bg-cyan-50'
    }
]

export default function ProcessSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <section ref={ref} id="process" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        我们的开发流程
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        我们采用标准化的开发流程，确保每个项目都能按时、按质完成。
                        从需求分析到产品上线，我们全程陪伴您的项目。
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 hidden lg:block"></div>

                    <div className="space-y-12">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:flex-row`}
                            >
                                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                                    <div className="card p-8 group hover:shadow-xl transition-shadow duration-300">
                                        <div className="flex items-start space-x-4 mb-6">
                                            <div className={`p-3 rounded-lg ${step.bgColor} group-hover:bg-primary-50 transition-colors duration-300`}>
                                                <step.icon className={`h-8 w-8 ${step.color} group-hover:text-primary-600 transition-colors duration-300`} />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <span className="bg-primary-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                                                        步骤 {step.step}
                                                    </span>
                                                    <h3 className="text-xl font-semibold text-gray-900">
                                                        {step.title}
                                                    </h3>
                                                </div>
                                                <p className="text-gray-600 mb-4">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-medium text-gray-900 mb-3">具体工作内容</h4>
                                            <ul className="space-y-2">
                                                {step.details.map((detail, detailIndex) => (
                                                    <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                                                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3"></div>
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10 hidden lg:flex">
                                    {step.step}
                                </div>

                                <div className="w-full lg:w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            为什么选择我们的流程？
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">标准化</h4>
                                <p className="text-gray-600 text-sm">
                                    采用行业标准流程，确保项目质量和进度可控
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">透明化</h4>
                                <p className="text-gray-600 text-sm">
                                    定期汇报进度，让您随时了解项目状态
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">灵活性</h4>
                                <p className="text-gray-600 text-sm">
                                    根据项目特点调整流程，确保最佳效果
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

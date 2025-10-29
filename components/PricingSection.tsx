'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Star, Zap } from 'lucide-react'

const pricingPlans = [
    {
        name: '基础版',
        description: '适合小型项目和个人开发者',
        price: '5万起',
        duration: '1-2个月',
        features: [
            '需求分析',
            'UI/UX设计',
            '前端开发',
            '后端开发',
            '基础测试',
            '部署上线',
            '1个月技术支持'
        ],
        limitations: [
            '功能相对简单',
            '用户数量有限制',
            '不支持复杂业务逻辑'
        ],
        color: 'text-gray-600',
        bgColor: 'bg-gray-50',
        buttonText: '选择基础版',
        popular: false
    },
    {
        name: '专业版',
        description: '适合中型企业和复杂项目',
        price: '15万起',
        duration: '3-4个月',
        features: [
            '详细需求分析',
            '专业UI/UX设计',
            '前后端开发',
            '数据库设计',
            'API开发',
            '全面测试',
            '云服务部署',
            '3个月技术支持',
            '性能优化',
            '安全加固'
        ],
        limitations: [
            '开发周期较长',
            '成本相对较高'
        ],
        color: 'text-primary-600',
        bgColor: 'bg-primary-50',
        buttonText: '选择专业版',
        popular: true
    },
    {
        name: '企业版',
        description: '适合大型企业和复杂系统',
        price: '30万起',
        duration: '6个月以上',
        features: [
            '深度需求分析',
            '企业级架构设计',
            '微服务开发',
            '高并发处理',
            '安全审计',
            '性能优化',
            '监控系统',
            '6个月技术支持',
            '7x24小时运维',
            '定制化开发',
            '培训服务'
        ],
        limitations: [
            '开发周期长',
            '需要专业团队配合'
        ],
        color: 'text-purple-600',
        bgColor: 'bg-purple-50',
        buttonText: '联系咨询',
        popular: false
    }
]

export default function PricingSection() {
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
                        服务价格
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        我们提供灵活的定价方案，根据项目复杂度和需求为您选择最适合的服务套餐。
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`card p-8 relative group hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                                        <Star className="h-4 w-4 mr-1" />
                                        最受欢迎
                                    </div>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {plan.description}
                                </p>
                                <div className="mb-4">
                                    <span className="text-4xl font-bold text-primary-600">
                                        {plan.price}
                                    </span>
                                    <span className="text-gray-600 ml-2">起</span>
                                </div>
                                <div className="text-sm text-gray-500">
                                    开发周期: {plan.duration}
                                </div>
                            </div>

                            <div className="mb-8">
                                <h4 className="font-semibold text-gray-900 mb-4">包含服务</h4>
                                <ul className="space-y-3">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-600 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-8">
                                <h4 className="font-semibold text-gray-900 mb-4">注意事项</h4>
                                <ul className="space-y-2">
                                    {plan.limitations.map((limitation, limitIndex) => (
                                        <li key={limitIndex} className="flex items-start">
                                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-600 text-sm">{limitation}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${plan.popular
                                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {plan.buttonText}
                            </button>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">需要定制化报价？</h3>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            每个项目都有其独特性，我们提供完全定制化的解决方案。
                            联系我们获取详细的项目评估和报价。
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                                获取定制报价
                            </a>
                            <a href="/products" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600 transition-all duration-200">
                                查看案例
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12"
                >
                    <div className="bg-gray-50 rounded-xl p-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">为什么选择我们？</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="bg-primary-100 p-3 rounded-lg w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                                    <Zap className="h-6 w-6 text-primary-600" />
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">快速交付</h4>
                                <p className="text-gray-600 text-sm">高效开发流程，确保项目按时交付</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-primary-100 p-3 rounded-lg w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                                    <Check className="h-6 w-6 text-primary-600" />
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">质量保证</h4>
                                <p className="text-gray-600 text-sm">严格的质量控制，确保产品稳定性</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-primary-100 p-3 rounded-lg w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                                    <Star className="h-6 w-6 text-primary-600" />
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">专业团队</h4>
                                <p className="text-gray-600 text-sm">经验丰富的开发团队，技术实力强</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-primary-100 p-3 rounded-lg w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                                    <Zap className="h-6 w-6 text-primary-600" />
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">持续支持</h4>
                                <p className="text-gray-600 text-sm">提供长期技术支持和维护服务</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

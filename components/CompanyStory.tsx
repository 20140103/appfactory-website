'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Target, Users, Award } from 'lucide-react'

export default function CompanyStory() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const milestones = [
        {
            year: '2019',
            title: '公司成立',
            description: 'AppFactory在北京成立，专注于软件开发服务',
            icon: Code2
        },
        {
            year: '2020',
            title: '团队扩张',
            description: '团队扩展到10人，完成首个大型企业项目',
            icon: Users
        },
        {
            year: '2021',
            title: '技术突破',
            description: '掌握React Native和Flutter跨平台开发技术',
            icon: Target
        },
        {
            year: '2022',
            title: '行业认可',
            description: '获得"最佳软件开发团队"奖项，客户满意度达99%',
            icon: Award
        },
        {
            year: '2023',
            title: '规模发展',
            description: '团队扩展到20人，完成50+项目，年收入突破千万',
            icon: Users
        },
        {
            year: '2024',
            title: '持续创新',
            description: '引入AI技术，推出智能开发工具，服务更多客户',
            icon: Code2
        }
    ]

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
                        我们的故事
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        AppFactory成立于2019年，从一个小团队发展成为专业的软件开发工作室。
                        我们始终专注于为客户提供高质量的软件解决方案。
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>

                    <div className="space-y-12">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={milestone.year}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                            >
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                    <div className="card p-6">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-primary-100 p-3 rounded-lg mr-4">
                                                <milestone.icon className="h-6 w-6 text-primary-600" />
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-primary-600">{milestone.year}</div>
                                                <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                                            </div>
                                        </div>
                                        <p className="text-gray-600">{milestone.description}</p>
                                    </div>
                                </div>

                                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                                    {index + 1}
                                </div>

                                <div className="w-1/2"></div>
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
                    <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
                        <h2 className="text-3xl font-bold mb-4">我们的愿景</h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            成为最受信赖的软件开发工作室，通过技术创新帮助更多企业实现数字化转型，
                            让技术真正服务于业务发展。
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

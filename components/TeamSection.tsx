'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const teamMembers = [
    {
        name: '张总',
        position: '创始人 & CEO',
        description: '10年软件开发经验，专注于企业级应用架构设计',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
        skills: ['架构设计', '团队管理', '业务分析'],
        social: {
            github: '#',
            linkedin: '#',
            email: 'zhang@appfactory.com'
        }
    },
    {
        name: '李经理',
        position: '技术总监',
        description: '8年全栈开发经验，精通多种技术栈',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
        skills: ['React', 'Node.js', 'Python', 'DevOps'],
        social: {
            github: '#',
            linkedin: '#',
            email: 'li@appfactory.com'
        }
    },
    {
        name: '王工程师',
        position: '前端开发专家',
        description: '6年前端开发经验，专注于用户体验设计',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
        skills: ['React', 'Vue.js', 'TypeScript', 'UI/UX'],
        social: {
            github: '#',
            linkedin: '#',
            email: 'wang@appfactory.com'
        }
    },
    {
        name: '陈工程师',
        position: '后端开发专家',
        description: '7年后端开发经验，专注于系统架构和性能优化',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
        skills: ['Java', 'Spring Boot', '微服务', '数据库'],
        social: {
            github: '#',
            linkedin: '#',
            email: 'chen@appfactory.com'
        }
    },
    {
        name: '刘工程师',
        position: '移动开发专家',
        description: '5年移动开发经验，精通跨平台开发技术',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
        skills: ['React Native', 'Flutter', 'iOS', 'Android'],
        social: {
            github: '#',
            linkedin: '#',
            email: 'liu@appfactory.com'
        }
    },
    {
        name: '赵工程师',
        position: 'UI/UX设计师',
        description: '6年设计经验，专注于用户界面和用户体验设计',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
        skills: ['UI设计', 'UX设计', '原型设计', '品牌设计'],
        social: {
            github: '#',
            linkedin: '#',
            email: 'zhao@appfactory.com'
        }
    }
]

export default function TeamSection() {
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
                        我们的团队
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        我们拥有一支经验丰富、技术精湛的开发团队，每个成员都在自己的领域有着深厚的专业积累。
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="card p-6 text-center group hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="mb-6">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
                                />
                                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-primary-600 font-medium mb-3">
                                    {member.position}
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {member.description}
                                </p>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-sm font-medium text-gray-900 mb-3">专业技能</h4>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {member.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-center space-x-4">
                                <a
                                    href={member.social.github}
                                    className="text-gray-400 hover:text-primary-600 transition-colors"
                                >
                                    <Github className="h-5 w-5" />
                                </a>
                                <a
                                    href={member.social.linkedin}
                                    className="text-gray-400 hover:text-primary-600 transition-colors"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a
                                    href={`mailto:${member.social.email}`}
                                    className="text-gray-400 hover:text-primary-600 transition-colors"
                                >
                                    <Mail className="h-5 w-5" />
                                </a>
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
                        <h3 className="text-2xl font-bold mb-4">加入我们的团队</h3>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            我们正在寻找有才华的开发者加入我们的团队。如果你热爱技术，追求卓越，
                            欢迎与我们联系。
                        </p>
                        <a href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                            查看职位机会
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

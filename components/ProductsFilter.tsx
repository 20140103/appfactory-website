'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const categories = ['全部', 'Web应用', '移动应用', '桌面应用', '数据分析', '物联网', '卫星通讯']
const technologies = ['React', 'Vue.js', 'Node.js', 'React Native', 'Python', 'TypeScript', 'Arduino', 'ESP32', 'MQTT', 'C++', 'Satellite API', 'WebSocket']

export default function ProductsFilter() {
    const [selectedCategory, setSelectedCategory] = useState('全部')
    const [selectedTech, setSelectedTech] = useState<string[]>([])

    const handleTechToggle = (tech: string) => {
        setSelectedTech(prev =>
            prev.includes(tech)
                ? prev.filter(t => t !== tech)
                : [...prev, tech]
        )
    }

    return (
        <div className="mb-12">
            <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">筛选项目</h3>

                {/* Category Filter */}
                <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">项目类型</h4>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${selectedCategory === category
                                        ? 'bg-primary-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Technology Filter */}
                <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">技术栈</h4>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                            <button
                                key={tech}
                                onClick={() => handleTechToggle(tech)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${selectedTech.includes(tech)
                                        ? 'bg-primary-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {tech}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Clear Filters */}
                {(selectedCategory !== '全部' || selectedTech.length > 0) && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                        <button
                            onClick={() => {
                                setSelectedCategory('全部')
                                setSelectedTech([])
                            }}
                            className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                        >
                            清除所有筛选
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

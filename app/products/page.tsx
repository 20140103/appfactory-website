'use client'

import { useState } from 'react'
import ProductsGrid from '@/components/ProductsGrid'
import ProductsFilter from '@/components/ProductsFilter'

export default function ProductsPage() {
    const [filters, setFilters] = useState({
        category: '全部',
        technologies: [] as string[]
    })

    const handleFilterChange = (newFilters: { category: string; technologies: string[] }) => {
        setFilters(newFilters)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        我们的产品展示
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        探索我们完成的所有软件项目，每个项目都体现了我们对技术质量和用户体验的追求。
                    </p>
                </div>

                <ProductsFilter onFilterChange={handleFilterChange} />
                <ProductsGrid filters={filters} />
            </div>
        </div>
    )
}

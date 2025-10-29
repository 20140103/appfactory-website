import ServicesOverview from '@/components/ServicesOverview'
import ProcessSection from '@/components/ProcessSection'
import PricingSection from '@/components/PricingSection'

export const metadata = {
    title: '服务项目 - AppFactory',
    description: '了解我们提供的软件开发服务，包括Web应用、移动应用、桌面应用等。',
}

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white">
            <ServicesOverview />
            <ProcessSection />
            <PricingSection />
        </div>
    )
}

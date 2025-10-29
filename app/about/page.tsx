import TeamSection from '@/components/TeamSection'
import CompanyStory from '@/components/CompanyStory'
import ValuesSection from '@/components/ValuesSection'

export const metadata = {
    title: '关于我们 - AppFactory',
    description: '了解AppFactory的发展历程、团队文化和核心价值观。',
}

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <CompanyStory />
            <ValuesSection />
            <TeamSection />
        </div>
    )
}

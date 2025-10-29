import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'

export const metadata = {
    title: '联系我们 - AppFactory',
    description: '联系我们开始您的下一个软件项目，我们提供专业的开发服务。',
}

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        联系我们
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        准备开始您的下一个项目？我们很乐意与您讨论您的需求并提供专业的建议。
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <ContactForm />
                    <ContactInfo />
                </div>
            </div>
        </div>
    )
}

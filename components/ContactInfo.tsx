'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react'

export default function ContactInfo() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
        >
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">联系信息</h2>
                <p className="text-gray-600 mb-8">
                    我们很乐意与您讨论您的项目需求。请选择最适合您的联系方式与我们取得联系。
                </p>
            </div>

            <div className="space-y-6">
                <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-1">邮箱联系</h3>
                        <p className="text-gray-600 mb-2">发送邮件到我们的邮箱</p>
                        <a href="mailto:contact@appfactory.com" className="text-primary-600 hover:text-primary-700 font-medium">
                            contact@appfactory.com
                        </a>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                        <Phone className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-1">电话咨询</h3>
                        <p className="text-gray-600 mb-2">直接拨打我们的电话</p>
                        <a href="tel:+8613800000000" className="text-primary-600 hover:text-primary-700 font-medium">
                            +86 138-0000-0000
                        </a>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-1">办公地址</h3>
                        <p className="text-gray-600">
                            北京市朝阳区科技园区创新大厦<br />
                            15层 1508室
                        </p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                        <Clock className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-1">工作时间</h3>
                        <p className="text-gray-600">
                            周一至周五: 9:00 - 18:00<br />
                            周六: 10:00 - 16:00<br />
                            周日: 休息
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">快速响应承诺</h3>
                <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                        <MessageCircle className="h-5 w-5 text-primary-600" />
                        <span className="text-gray-700">邮件咨询: 24小时内回复</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-primary-600" />
                        <span className="text-gray-700">电话咨询: 工作时间即时响应</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-primary-600" />
                        <span className="text-gray-700">项目评估: 3个工作日内提供方案</span>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">为什么选择我们？</h3>
                <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2"></div>
                        <span>5年以上软件开发经验</span>
                    </li>
                    <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2"></div>
                        <span>50+成功项目案例</span>
                    </li>
                    <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2"></div>
                        <span>99%客户满意度</span>
                    </li>
                    <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2"></div>
                        <span>全程技术支持和维护</span>
                    </li>
                </ul>
            </div>
        </motion.div>
    )
}

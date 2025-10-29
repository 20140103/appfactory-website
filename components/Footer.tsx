import Link from 'next/link'
import { Code2, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-secondary-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <Code2 className="h-8 w-8 text-primary-400" />
                            <span className="text-xl font-bold">AppFactory</span>
                        </div>
                        <p className="text-gray-300 mb-4 max-w-md">
                            专业的软件开发工作室，致力于为客户提供高质量的软件解决方案。
                            我们专注于Web应用、移动应用和桌面应用的开发，帮助客户实现数字化转型。
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">快速链接</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-primary-400 transition-colors">
                                    首页
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="text-gray-300 hover:text-primary-400 transition-colors">
                                    产品展示
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-300 hover:text-primary-400 transition-colors">
                                    服务项目
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-primary-400 transition-colors">
                                    关于我们
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-primary-400 transition-colors">
                                    联系我们
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">联系我们</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-primary-400" />
                                <span className="text-gray-300">contact@appfactory.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-primary-400" />
                                <span className="text-gray-300">+86 138-0000-0000</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-primary-400 mt-1" />
                                <span className="text-gray-300">北京市朝阳区<br />科技园区创新大厦</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-400">
                        © 2024 AppFactory. 保留所有权利。
                    </p>
                </div>
            </div>
        </footer>
    )
}

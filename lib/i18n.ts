export const locales = ['zh', 'en'] as const
export type Locale = typeof locales[number]

export const defaultLocale: Locale = 'zh'

export const messages = {
  zh: {
    // Navigation
    nav: {
      home: '首页',
      products: '产品展示',
      services: '服务项目',
      about: '关于我们',
      contact: '联系我们',
    },
    // Hero Section
    hero: {
      title: '专业的',
      titleHighlight: '软件开发',
      titleSuffix: '工作室',
      description: '我们专注于高质量软件产品开发，为客户提供Web应用、移动应用、桌面应用等全方位的开发服务。',
      viewWorks: '查看我们的作品',
      startCooperation: '开始合作',
      stats: {
        projects: '完成项目',
        clients: '满意客户',
        experience: '年经验',
      }
    },
    // Services
    services: {
      title: '我们的服务项目',
      description: '我们提供全方位的软件开发服务，从需求分析到产品上线，为您的业务提供完整的技术解决方案。',
      webDev: {
        title: 'Web应用开发',
        description: '使用现代技术栈开发响应式、高性能的Web应用程序',
        features: ['React/Vue.js开发', 'Node.js后端', '数据库设计', 'API开发']
      },
      mobileDev: {
        title: '移动应用开发',
        description: '跨平台移动应用开发，支持iOS和Android平台',
        features: ['React Native', 'Flutter开发', '原生开发', '应用商店发布']
      },
      desktopDev: {
        title: '桌面应用开发',
        description: '使用Electron等技术开发跨平台桌面应用程序',
        features: ['Electron应用', '原生桌面应用', '系统集成', '自动更新']
      },
      database: {
        title: '数据库设计',
        description: '专业的数据库架构设计和优化服务',
        features: ['数据库设计', '性能优化', '数据迁移', '备份恢复']
      },
      iot: {
        title: '物联网解决方案',
        description: '基于物联网技术的智能设备连接和数据管理解决方案',
        features: ['设备连接', '数据采集', '远程监控', '智能分析']
      },
      custom: {
        title: '定制开发',
        description: '根据您的具体需求，我们提供完全定制化的开发服务',
        features: ['需求分析', '技术选型', '项目管理', '持续维护']
      }
    },
    // Products
    products: {
      title: '我们的作品展示',
      description: '以下是我们在软件开发领域的代表性项目，展示了我们在不同技术栈和业务场景下的专业能力。',
      viewAll: '查看所有项目',
      viewDemo: '查看演示',
      filter: {
        title: '筛选项目',
        category: '项目类型',
        technology: '技术栈',
        clear: '清除所有筛选',
        all: '全部',
        webApp: 'Web应用',
        mobileApp: '移动应用',
        desktopApp: '桌面应用',
        dataAnalysis: '数据分析',
        iot: '物联网',
        satellite: '卫星通讯',
        results: '找到 {count} 个项目',
        noResults: '没有找到匹配的项目',
        noResultsDesc: '请尝试调整筛选条件或清除筛选'
      },
      items: {
        enterprise: {
          title: '企业管理系统',
          description: '基于React和Node.js开发的现代化企业管理系统，提供完整的用户管理、权限控制、数据统计等功能。',
          features: ['用户管理', '权限控制', '数据统计', '实时通知']
        },
        ecommerce: {
          title: '移动电商应用',
          description: '使用React Native开发的跨平台移动电商应用，支持iOS和Android平台，提供完整的购物体验。',
          features: ['商品浏览', '购物车', '支付集成', '订单管理']
        },
        analytics: {
          title: '数据分析平台',
          description: '基于Vue.js和Python开发的数据可视化平台，支持多种数据源导入和实时数据分析展示。',
          features: ['数据导入', '实时分析', '图表展示', '报表生成']
        },
        desktop: {
          title: '桌面办公套件',
          description: '使用Electron开发的跨平台桌面办公应用，集成文档编辑、表格处理、演示制作等功能。',
          features: ['文档编辑', '表格处理', '演示制作', '团队协作']
        },
        customerService: {
          title: '智能客服系统',
          description: '集成AI技术的智能客服系统，支持多渠道接入、自动回复、情感分析等功能。',
          features: ['智能回复', '情感分析', '多渠道接入', '工单管理']
        },
        fitness: {
          title: '健身追踪应用',
          description: '跨平台健身追踪应用，支持运动记录、数据分析、社交分享等功能。',
          features: ['运动记录', '数据分析', '社交分享', '目标设定']
        },
        agriculture: {
          title: '智能农业监控系统',
          description: '基于物联网技术的智能农业监控系统，实时监测土壤湿度、温度、光照等环境参数，支持远程控制和自动化管理。',
          features: ['环境监测', '远程控制', '数据记录', '智能报警']
        },
        satellite: {
          title: '卫星通讯管理系统',
          description: '基于卫星通讯技术的远程监控管理系统，支持全球范围内的设备连接和数据传输，适用于海洋、航空、极地等特殊环境。',
          features: ['全球覆盖', '实时通讯', '数据中继', '位置追踪']
        }
      }
    },
    // About
    about: {
      title: '关于我们',
      description: '了解AppFactory团队，我们的使命是为客户提供最优质的软件开发服务。',
      story: {
        title: '我们的故事',
        content: 'AppFactory成立于2019年，由一群热爱技术的开发者创立。我们相信技术的力量能够改变世界，因此致力于为客户提供最优质的软件开发服务。'
      },
      values: {
        title: '我们的价值观',
        innovation: {
          title: '创新驱动',
          description: '我们始终保持对新技术的好奇心，不断探索和创新。'
        },
        quality: {
          title: '质量至上',
          description: '我们追求代码质量，确保每个项目都达到最高标准。'
        },
        collaboration: {
          title: '团队协作',
          description: '我们相信团队的力量，通过协作创造更大的价值。'
        }
      },
      team: {
        title: '我们的团队',
        description: '我们拥有一支经验丰富、技术精湛的开发团队。'
      }
    },
    // Contact
    contact: {
      title: '联系我们',
      description: '准备开始您的下一个项目？让我们讨论您的需求。',
      form: {
        name: '姓名',
        email: '邮箱',
        company: '公司',
        message: '项目描述',
        submit: '发送消息',
        success: '消息发送成功！我们会尽快回复您。',
        error: '发送失败，请稍后重试。'
      },
      info: {
        email: '邮箱联系',
        phone: '电话咨询',
        address: '地址',
        response: '我们承诺在24小时内回复您的咨询'
      }
    },
    // CTA
    cta: {
      title: '准备开始您的下一个项目？',
      description: '让我们讨论您的需求，为您量身定制最适合的解决方案。从概念到产品，我们全程陪伴您的数字化转型之旅。',
      consult: '立即咨询',
      viewWorks: '查看作品'
    },
    // Footer
    footer: {
      description: '专业的软件开发工作室，致力于为客户提供高质量的软件解决方案。我们专注于Web应用、移动应用和桌面应用的开发，帮助客户实现数字化转型。',
      quickLinks: '快速链接',
      contactUs: '联系我们',
      copyright: '© 2024 AppFactory. 保留所有权利。'
    }
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      products: 'Products',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    // Hero Section
    hero: {
      title: 'Professional',
      titleHighlight: 'Software Development',
      titleSuffix: 'Studio',
      description: 'We focus on high-quality software product development, providing customers with comprehensive development services for Web applications, mobile applications, and desktop applications.',
      viewWorks: 'View Our Works',
      startCooperation: 'Start Cooperation',
      stats: {
        projects: 'Completed Projects',
        clients: 'Satisfied Clients',
        experience: 'Years Experience',
      }
    },
    // Services
    services: {
      title: 'Our Services',
      description: 'We provide comprehensive software development services, from requirements analysis to product launch, providing complete technical solutions for your business.',
      webDev: {
        title: 'Web Application Development',
        description: 'Develop responsive, high-performance web applications using modern technology stacks',
        features: ['React/Vue.js Development', 'Node.js Backend', 'Database Design', 'API Development']
      },
      mobileDev: {
        title: 'Mobile Application Development',
        description: 'Cross-platform mobile application development, supporting iOS and Android platforms',
        features: ['React Native', 'Flutter Development', 'Native Development', 'App Store Publishing']
      },
      desktopDev: {
        title: 'Desktop Application Development',
        description: 'Develop cross-platform desktop applications using technologies like Electron',
        features: ['Electron Applications', 'Native Desktop Apps', 'System Integration', 'Auto Updates']
      },
      database: {
        title: 'Database Design',
        description: 'Professional database architecture design and optimization services',
        features: ['Database Design', 'Performance Optimization', 'Data Migration', 'Backup & Recovery']
      },
      iot: {
        title: 'IoT Solutions',
        description: 'IoT-based smart device connection and data management solutions',
        features: ['Device Connection', 'Data Collection', 'Remote Monitoring', 'Smart Analytics']
      },
      custom: {
        title: 'Custom Development',
        description: 'We provide completely customized development services based on your specific needs',
        features: ['Requirements Analysis', 'Technology Selection', 'Project Management', 'Ongoing Maintenance']
      }
    },
    // Products
    products: {
      title: 'Our Portfolio',
      description: 'Here are our representative projects in software development, showcasing our professional capabilities in different technology stacks and business scenarios.',
      viewAll: 'View All Projects',
      viewDemo: 'View Demo',
      filter: {
        title: 'Filter Projects',
        category: 'Project Type',
        technology: 'Technology Stack',
        clear: 'Clear All Filters',
        all: 'All',
        webApp: 'Web Application',
        mobileApp: 'Mobile Application',
        desktopApp: 'Desktop Application',
        dataAnalysis: 'Data Analysis',
        iot: 'IoT',
        satellite: 'Satellite Communication',
        results: 'Found {count} projects',
        noResults: 'No matching projects found',
        noResultsDesc: 'Please try adjusting the filter criteria or clear the filters'
      },
      items: {
        enterprise: {
          title: 'Enterprise Management System',
          description: 'Modern enterprise management system developed with React and Node.js, providing complete user management, permission control, data statistics and other functions.',
          features: ['User Management', 'Permission Control', 'Data Statistics', 'Real-time Notifications']
        },
        ecommerce: {
          title: 'Mobile E-commerce App',
          description: 'Cross-platform mobile e-commerce application developed with React Native, supporting iOS and Android platforms, providing a complete shopping experience.',
          features: ['Product Browsing', 'Shopping Cart', 'Payment Integration', 'Order Management']
        },
        analytics: {
          title: 'Data Analytics Platform',
          description: 'Data visualization platform developed with Vue.js and Python, supporting multiple data source imports and real-time data analysis display.',
          features: ['Data Import', 'Real-time Analysis', 'Chart Display', 'Report Generation']
        },
        desktop: {
          title: 'Desktop Office Suite',
          description: 'Cross-platform desktop office application developed with Electron, integrating document editing, spreadsheet processing, presentation creation and other functions.',
          features: ['Document Editing', 'Spreadsheet Processing', 'Presentation Creation', 'Team Collaboration']
        },
        customerService: {
          title: 'Intelligent Customer Service System',
          description: 'AI-integrated intelligent customer service system, supporting multi-channel access, automatic replies, sentiment analysis and other functions.',
          features: ['Intelligent Replies', 'Sentiment Analysis', 'Multi-channel Access', 'Ticket Management']
        },
        fitness: {
          title: 'Fitness Tracking App',
          description: 'Cross-platform fitness tracking application, supporting exercise recording, data analysis, social sharing and other functions.',
          features: ['Exercise Recording', 'Data Analysis', 'Social Sharing', 'Goal Setting']
        },
        agriculture: {
          title: 'Smart Agriculture Monitoring System',
          description: 'IoT-based smart agriculture monitoring system that monitors soil humidity, temperature, light and other environmental parameters in real-time, supporting remote control and automated management.',
          features: ['Environmental Monitoring', 'Remote Control', 'Data Recording', 'Smart Alerts']
        },
        satellite: {
          title: 'Satellite Communication Management System',
          description: 'Remote monitoring management system based on satellite communication technology, supporting global device connection and data transmission, suitable for special environments such as oceans, aviation, and polar regions.',
          features: ['Global Coverage', 'Real-time Communication', 'Data Relay', 'Location Tracking']
        }
      }
    },
    // About
    about: {
      title: 'About Us',
      description: 'Learn about the AppFactory team, our mission is to provide customers with the highest quality software development services.',
      story: {
        title: 'Our Story',
        content: 'AppFactory was founded in 2019 by a group of technology-loving developers. We believe in the power of technology to change the world, so we are committed to providing customers with the highest quality software development services.'
      },
      values: {
        title: 'Our Values',
        innovation: {
          title: 'Innovation Driven',
          description: 'We always maintain curiosity about new technologies and constantly explore and innovate.'
        },
        quality: {
          title: 'Quality First',
          description: 'We pursue code quality and ensure every project meets the highest standards.'
        },
        collaboration: {
          title: 'Team Collaboration',
          description: 'We believe in the power of teams and create greater value through collaboration.'
        }
      },
      team: {
        title: 'Our Team',
        description: 'We have an experienced and technically excellent development team.'
      }
    },
    // Contact
    contact: {
      title: 'Contact Us',
      description: 'Ready to start your next project? Let\'s discuss your needs.',
      form: {
        name: 'Name',
        email: 'Email',
        company: 'Company',
        message: 'Project Description',
        submit: 'Send Message',
        success: 'Message sent successfully! We will reply to you as soon as possible.',
        error: 'Failed to send, please try again later.'
      },
      info: {
        email: 'Email Contact',
        phone: 'Phone Consultation',
        address: 'Address',
        response: 'We promise to reply to your inquiry within 24 hours'
      }
    },
    // CTA
    cta: {
      title: 'Ready to start your next project?',
      description: 'Let\'s discuss your needs and customize the most suitable solution for you. From concept to product, we accompany you throughout your digital transformation journey.',
      consult: 'Consult Now',
      viewWorks: 'View Works'
    },
    // Footer
    footer: {
      description: 'Professional software development studio, committed to providing customers with high-quality software solutions. We focus on Web applications, mobile applications and desktop application development, helping customers achieve digital transformation.',
      quickLinks: 'Quick Links',
      contactUs: 'Contact Us',
      copyright: '© 2024 AppFactory. All rights reserved.'
    }
  }
} as const

export function getMessages(locale: Locale) {
  return messages[locale] || messages[defaultLocale]
}

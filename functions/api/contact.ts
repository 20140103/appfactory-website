interface ContactPayload {
  name?: string
  email?: string
  phone?: string
  company?: string
  projectType?: string
  budget?: string
  message?: string
  website?: string
}

interface D1Database {
  prepare(query: string): D1PreparedStatement
}

interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement
  run(): Promise<D1Result>
}

interface D1Result {
  success: boolean
  error?: string
}

interface Env {
  DB: D1Database
}

const PROJECT_TYPE_LABELS: Record<string, string> = {
  web: 'Web应用开发',
  mobile: '移动应用开发',
  desktop: '桌面应用开发',
  other: '其他',
}

const BUDGET_LABELS: Record<string, string> = {
  'under-50k': '5万以下',
  '50k-100k': '5-10万',
  '100k-200k': '10-20万',
  '200k-500k': '20-50万',
  'over-500k': '50万以上',
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^[\d\s+\-()]{0,20}$/

function jsonResponse(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  })
}

function labelProjectType(value?: string): string {
  if (!value) return '未选择'
  return PROJECT_TYPE_LABELS[value] || value
}

function labelBudget(value?: string): string {
  if (!value) return '未选择'
  return BUDGET_LABELS[value] || value
}

async function saveContact(
  db: D1Database,
  data: {
    name: string
    email: string
    phone: string
    company: string
    projectType?: string
    budget?: string
    message: string
  },
) {
  const result = await db
    .prepare(
      `INSERT INTO contacts (name, email, phone, company, project_type, budget, message)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
    )
    .bind(
      data.name,
      data.email,
      data.phone || null,
      data.company || null,
      labelProjectType(data.projectType),
      labelBudget(data.budget),
      data.message,
    )
    .run()

  if (!result.success) {
    throw new Error(result.error || 'Database insert failed')
  }
}

export async function onRequestPost(context: {
  request: Request
  env: Env
}): Promise<Response> {
  try {
    if (!context.env.DB) {
      return jsonResponse(
        { success: false, message: '数据库未配置，请联系管理员' },
        503,
      )
    }

    const payload = await context.request.json() as ContactPayload

    if (payload.website) {
      return jsonResponse({ success: true })
    }

    const name = payload.name?.trim()
    const email = payload.email?.trim()
    const message = payload.message?.trim()
    const company = payload.company?.trim() || ''
    const phone = payload.phone?.trim() || ''

    if (!name || !email || !message) {
      return jsonResponse({ success: false, message: '请填写必填项' }, 400)
    }

    if (!EMAIL_PATTERN.test(email)) {
      return jsonResponse({ success: false, message: '邮箱格式不正确' }, 400)
    }

    if (phone && !PHONE_PATTERN.test(phone)) {
      return jsonResponse({ success: false, message: '手机号格式不正确' }, 400)
    }

    if (name.length > 100 || email.length > 200 || phone.length > 20 || message.length > 5000 || company.length > 200) {
      return jsonResponse({ success: false, message: '输入内容过长' }, 400)
    }

    await saveContact(context.env.DB, {
      name,
      email,
      phone,
      company,
      projectType: payload.projectType,
      budget: payload.budget,
      message,
    })

    return jsonResponse({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return jsonResponse(
      { success: false, message: '消息保存失败，请稍后重试或直接发送邮件至 suport@xuzhen.top' },
      500,
    )
  }
}

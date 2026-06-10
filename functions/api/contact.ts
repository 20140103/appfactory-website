interface ContactPayload {
  name?: string
  email?: string
  company?: string
  projectType?: string
  budget?: string
  message?: string
  website?: string
}

interface Env {
  RESEND_API_KEY?: string
  CONTACT_TO_EMAIL?: string
  CONTACT_FROM_EMAIL?: string
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

function jsonResponse(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  })
}

function buildEmailContent(payload: Required<Pick<ContactPayload, 'name' | 'email' | 'message'>> & ContactPayload) {
  const projectType = payload.projectType
    ? PROJECT_TYPE_LABELS[payload.projectType] || payload.projectType
    : '未选择'
  const budget = payload.budget
    ? BUDGET_LABELS[payload.budget] || payload.budget
    : '未选择'

  const text = [
    '收到新的网站咨询',
    '',
    `姓名: ${payload.name}`,
    `邮箱: ${payload.email}`,
    `公司: ${payload.company || '未填写'}`,
    `项目类型: ${projectType}`,
    `预算范围: ${budget}`,
    '',
    '项目描述:',
    payload.message,
  ].join('\n')

  const html = `
    <h2>收到新的网站咨询</h2>
    <p><strong>姓名:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>邮箱:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>公司:</strong> ${escapeHtml(payload.company || '未填写')}</p>
    <p><strong>项目类型:</strong> ${escapeHtml(projectType)}</p>
    <p><strong>预算范围:</strong> ${escapeHtml(budget)}</p>
    <p><strong>项目描述:</strong></p>
    <p>${escapeHtml(payload.message).replace(/\n/g, '<br>')}</p>
  `

  return { text, html, subject: `网站咨询 - ${payload.name}` }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

async function sendWithResend(
  env: Env,
  toEmail: string,
  fromEmail: string,
  replyTo: { email: string; name: string },
  content: { subject: string; text: string; html: string },
) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `AppFactory <${fromEmail}>`,
      to: [toEmail],
      reply_to: replyTo.email,
      subject: content.subject,
      text: content.text,
      html: content.html,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Resend error: ${response.status} ${errorText}`)
  }
}

async function sendWithMailchannels(
  toEmail: string,
  fromEmail: string,
  replyTo: { email: string; name: string },
  content: { subject: string; text: string },
) {
  const response = await fetch('https://api.mailchannels.net/tx/v1/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: toEmail, name: 'AppFactory Support' }] }],
      from: { email: fromEmail, name: 'AppFactory Website' },
      reply_to: replyTo,
      subject: content.subject,
      content: [{ type: 'text/plain', value: content.text }],
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Mailchannels error: ${response.status} ${errorText}`)
  }
}

export async function onRequestPost(context: {
  request: Request
  env: Env
}): Promise<Response> {
  try {
    const payload = await context.request.json() as ContactPayload

    if (payload.website) {
      return jsonResponse({ success: true })
    }

    const name = payload.name?.trim()
    const email = payload.email?.trim()
    const message = payload.message?.trim()
    const company = payload.company?.trim() || ''

    if (!name || !email || !message) {
      return jsonResponse({ success: false, message: '请填写必填项' }, 400)
    }

    if (!EMAIL_PATTERN.test(email)) {
      return jsonResponse({ success: false, message: '邮箱格式不正确' }, 400)
    }

    if (name.length > 100 || email.length > 200 || message.length > 5000 || company.length > 200) {
      return jsonResponse({ success: false, message: '输入内容过长' }, 400)
    }

    const toEmail = context.env.CONTACT_TO_EMAIL || 'suport@xuzhen.top'
    const fromEmail = context.env.CONTACT_FROM_EMAIL || 'noreply@xuzhen.top'
    const emailContent = buildEmailContent({
      name,
      email,
      company,
      message,
      projectType: payload.projectType,
      budget: payload.budget,
    })

    if (context.env.RESEND_API_KEY) {
      await sendWithResend(
        context.env,
        toEmail,
        fromEmail,
        { email, name },
        emailContent,
      )
    } else {
      await sendWithMailchannels(
        toEmail,
        fromEmail,
        { email, name },
        emailContent,
      )
    }

    return jsonResponse({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return jsonResponse(
      { success: false, message: '消息发送失败，请稍后重试或直接发送邮件联系我们' },
      500,
    )
  }
}

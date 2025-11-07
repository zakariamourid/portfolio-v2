import { NextResponse } from 'next/server'
// import { Resend } from 'resend'
// import { ContactEmailTemplate } from '@/components/contact/email-template'
// import { type ContactEmailTemplateProps } from '@/types'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

// const resend = new Resend(process.env.RESEND_API_KEY)

// Temporarily disabled email sending (no Resend API key configured).
// Keeping a stub handler to avoid runtime errors.
export async function POST() {
  return NextResponse.json(
    {
      message:
        'Email sending is temporarily disabled. Configure RESEND_API_KEY and uncomment the code in route.ts to enable.'
    },
    { status: 501 }
  )
}

import { NextResponse } from 'next/server'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ekiden.apolloon.be'

export function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: ${SITE_URL.replace(/\/$/, '')}/sitemap.xml\nHost: ${SITE_URL.replace(/\/$/, '')}\n`
  return new NextResponse(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}

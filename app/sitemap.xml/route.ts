import { NextResponse } from 'next/server'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ekiden.apolloon.be'

export async function GET() {
  const pages = ['/',]
  const lastmod = new Date().toISOString()

  const urls = pages
    .map(
      (p) =>
        `<url><loc>${SITE_URL.replace(/\/$/, '')}${p}</loc><lastmod>${lastmod}</lastmod></url>`
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}

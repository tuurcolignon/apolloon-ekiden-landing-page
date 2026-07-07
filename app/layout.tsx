import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import {
  REGISTRATION_URL,
  CONTACT_EMAIL,
  APOLLOON_URL,
  EVENT_DATE_LABEL,
  EVENT_LOCATION,
  EVENT_ADDRESS,
  EVENT_START_ISO,
} from '@/lib/event'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ekidenleuvenapolloon.org'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Apolloon Ekiden 2026 | Ekiden Leuven aflossingsmarathon',
  description:
    'Apolloon Ekiden Leuven 2026 — De aflossingsmarathon voor studenten in Leuven. Verzamel je team van 6 lopers en loop samen 42,195 km op 26 september 2026.',
  keywords: [
    'ekiden',
    'ekiden apolloon',
    'ekiden leuven',
    'apolloon',
    'aflossingsmarathon',
    'Leuven hardlopen',
    'studentenloop',
  ],
  authors: [{ name: 'Apolloon' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Apolloon Ekiden 2026 | Ekiden Leuven',
    description:
      'Apolloon Ekiden Leuven 2026 — De aflossingsmarathon voor studenten in Leuven. Verzamel je team van 6 lopers en loop samen 42,195 km op 26 september 2026.',
    url: SITE_URL,
    siteName: 'Ekiden Leuven',
    images: [
      {
        url: `${SITE_URL}/images/ekiden-logo.png`,
        width: 1200,
        height: 630,
      },
      {
        url: `${SITE_URL}/images/leuven-map-blurred.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'nl_BE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apolloon Ekiden 2026',
    description:
      'Apolloon Ekiden Leuven 2026 — De aflossingsmarathon voor studenten in Leuven. 26 september 2026.',
    images: [`${SITE_URL}/images/ekiden-logo.png`],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Apolloon Ekiden 2026',
    startDate: EVENT_START_ISO,
    url: SITE_URL,
    image: [`${SITE_URL}/images/ekiden-logo.png`],
    location: {
      '@type': 'Place',
      name: EVENT_LOCATION,
      address: EVENT_ADDRESS,
    },
    description:
      'Apolloon Ekiden Leuven 2026 — Verzamel je team van 6 lopers en loop samen 42,195 km in Leuven op 26 september 2026.',
    organizer: {
      '@type': 'Organization',
      name: 'Apolloon',
      url: APOLLOON_URL,
      contactPoint: { '@type': 'ContactPoint', 'email': CONTACT_EMAIL },
    },
  }

  return (
    <html lang="nl-BE" className="bg-background">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/next"
import { CookieConsent } from '@/components'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://motleytech.io'),
  title: {
    default: 'MotleyTech LLC | AI-Enabled Software Development and Digital Marketing',
    template: '%s | MotleyTech LLC',
  },
  description:
    'MotleyTech LLC builds software, digital marketing engines, AI roadmaps, AI architecture, fractional CTO leadership, and fractional CMO strategy at startup speed.',
  keywords: [
    'MotleyTech',
    'software development',
    'digital marketing',
    'AI consulting',
    'AI roadmap',
    'AI architecture',
    'fractional CTO',
    'fractional CMO',
    'SEO',
    'SEM',
    'web development',
    'mobile apps',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'MotleyTech LLC',
    description:
      'AI-enabled software development, fractional CTO and CMO leadership, AI roadmap architecture, and full-funnel digital marketing.',
    type: 'website',
    url: 'https://motleytech.io',
    siteName: 'MotleyTech LLC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MotleyTech LLC',
    description:
      'AI-enabled software development, fractional CTO and CMO leadership, AI roadmap architecture, and full-funnel digital marketing.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MotleyTech LLC',
  url: 'https://motleytech.io',
  logo: 'https://motleytech.io/logo.svg',
  email: 'hello@motleytech.io',
  description:
    'MotleyTech LLC builds software, digital marketing engines, AI roadmaps, AI architecture, fractional CTO leadership, and fractional CMO strategy at startup speed.',
  founders: [
    {
      '@type': 'Person',
      name: 'Jimmy DePetro',
      jobTitle: 'Co-Founder / CTO',
      sameAs: 'https://www.linkedin.com/in/jdepetro/',
    },
    {
      '@type': 'Person',
      name: 'Carli Auran',
      jobTitle: 'Co-Founder / Growth & Marketing',
      sameAs: 'https://www.linkedin.com/in/carli-auran/',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Analytics />
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}

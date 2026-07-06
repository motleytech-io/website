import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://motleytech.com'),
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
    images: ['/motleytech-vaporwave-hero.png', '/motleytech-logo.svg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

'use client'

import Link from 'next/link'
import posthog from 'posthog-js'
import { CookieSettingsLink } from './CookieSettingsLink'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-cyan-300/20 bg-[#0d0720] px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-cyan-50/60 sm:flex-row">
        <p>&copy; {year} MotleyTech LLC. All rights reserved.</p>
        <a
          href="mailto:hello@motleytech.io"
          className="transition hover:text-fuchsia-200"
          onClick={() => posthog.capture('footer_email_clicked')}
        >
          hello@motleytech.io
        </a>
        <div className="flex items-center gap-5">
          <Link href="/privacy" className="transition hover:text-fuchsia-200">
            Privacy Policy
          </Link>
          <CookieSettingsLink className="transition hover:text-fuchsia-200" />
        </div>
      </div>
    </footer>
  )
}

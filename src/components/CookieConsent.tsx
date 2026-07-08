'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import posthog from 'posthog-js'
import { loadKlaviyo } from '@/lib/klaviyo'

const REOPEN_EVENT = 'cookie-consent:open'

export function reopenCookieConsent() {
  window.dispatchEvent(new Event(REOPEN_EVENT))
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const status = posthog.get_explicit_consent_status()
    if (status === 'pending') {
      setVisible(true)
    } else if (status === 'granted') {
      loadKlaviyo()
    }

    const openBanner = () => setVisible(true)
    window.addEventListener(REOPEN_EVENT, openBanner)
    return () => window.removeEventListener(REOPEN_EVENT, openBanner)
  }, [])

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-describedby="cookie-consent-copy"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-cyan-300/20 bg-[#0d0720]/97 px-5 py-5 backdrop-blur-md sm:px-8 lg:px-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p id="cookie-consent-copy" className="max-w-2xl text-sm leading-6 text-cyan-50/80">
          We use analytics cookies to understand how visitors use this site. They stay off until you accept, and
          you can withdraw consent any time. See our{' '}
          <Link href="/privacy" className="underline decoration-fuchsia-300/60 underline-offset-2 hover:text-fuchsia-200">
            Privacy Policy
          </Link>{' '}
          for details.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => {
              posthog.opt_out_capturing()
              setVisible(false)
            }}
            className="inline-flex min-h-11 items-center justify-center border border-cyan-200/60 bg-cyan-200/10 px-5 py-2.5 font-display text-xs font-black uppercase tracking-[.18em] text-cyan-50 transition hover:-translate-y-0.5 hover:bg-cyan-200/20"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => {
              posthog.opt_in_capturing()
              loadKlaviyo()
              setVisible(false)
            }}
            className="inline-flex min-h-11 items-center justify-center border border-fuchsia-200 bg-fuchsia-400 px-5 py-2.5 font-display text-xs font-black uppercase tracking-[.18em] text-[#120316] shadow-[0_0_25px_rgba(244,114,182,.45)] transition hover:-translate-y-0.5 hover:bg-fuchsia-200"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

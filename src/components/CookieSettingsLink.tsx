'use client'

import { reopenCookieConsent } from './CookieConsent'

export function CookieSettingsLink({ className }: { className?: string }) {
  return (
    <button type="button" onClick={reopenCookieConsent} className={className}>
      Cookie Settings
    </button>
  )
}

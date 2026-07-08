let loaded = false

export function loadKlaviyo() {
  if (loaded || typeof window === 'undefined') return
  const siteId = process.env.NEXT_PUBLIC_KLAVIYO_SITE_ID
  if (!siteId) return

  loaded = true
  const script = document.createElement('script')
  script.async = true
  script.type = 'text/javascript'
  script.src = `https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${siteId}`
  document.head.appendChild(script)
}

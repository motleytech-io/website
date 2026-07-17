import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/next"
import Script from 'next/script'
import { CookieConsent } from '@/components'
import './globals.css'

const klaviyoSiteId = process.env.NEXT_PUBLIC_KLAVIYO_SITE_ID
const chatbotId = process.env.NEXT_PUBLIC_CHATBOT_ID

export const metadata: Metadata = {
  metadataBase: new URL('https://motleytech.io'),
  title: {
    default: 'MotleyTech | AI-Enabled Website Management and Growth Marketing',
    template: '%s | MotleyTech',
  },
  description:
    'MotleyTech builds software, digital marketing engines, AI roadmaps, AI architecture, fractional CTO leadership, and fractional CMO strategy at startup speed.',
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
    title: 'MotleyTech',
    description:
      'AI-enabled software development, fractional CTO and CMO leadership, AI roadmap architecture, and full-funnel digital marketing.',
    type: 'website',
    url: 'https://motleytech.io',
    siteName: 'MotleyTech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MotleyTech',
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
  name: 'MotleyTech',
  url: 'https://motleytech.io',
  logo: 'https://motleytech.io/logo.svg',
  email: 'hello@motleytech.io',
  description:
    'MotleyTech builds software, digital marketing engines, AI roadmaps, AI architecture, fractional CTO leadership, and fractional CMO strategy at startup speed.',
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

const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5NFT57VV');`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head />
      <body>
        <Script id="gtm-init" strategy="afterInteractive">
          {gtmScript}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5NFT57VV"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {chatbotId && (
          <Script id="chatbot">
            {`(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="www.chatbase.co/embed.min.js";script.id="${chatbotId}";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`}
          </Script>
        )}
        {klaviyoSiteId && (
          <>
            <Script
              id="klaviyo-onsite"
              strategy="afterInteractive"
              async
              src={`https://static.klaviyo.com/onsite/js/${klaviyoSiteId}/klaviyo.js?company_id=${klaviyoSiteId}`}
            />
            <Script id="klaviyo-init" strategy="afterInteractive">
              {`!function(){if(!window.klaviyo){window._klOnsite=window._klOnsite||[];try{window.klaviyo=new Proxy({},{get:function(n,i){return"push"===i?function(){var n;(n=window._klOnsite).push.apply(n,arguments)}:function(){for(var n=arguments.length,o=new Array(n),w=0;w<n;w++)o[w]=arguments[w];var t="function"==typeof o[o.length-1]?o.pop():void 0,e=new Promise((function(n){window._klOnsite.push([i].concat(o,[function(i){t&&t(i),n(i)}]))}));return e}}})}catch(n){window.klaviyo=window.klaviyo||[],window.klaviyo.push=function(){var n;(n=window._klOnsite).push.apply(n,arguments)}}}}();`}
            </Script>
          </>
        )}
        <Analytics />
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}

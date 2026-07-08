import type { Metadata } from 'next'
import Link from 'next/link'
import { CookieSettingsLink } from '@/components'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How MotleyTech LLC collects, uses, and protects your data, including cookies and analytics.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | MotleyTech LLC',
    description: 'How MotleyTech LLC collects, uses, and protects your data, including cookies and analytics.',
    url: 'https://motleytech.io/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:px-12">
      <p className="font-display text-sm font-black uppercase tracking-[.3em] text-fuchsia-200">Legal</p>
      <h1 className="mt-4 font-display text-4xl font-black uppercase text-white sm:text-5xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-cyan-50/60">Last updated: July 7, 2026</p>

      <div className="mt-10 space-y-8 text-base leading-7 text-cyan-50/80">
        <section>
          <h2 className="font-display text-xl font-black uppercase text-fuchsia-100">Who we are</h2>
          <p className="mt-3">
            This site is operated by MotleyTech LLC (&quot;MotleyTech,&quot; &quot;we,&quot; &quot;us&quot;). Questions about this
            policy or your data can be sent to{' '}
            <a href="mailto:hello@motleytech.io" className="underline decoration-fuchsia-300/60 underline-offset-2 hover:text-fuchsia-200">
              hello@motleytech.io
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-black uppercase text-fuchsia-100">Cookies and similar technology</h2>
          <p className="mt-3">
            We only use one category of non-essential storage: product analytics, provided by PostHog. Analytics
            stay off by default and only turn on after you click &quot;Accept&quot; on the cookie banner. Your choice
            is remembered in your browser&apos;s local storage so we don&apos;t ask again, and you can change your mind
            at any time using the &quot;Cookie Settings&quot; link in the site footer.
          </p>
          <p className="mt-3">
            If you accept, PostHog records page views, clicks on key buttons and links, and basic device/browser
            information so we can understand how visitors use the site and improve it. Analytics traffic is routed
            through our own domain (<code className="text-cyan-100">/ingest</code>) before reaching PostHog&apos;s
            servers.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-black uppercase text-fuchsia-100">Your choices</h2>
          <p className="mt-3">
            You can accept or decline analytics at any time. Declining (or never accepting) means no analytics data
            is collected about your visit.
          </p>
          <div className="mt-4">
            <CookieSettingsLink className="inline-flex min-h-11 items-center justify-center border border-cyan-200/60 bg-cyan-200/10 px-5 py-2.5 font-display text-xs font-black uppercase tracking-[.18em] text-cyan-50 transition hover:-translate-y-0.5 hover:bg-cyan-200/20" />
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-black uppercase text-fuchsia-100">Data retention and sharing</h2>
          <p className="mt-3">
            Analytics data is retained by PostHog under our account and is not sold or shared with third parties for
            advertising purposes. We do not use tracking cookies for cross-site advertising.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-black uppercase text-fuchsia-100">Your rights</h2>
          <p className="mt-3">
            Depending on where you live, you may have the right to access, correct, or delete personal data we hold
            about you, or to object to its processing. To exercise any of these rights, email{' '}
            <a href="mailto:hello@motleytech.io" className="underline decoration-fuchsia-300/60 underline-offset-2 hover:text-fuchsia-200">
              hello@motleytech.io
            </a>
            .
          </p>
        </section>
      </div>

      <Link href="/" className="mt-12 inline-flex text-sm font-semibold uppercase tracking-[.18em] text-cyan-100/80 transition hover:text-fuchsia-200">
        &larr; Back home
      </Link>
    </main>
  )
}

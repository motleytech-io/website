import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Footer, IntakeForm } from '@/components'

export const metadata: Metadata = {
  title: 'Founding Client Program',
  description:
    'Apply for the MotleyTech Founding Client Program: hands-on software and marketing work for a small number of SMBs, provided at no cost up to an agreed scope, in exchange for an honest case study.',
  alternates: {
    canonical: '/founding-client',
  },
  openGraph: {
    title: 'Founding Client Program | MotleyTech',
    description:
      'Apply for the MotleyTech Founding Client Program: hands-on software and marketing work for a small number of SMBs, provided at no cost up to an agreed scope, in exchange for an honest case study.',
    url: 'https://motleytech.io/founding-client',
  },
}

const perks = [
  'Services provided at no cost, up to an agreed project scope',
  'Senior-level work from the co-founders, not a junior account team',
  'A real case study built alongside you as we go',
  'A small number of spots, reviewed for genuine fit',
]

export default function FoundingClientPage() {
  return (
    <main className="min-h-screen bg-[#070512] text-white">
      <header className="border-b border-cyan-300/20 px-5 py-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="MotleyTech" width={220} height={49} priority className="h-10 w-auto" />
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[.18em] text-cyan-100/80 transition hover:text-fuchsia-200"
          >
            Back to home
          </Link>
        </div>
      </header>

      <section className="relative px-5 py-16 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(34,211,238,.16),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(236,72,153,.16),transparent_32%)]" />
        <div className="relative mx-auto max-w-5xl">
          <p className="font-display text-sm font-black uppercase tracking-[.3em] text-fuchsia-200">
            Founding Client Program
          </p>
          <h1 className="mt-4 font-display text-4xl font-black uppercase leading-[.95] text-white sm:text-6xl">
            Become a MotleyTech Founding Client.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-cyan-50/80">
            MotleyTech is selecting a small number of founding clients: businesses we partner with on real software
            or marketing work, provided at no cost up to an agreed project scope, in exchange for the right to
            document the process and results as a case study. Tell us about your business below and we will review
            it by hand to see if it is a genuine fit.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {perks.map((perk) => (
              <li key={perk} className="border border-white/10 bg-white/[.04] px-4 py-3 text-sm font-semibold text-white/90">
                {perk}
              </li>
            ))}
          </ul>

          <div className="mt-12 border border-cyan-300/30 bg-black/30 p-6 shadow-[0_0_55px_rgba(34,211,238,.14)] backdrop-blur-sm sm:p-10">
            <IntakeForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

'use client'

import { Footer, ProfileCard, ServicePanel } from '@/components'
import Image from 'next/image'
import posthog from 'posthog-js'

const softwareServices = [
  'Websites and web apps',
  'Backend systems and APIs',
  'Mobile apps',
  'AI roadmap and architecture',
  'AI workflow automation',
  'Fractional CTO leadership',
]

const marketingServices = [
  'SEO and content strategy',
  'SEM and paid search',
  'Social campaigns',
  'Budget management',
  'Analytics and conversion tracking',
  'AI-assisted campaign operations',
  'Landing pages that ship fast',
]

const leadershipServices = [
  {
    title: 'Fractional CTO',
    copy: 'Architecture, platform strategy, vendor selection, product planning, delivery leadership, technical hiring, security posture, and pragmatic engineering execution.',
  },
  {
    title: 'Fractional CMO',
    copy: 'Positioning, channel strategy, growth planning, funnel design, analytics, campaign budget management, content direction, and clear marketing operating rhythms.',
  },
  {
    title: 'AI Roadmap',
    copy: 'A practical plan for where AI belongs in your business, what to automate first, what to avoid, and how to turn your team into a force multiplier team.',
  },
]

const aiAccelerators = [
  'AI opportunity audits',
  'LLM and agent architecture',
  'Workflow automation',
  'Team enablement and training',
  'Internal tools and copilots',
  'Measurement and governance',
]

const teamProfiles = [
  {
    name: 'Jimmy',
    role: 'Co-Founder / CTO',
    bio: '15+ years in software engineering across titles like CTO, Head of Engineering, Director of Engineering, and General Manager. He has led technology at large enterprises, but does his best work moving fast inside startups — architecting systems, unblocking teams, and shipping.',
    photo: '/team/jimmy.jpg',
    linkedin: 'https://www.linkedin.com/in/jdepetro/',
  },
  {
    name: 'Carli',
    role: 'Co-Founder / Growth & Marketing',
    bio: '10+ years working across marketing agencies with clients of every shape, size, and product. She has also run growth from the inside as a Head of Growth, hiring and managing agencies herself — so she knows exactly what makes an agency relationship actually work.',
    photo: '/team/carli.jpg',
    linkedin: 'https://www.linkedin.com/in/carli-auran/',
  },
]

const agencyComparison = [
  {
    them: 'Separate dev shop and marketing agency, rarely in sync',
    us: 'One team ships the product and the campaign together',
  },
  {
    them: 'AI shows up in the pitch deck, not the actual work',
    us: 'AI built into the roadmap, the architecture, and the ops',
  },
  {
    them: 'Months of onboarding before anything ships',
    us: 'Working sessions over status reports, shipped in weeks',
  },
  {
    them: "You pay for a full department's overhead",
    us: 'Senior-level execution, lean by design',
  },
]

const proofPoints = [
  { value: 'AI-first', label: 'Delivery process' },
  { value: 'Full stack', label: 'Software plus growth' },
  { value: 'CTO + CMO', label: 'Strategic leadership' },
  { value: 'Lean', label: 'Lower cost, less drag' },
]

const navLinks = [
  { label: 'Software', href: '#software' },
  { label: 'Marketing', href: '#marketing' },
  { label: 'Strategy', href: '#strategy' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function MinusIcon() {
  return (
    <svg viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 shrink-0 text-white/30" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <line x1="3" y1="8" x2="13" y2="8" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 shrink-0 text-fuchsia-300" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3,8.5 6.5,12 13,4" />
    </svg>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070512] text-white">
      <section className="relative min-h-[92vh] px-5 pb-16 pt-5 sm:px-8 lg:px-12">
        <Image
          src="/hero.png"
          alt="Neon vaporwave technology skyline background"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#070512_0%,rgba(7,5,18,.92)_28%,rgba(7,5,18,.55)_60%,rgba(7,5,18,.12)_100%)]" />
        <div className="absolute inset-0 scanlines opacity-35" />
        <div className="relative z-10 mx-auto flex min-h-[calc(92vh-5rem)] max-w-7xl flex-col">
          <header className="flex items-center justify-between border-b border-cyan-300/20 pb-5">
            <a href="#top" className="group flex items-center">
              <Image
                src="/logo.svg"
                alt="MotleyTech"
                width={300}
                height={67}
                priority
                className="h-16 w-auto drop-shadow-[0_0_12px_rgba(244,114,182,.34)] transition group-hover:drop-shadow-[0_0_18px_rgba(244,114,182,.5)] sm:h-[4.75rem]"
              />
            </a>
            <nav className="hidden items-center gap-7 text-sm font-semibold uppercase tracking-[.18em] text-cyan-100/80 md:flex">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  className="transition hover:text-fuchsia-200"
                  href={href}
                  onClick={() => posthog.capture('nav_link_clicked', { label, href })}
                >
                  {label}
                </a>
              ))}
            </nav>
          </header>

          <div id="top" className="grid flex-1 items-center gap-10 py-14 lg:grid-cols-[1.05fr_.95fr]">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex border border-fuchsia-300/40 bg-fuchsia-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[.28em] text-fuchsia-100 shadow-[0_0_30px_rgba(217,70,239,.22)]">
                AI-enabled software and growth
              </p>
              <h1 className="font-display text-5xl font-black uppercase leading-[.9] text-white sm:text-7xl lg:text-8xl">
                Ship faster.
                <span className="block neon-text">Market louder.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-cyan-50/80 sm:text-xl">
                MotleyTech LLC builds the technical systems and digital marketing engines that move a business forward. Websites, backend platforms, mobile apps, AI roadmaps, SEO, SEM, social, analytics, CTO strategy, and CMO strategy all under one neon roof.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:hello@motleytech.io?subject=Let's%20build%20with%20MotleyTech"
                  className="inline-flex min-h-12 items-center justify-center border border-fuchsia-200 bg-fuchsia-400 px-6 py-3 font-display text-sm font-black uppercase tracking-[.18em] text-[#120316] shadow-[0_0_35px_rgba(244,114,182,.55)] transition hover:-translate-y-0.5 hover:bg-fuchsia-200"
                  onClick={() => posthog.capture('cta_start_project_clicked', { location: 'hero' })}
                >
                  Start a Project
                </a>
                <a
                  href="#services"
                  className="inline-flex min-h-12 items-center justify-center border border-cyan-200/60 bg-cyan-200/10 px-6 py-3 font-display text-sm font-black uppercase tracking-[.18em] text-cyan-50 transition hover:-translate-y-0.5 hover:bg-cyan-200/20"
                  onClick={() => posthog.capture('cta_see_services_clicked', { location: 'hero' })}
                >
                  See Services
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -inset-8 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.22),transparent_64%)]" />
              <div className="relative border border-cyan-300/30 bg-black/30 p-5 shadow-[0_0_55px_rgba(34,211,238,.18)] backdrop-blur-md">
                <div className="mb-4 flex items-center justify-between border-b border-fuchsia-300/20 pb-4">
                  <span className="font-display text-sm font-bold uppercase tracking-[.24em] text-cyan-100">
                    Why MotleyTech
                  </span>
                  <span className="h-2 w-2 bg-fuchsia-300 shadow-[0_0_18px_rgba(244,114,182,.9)]" />
                </div>
                <div className="mb-2 grid grid-cols-1 gap-1 text-xs font-bold uppercase tracking-[.18em] sm:grid-cols-2 sm:gap-4">
                  <span className="text-white/40">Most agencies</span>
                  <span className="text-fuchsia-200">MotleyTech</span>
                </div>
                <div className="divide-y divide-white/10 border-t border-white/10">
                  {agencyComparison.map((point) => (
                    <div key={point.us} className="grid grid-cols-1 gap-2 py-3.5 sm:grid-cols-2 sm:gap-4">
                      <div className="flex items-start gap-2">
                        <MinusIcon />
                        <span className="text-sm leading-snug text-white/50">{point.them}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckIcon />
                        <span className="text-sm font-semibold leading-snug text-white">{point.us}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-cyan-300/20 bg-[#0d0720] px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((point) => (
            <div key={point.label} className="border border-white/10 bg-white/[.035] p-5">
              <p className="font-display text-2xl font-black uppercase text-cyan-100">{point.value}</p>
              <p className="mt-1 text-sm uppercase tracking-[.18em] text-fuchsia-100/70">{point.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="relative px-5 py-20 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(236,72,153,.22),transparent_35%),radial-gradient(circle_at_15%_55%,rgba(34,211,238,.16),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-display text-sm font-black uppercase tracking-[.3em] text-fuchsia-200">
              What we do
            </p>
            <h2 className="mt-4 font-display text-4xl font-black uppercase leading-none text-white sm:text-6xl">
              Technical muscle with marketing voltage.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <ServicePanel
              id="software"
              eyebrow="Build"
              title="Software Development"
              description="From polished public websites to serious backend platforms, MotleyTech takes ideas from foggy napkin sketch to shipped, maintainable product."
              services={softwareServices}
            />
            <ServicePanel
              id="marketing"
              eyebrow="Grow"
              title="Digital Marketing"
              description="Campaigns, search, content, social, spend management, and tracking handled with the same urgency as the codebase."
              services={marketingServices}
            />
          </div>
        </div>
      </section>

      <section id="strategy" className="border-y border-fuchsia-300/20 bg-[#13081f] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-display text-sm font-black uppercase tracking-[.3em] text-cyan-200">
              Strategic Leadership
            </p>
            <h2 className="mt-4 font-display text-4xl font-black uppercase leading-none text-white sm:text-6xl">
              Fractional CTO, Fractional CMO, and AI transformation without the executive overhead.
            </h2>
          </div>
          <div className="grid gap-4">
            {leadershipServices.map((service) => (
              <div key={service.title} className="border border-white/10 bg-white/[.04] p-5">
                <h3 className="font-display text-2xl font-black uppercase text-fuchsia-100">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-cyan-50/80">
                  {service.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative border-y border-fuchsia-300/20 bg-[#13081f] px-5 py-20 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(34,211,238,.14),transparent_34%),radial-gradient(circle_at_85%_75%,rgba(236,72,153,.16),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-display text-sm font-black uppercase tracking-[.3em] text-fuchsia-200">
              Family Owned &amp; Operated
            </p>
            <h2 className="mt-4 font-display text-4xl font-black uppercase leading-none text-white sm:text-6xl">
              One family. One roof. No corporate layers.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-cyan-50/80">
              MotleyTech is family owned and operated by Jimmy and Carli. No account managers, no hand-offs between departments — just the two people who built this company doing the work themselves.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {teamProfiles.map((profile) => (
              <ProfileCard key={profile.name} {...profile} />
            ))}
          </div>

          <div className="mt-6 grid gap-6 border border-cyan-300/25 bg-black/24 p-6 sm:p-7 lg:grid-cols-[auto_1fr] lg:items-center">
            <Image
              src="/team/family.jpg"
              alt="Jimmy and Carli with their two sons outside their home"
              width={900}
              height={1200}
              className="mx-auto h-40 w-40 shrink-0 rounded-full border-2 border-cyan-300/40 object-cover shadow-[0_0_30px_rgba(236,72,153,.25)] sm:h-48 sm:w-48 lg:mx-0 lg:h-52 lg:w-52"
            />
            <p className="text-sm leading-6 text-cyan-50/80">
              Jimmy and Carli have been married for 10 years, and worked together professionally even before that — as Head of Engineering and Head of Growth at Wag!. MotleyTech is that partnership, formalized: a tight technical-and-growth duo that moves faster than a full department, without the overhead.
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-5 py-20 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,211,238,.08),transparent_42%),radial-gradient(circle_at_70%_40%,rgba(236,72,153,.18),transparent_34%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <p className="font-display text-sm font-black uppercase tracking-[.3em] text-fuchsia-200">
              AI Roadmap + Architecture
            </p>
            <h2 className="mt-4 font-display text-4xl font-black uppercase leading-none text-white sm:text-6xl">
              Turn the team you have into the team that moves twice as fast.
            </h2>
            <p className="mt-6 text-lg leading-8 text-cyan-50/80">
              MotleyTech helps identify the AI use cases that actually matter, designs the architecture to support them, and builds the tooling, automation, and operating model around your team. The goal is not novelty. The goal is leverage.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {aiAccelerators.map((accelerator) => (
              <div
                key={accelerator}
                className="border border-cyan-300/25 bg-black/28 px-4 py-4 text-sm font-bold uppercase tracking-[.12em] text-cyan-50 shadow-[0_0_30px_rgba(34,211,238,.08)]"
              >
                {accelerator}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl border border-cyan-300/30 bg-[linear-gradient(135deg,rgba(34,211,238,.14),rgba(236,72,153,.16),rgba(7,5,18,.9))] p-6 shadow-[0_0_70px_rgba(236,72,153,.16)] sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-display text-sm font-black uppercase tracking-[.3em] text-fuchsia-200">
                Ready when you are
              </p>
              <h2 className="mt-4 font-display text-4xl font-black uppercase leading-none text-white sm:text-6xl">
                Bring the problem. We will bring the horsepower.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-cyan-50/80">
                Whether you need a new product, a cleaner stack, an AI roadmap, a faster marketing engine, or a strategic partner who can own the messy middle, MotleyTech is built for momentum.
              </p>
            </div>
            <a
              href="mailto:hello@motleytech.io?subject=MotleyTech%20project%20inquiry"
              className="inline-flex min-h-14 items-center justify-center border border-white bg-white px-7 py-4 font-display text-sm font-black uppercase tracking-[.18em] text-[#10051b] transition hover:-translate-y-0.5 hover:bg-cyan-100"
              onClick={() => posthog.capture('contact_email_clicked', { location: 'contact_section' })}
            >
              hello@motleytech.io
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

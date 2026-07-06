import Image from 'next/image'

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

const proofPoints = [
  { value: 'AI-first', label: 'Delivery process' },
  { value: 'Full stack', label: 'Software plus growth' },
  { value: 'CTO + CMO', label: 'Strategic leadership' },
  { value: 'Lean', label: 'Lower cost, less drag' },
]

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
              <a className="transition hover:text-fuchsia-200" href="#software">
                Software
              </a>
              <a className="transition hover:text-fuchsia-200" href="#marketing">
                Marketing
              </a>
              <a className="transition hover:text-fuchsia-200" href="#strategy">
                Strategy
              </a>
              <a className="transition hover:text-fuchsia-200" href="#contact">
                Contact
              </a>
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
                  href="mailto:hello@motleytech.com?subject=Let's%20build%20with%20MotleyTech"
                  className="inline-flex min-h-12 items-center justify-center border border-fuchsia-200 bg-fuchsia-400 px-6 py-3 font-display text-sm font-black uppercase tracking-[.18em] text-[#120316] shadow-[0_0_35px_rgba(244,114,182,.55)] transition hover:-translate-y-0.5 hover:bg-fuchsia-200"
                >
                  Start a Project
                </a>
                <a
                  href="#services"
                  className="inline-flex min-h-12 items-center justify-center border border-cyan-200/60 bg-cyan-200/10 px-6 py-3 font-display text-sm font-black uppercase tracking-[.18em] text-cyan-50 transition hover:-translate-y-0.5 hover:bg-cyan-200/20"
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
                    Delivery System
                  </span>
                  <span className="h-2 w-2 bg-fuchsia-300 shadow-[0_0_18px_rgba(244,114,182,.9)]" />
                </div>
                <div className="space-y-4">
                  {['Map the opportunity', 'Architect with AI', 'Ship and launch', 'Measure growth'].map((item, index) => (
                    <div
                      key={item}
                      className="grid grid-cols-[3rem_1fr] items-center gap-4 border border-white/10 bg-white/[.04] p-4"
                    >
                      <span className="font-display text-2xl font-black text-fuchsia-200">
                        0{index + 1}
                      </span>
                      <span className="text-base font-semibold text-white/90">{item}</span>
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
              href="mailto:hello@motleytech.com?subject=MotleyTech%20project%20inquiry"
              className="inline-flex min-h-14 items-center justify-center border border-white bg-white px-7 py-4 font-display text-sm font-black uppercase tracking-[.18em] text-[#10051b] transition hover:-translate-y-0.5 hover:bg-cyan-100"
            >
              hello@motleytech.com
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

function ServicePanel({
  id,
  eyebrow,
  title,
  description,
  services,
}: {
  id: string
  eyebrow: string
  title: string
  description: string
  services: string[]
}) {
  return (
    <article id={id} className="border border-cyan-300/25 bg-black/24 p-6 backdrop-blur-sm sm:p-8">
      <p className="font-display text-sm font-black uppercase tracking-[.28em] text-fuchsia-200">{eyebrow}</p>
      <h3 className="mt-4 font-display text-3xl font-black uppercase text-white sm:text-4xl">{title}</h3>
      <p className="mt-4 text-base leading-7 text-cyan-50/75">{description}</p>
      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        {services.map((service) => (
          <div key={service} className="border border-white/10 bg-white/[.04] px-4 py-3 text-sm font-semibold text-white/90">
            {service}
          </div>
        ))}
      </div>
    </article>
  )
}

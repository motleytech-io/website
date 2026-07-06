export function ServicePanel({
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
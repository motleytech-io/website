import Image from 'next/image'

export function ProfileCard({
  name,
  role,
  bio,
  photo,
}: {
  name: string
  role: string
  bio: string
  photo?: string
}) {
  return (
    <div className="border border-white/10 bg-white/[.04] p-6 sm:p-7">
      <div className="flex items-center gap-5">
        {photo && (
          <Image
            src={photo}
            alt={name}
            width={88}
            height={88}
            className="h-[88px] w-[88px] shrink-0 rounded-full border-2 border-cyan-300/40 object-cover shadow-[0_0_24px_rgba(34,211,238,.25)]"
          />
        )}
        <div>
          <p className="font-display text-sm font-black uppercase tracking-[.24em] text-cyan-200">{role}</p>
          <h3 className="mt-2 font-display text-2xl font-black uppercase text-white sm:text-3xl">{name}</h3>
        </div>
      </div>
      <p className="mt-4 text-base leading-7 text-cyan-50/80">{bio}</p>
    </div>
  )
}

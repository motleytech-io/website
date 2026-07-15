import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'MotleyTech — AI-enabled software development and digital marketing'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#070512',
          backgroundImage:
            'radial-gradient(circle at 82% 8%, rgba(236,72,153,.35), transparent 45%), radial-gradient(circle at 10% 92%, rgba(34,211,238,.28), transparent 45%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 96,
            fontWeight: 900,
            letterSpacing: -2,
            textTransform: 'uppercase',
            color: '#ff2fbe',
          }}
        >
          MotleyTech
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 20,
            fontSize: 46,
            fontWeight: 900,
            textTransform: 'uppercase',
            color: '#ffffff',
          }}
        >
          Ship faster. Market louder.
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 36,
            fontSize: 28,
            color: '#8ff3ff',
          }}
        >
          AI-enabled software development &amp; digital marketing
        </div>
      </div>
    ),
    { ...size }
  )
}

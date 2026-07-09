'use client'

import { FormEvent, useState } from 'react'
import posthog from 'posthog-js'

declare global {
  interface Window {
    klaviyo?: {
      identify: (properties: Record<string, unknown>) => Promise<unknown>
      track: (event: string, properties?: Record<string, unknown>) => Promise<unknown>
    }
  }
}

const teamSizeOptions = ['Just me', '2-10', '11-50', '50+']

const budgetOptions = [
  'None currently',
  'Under $1,000/mo',
  '$1,000-$5,000/mo',
  '$5,000-$15,000/mo',
  '$15,000+/mo',
]

const channelOptions = [
  'SEO',
  'Paid search (Google/Bing Ads)',
  'Paid social (Meta, TikTok, etc.)',
  'Email/SMS marketing',
  'Content or organic social',
  'None currently',
]

const websitePlatformOptions = [
  'No website yet',
  'WordPress',
  'Squarespace/Wix',
  'Shopify',
  'Custom-built',
  'Other',
]

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  businessName: '',
  websiteUrl: '',
  industry: '',
  teamSize: '',
  monthlyBudget: '',
  websitePlatform: '',
  challenge: '',
  whyGoodFit: '',
  consent: false,
  honeypot: '',
}

type FormState = typeof initialState
type Status = 'idle' | 'submitting' | 'success' | 'error'

const inputClass =
  'w-full border border-cyan-300/25 bg-black/30 px-4 py-3 text-base sm:text-sm text-white placeholder:text-white/30 focus:border-fuchsia-300/60 focus:outline-none focus:ring-1 focus:ring-fuchsia-300/40'
const labelClass = 'mb-2 block text-xs font-bold uppercase tracking-[.18em] text-cyan-100/80'

function buildMailtoFallback(form: FormState, channels: string[]) {
  const lines = [
    `Business: ${form.businessName}`,
    `Contact: ${form.firstName} ${form.lastName} (${form.email}${form.phone ? ', ' + form.phone : ''})`,
    `Website: ${form.websiteUrl || 'None'}`,
    `Industry: ${form.industry}`,
    `Team size: ${form.teamSize || 'Not specified'}`,
    `Monthly marketing budget: ${form.monthlyBudget}`,
    `Current marketing channels: ${channels.length ? channels.join(', ') : 'None currently'}`,
    `Website platform: ${form.websitePlatform}`,
    `Biggest challenge: ${form.challenge}`,
    `Why a good fit: ${form.whyGoodFit || 'Not specified'}`,
  ]
  const subject = encodeURIComponent(`Founding Client Application: ${form.businessName}`)
  const body = encodeURIComponent(lines.join('\n'))
  return `mailto:hello@motleytech.io?subject=${subject}&body=${body}`
}

export function IntakeForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [channels, setChannels] = useState<string[]>([])
  const [status, setStatus] = useState<Status>('idle')

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function toggleChannel(channel: string) {
    setChannels((prev) =>
      prev.includes(channel) ? prev.filter((c) => c !== channel) : [...prev, channel],
    )
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (form.honeypot) {
      setStatus('success')
      return
    }

    setStatus('submitting')

    const channelList = channels.length ? channels : ['None currently']

    try {
      await window.klaviyo?.identify({
        email: form.email,
        first_name: form.firstName,
        last_name: form.lastName,
        organization: form.businessName,
        phone_number: form.phone || undefined,
      })

      await window.klaviyo?.track('Founding Client Application', {
        business_name: form.businessName,
        website_url: form.websiteUrl || 'None',
        industry: form.industry,
        team_size: form.teamSize || 'Not specified',
        monthly_marketing_budget: form.monthlyBudget,
        marketing_channels: channelList,
        website_platform: form.websitePlatform,
        biggest_challenge: form.challenge,
        why_good_fit: form.whyGoodFit || 'Not specified',
      })

      posthog.capture('founding_client_application_submitted', {
        industry: form.industry,
        monthly_marketing_budget: form.monthlyBudget,
      })

      setStatus('success')
    } catch (error) {
      console.error('Founding client application failed to submit', error)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="border border-fuchsia-300/40 bg-fuchsia-400/10 p-8 text-center">
        <p className="font-display text-2xl font-black uppercase text-fuchsia-100">Application received</p>
        <p className="mt-3 text-base leading-7 text-cyan-50/80">
          Thanks for telling us about your business. We review every application by hand and will reach out at{' '}
          {form.email || 'the email you provided'} if it looks like a fit.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
      <input
        type="text"
        name="company_website"
        value={form.honeypot}
        onChange={(event) => updateField('honeypot', event.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="firstName">First name</label>
          <input
            id="firstName"
            required
            className={inputClass}
            value={form.firstName}
            onChange={(event) => updateField('firstName', event.target.value)}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            required
            className={inputClass}
            value={form.lastName}
            onChange={(event) => updateField('lastName', event.target.value)}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            required
            className={inputClass}
            value={form.email}
            onChange={(event) => updateField('email', event.target.value)}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">Phone (optional)</label>
          <input
            id="phone"
            type="tel"
            className={inputClass}
            value={form.phone}
            onChange={(event) => updateField('phone', event.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="businessName">Business name</label>
          <input
            id="businessName"
            required
            className={inputClass}
            value={form.businessName}
            onChange={(event) => updateField('businessName', event.target.value)}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="industry">Industry</label>
          <input
            id="industry"
            required
            placeholder="e.g. HVAC, med spa, e-commerce"
            className={inputClass}
            value={form.industry}
            onChange={(event) => updateField('industry', event.target.value)}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="websiteUrl">Current website (optional)</label>
          <input
            id="websiteUrl"
            placeholder="https://"
            className={inputClass}
            value={form.websiteUrl}
            onChange={(event) => updateField('websiteUrl', event.target.value)}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="teamSize">Team size (optional)</label>
          <select
            id="teamSize"
            className={inputClass}
            value={form.teamSize}
            onChange={(event) => updateField('teamSize', event.target.value)}
          >
            <option value="">Select one</option>
            {teamSizeOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="monthlyBudget">Current monthly marketing budget</label>
          <select
            id="monthlyBudget"
            required
            className={inputClass}
            value={form.monthlyBudget}
            onChange={(event) => updateField('monthlyBudget', event.target.value)}
          >
            <option value="">Select one</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="websitePlatform">Current website platform</label>
          <select
            id="websitePlatform"
            required
            className={inputClass}
            value={form.websitePlatform}
            onChange={(event) => updateField('websitePlatform', event.target.value)}
          >
            <option value="">Select one</option>
            {websitePlatformOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <p className={labelClass}>Current marketing stack (select all that apply)</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {channelOptions.map((channel) => (
            <label
              key={channel}
              className="flex cursor-pointer items-center gap-3 border border-white/15 bg-white/[.04] px-4 py-3 text-sm font-semibold text-white/80 transition has-[:checked]:border-fuchsia-300/60 has-[:checked]:bg-fuchsia-400/10 has-[:checked]:text-fuchsia-100"
            >
              <input
                type="checkbox"
                className="h-4 w-4 accent-fuchsia-400"
                checked={channels.includes(channel)}
                onChange={() => toggleChannel(channel)}
              />
              {channel}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="challenge">What is the biggest challenge you are trying to solve right now?</label>
        <textarea
          id="challenge"
          required
          rows={4}
          className={inputClass}
          value={form.challenge}
          onChange={(event) => updateField('challenge', event.target.value)}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="whyGoodFit">
          Anything else that makes your business a good founding client story? (optional)
        </label>
        <textarea
          id="whyGoodFit"
          rows={3}
          className={inputClass}
          value={form.whyGoodFit}
          onChange={(event) => updateField('whyGoodFit', event.target.value)}
        />
      </div>

      <label className="flex items-start gap-3 text-sm leading-6 text-cyan-50/80">
        <input
          type="checkbox"
          required
          className="mt-1 h-4 w-4 accent-fuchsia-400"
          checked={form.consent}
          onChange={(event) => updateField('consent', event.target.checked)}
        />
        I agree to be contacted by MotleyTech about the Founding Client Program and have read the{' '}
        <a href="/privacy" className="underline decoration-fuchsia-300/60 underline-offset-2 hover:text-fuchsia-200">
          Privacy Policy
        </a>
        .
      </label>

      {status === 'error' && (
        <div className="border border-red-400/40 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
          <p>
            Something went wrong submitting this form. You can{' '}
            <a href={buildMailtoFallback(form, channels)} className="underline decoration-red-200/60 underline-offset-2">
              email us your answers directly
            </a>{' '}
            instead.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex min-h-12 w-full items-center justify-center border border-fuchsia-200 bg-fuchsia-400 px-6 py-3 font-display text-sm font-black uppercase tracking-[.18em] text-[#120316] shadow-[0_0_35px_rgba(244,114,182,.55)] transition hover:-translate-y-0.5 hover:bg-fuchsia-200 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  )
}

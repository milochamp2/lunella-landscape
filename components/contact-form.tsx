'use client'

import { forwardRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormData } from '@/lib/schema'
import { cn } from '@/lib/utils'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) })

  const onSubmit = async (data: ContactFormData) => {
    if (data.website) return // honeypot triggered — silently discard
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        reset()
      } else {
        const body = (await res.json()) as { error?: string }
        setStatus('error')
        setErrorMsg(body.error ?? 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Unable to send your message. Please try again or email us directly.')
    }
  }

  if (status === 'success') {
    return (
      <div className="py-20 text-center">
        <div className="w-12 h-12 rounded-full border border-ink mx-auto mb-6 flex items-center justify-center">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-display text-3xl mb-3">Message Received</h3>
        <p className="text-stone text-sm">
          Thank you for reaching out. We&apos;ll be in touch within 2 business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
      {/* Honeypot — hidden from real users, bots fill it */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 0, height: 0, overflow: 'hidden' }}>
        <input type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FloatingInput
          id="name"
          label="Full Name"
          error={errors.name?.message}
          autoComplete="name"
          {...register('name')}
        />
        <FloatingInput
          id="email"
          type="email"
          label="Email Address"
          error={errors.email?.message}
          autoComplete="email"
          {...register('email')}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FloatingInput
          id="phone"
          type="tel"
          label="Phone (optional)"
          error={errors.phone?.message}
          autoComplete="tel"
          {...register('phone')}
        />
        <FloatingSelect
          id="service"
          label="Service of Interest"
          error={errors.service?.message}
          {...register('service')}
        >
          <option value="">Select a service…</option>
          <option value="design">Landscape Design</option>
          <option value="installation">Garden Installation</option>
          <option value="stonework">Stonework &amp; Paving</option>
          <option value="planting">Planting Schemes</option>
          <option value="maintenance">Maintenance Program</option>
          <option value="other">Other / Not Sure</option>
        </FloatingSelect>
      </div>

      <FloatingTextarea
        id="message"
        label="Tell us about your project"
        rows={5}
        error={errors.message?.message}
        {...register('message')}
      />

      {status === 'error' && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending…' : 'Send Enquiry'}
      </button>
    </form>
  )
}

/* ─── Floating label primitives ─── */

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: string
  error?: string
}

const FloatingInput = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, error, className, ...props }, ref) => (
    <div className="relative">
      <input
        id={id}
        ref={ref}
        placeholder=" "
        className={cn(
          'peer w-full border-b bg-transparent pt-6 pb-2 text-sm text-ink outline-none transition-colors duration-200 placeholder-transparent',
          error ? 'border-red-400 focus:border-red-600' : 'border-sand focus:border-ink',
          className,
        )}
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute left-0 top-5 text-sm text-stone transition-all duration-200 pointer-events-none peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-2xs peer-focus:text-ink peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-2xs peer-[:not(:placeholder-shown)]:text-slate"
      >
        {label}
      </label>
      {error && <p className="mt-1.5 text-2xs text-red-600">{error}</p>}
    </div>
  ),
)
FloatingInput.displayName = 'FloatingInput'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string
  label: string
  error?: string
  children: React.ReactNode
}

const FloatingSelect = forwardRef<HTMLSelectElement, SelectProps>(
  ({ id, label, error, children, className, ...props }, ref) => (
    <div className="relative">
      <label htmlFor={id} className="absolute left-0 top-0 text-2xs text-slate">
        {label}
      </label>
      <select
        id={id}
        ref={ref}
        className={cn(
          'w-full border-b bg-transparent pt-6 pb-2 text-sm text-ink outline-none transition-colors duration-200 appearance-none cursor-pointer',
          error ? 'border-red-400 focus:border-red-600' : 'border-sand focus:border-ink',
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <svg
        className="absolute right-0 bottom-3 h-4 w-4 text-stone pointer-events-none"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
      {error && <p className="mt-1.5 text-2xs text-red-600">{error}</p>}
    </div>
  ),
)
FloatingSelect.displayName = 'FloatingSelect'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string
  label: string
  error?: string
}

const FloatingTextarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ id, label, error, className, ...props }, ref) => (
    <div className="relative">
      <textarea
        id={id}
        ref={ref}
        placeholder=" "
        className={cn(
          'peer w-full border-b bg-transparent pt-6 pb-2 text-sm text-ink outline-none transition-colors duration-200 placeholder-transparent resize-none',
          error ? 'border-red-400 focus:border-red-600' : 'border-sand focus:border-ink',
          className,
        )}
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute left-0 top-5 text-sm text-stone transition-all duration-200 pointer-events-none peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-2xs peer-focus:text-ink peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-2xs peer-[:not(:placeholder-shown)]:text-slate"
      >
        {label}
      </label>
      {error && <p className="mt-1.5 text-2xs text-red-600">{error}</p>}
    </div>
  ),
)
FloatingTextarea.displayName = 'FloatingTextarea'

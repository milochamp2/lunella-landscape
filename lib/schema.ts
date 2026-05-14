import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().max(30).optional(),
  service: z
    .enum(['design', 'installation', 'stonework', 'planting', 'maintenance', 'other'])
    .optional(),
  message: z
    .string()
    .min(10, 'Please tell us a bit more (at least 10 characters)')
    .max(2000),
  website: z.string().max(0).optional(), // honeypot — bots fill this, humans don't
})

export type ContactFormData = z.infer<typeof contactSchema>

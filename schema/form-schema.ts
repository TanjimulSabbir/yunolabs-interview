import { z } from 'zod'

export const TopBannerSchema = z.object({
  keywords: z
    .string()
    .nonempty({ message: 'Keywords are required' })
    .min(3, { message: 'Keywords must be at least 3 characters' }),
  apartment: z.string().min(1, { message: 'Apartment type is required' }),
  country: z.string().min(1, { message: 'Country is required' }),
})

export const ContactSchema = z.object({
  name: z
    .string()
    .nonempty({ message: 'Name is required' })
    .min(3, { message: 'Name must be at least 3 characters' }),
  email: z
    .string()
    .nonempty({ message: 'Email is required' })
    .email({ message: 'Please provide a valid email address' }),
  phone: z
    .string()
    .nonempty({ message: 'Phone number is required' })
    .regex(/^\+?[1-9]\d{1,14}$/, {
      message: 'Please provide a valid phone number',
    }), // Example phone validation
  subject: z
    .string()
    .nonempty({ message: 'Subject is required' })
    .min(3, { message: 'Subject must be at least 3 characters' }),
  message: z
    .string()
    .nonempty({ message: 'Message is required' })
    .min(10, { message: 'Message must be at least 10 characters' }),
})

export type TopBannerSchemaType = z.infer<typeof TopBannerSchema>
export type ContactSchemaType = z.infer<typeof ContactSchema>

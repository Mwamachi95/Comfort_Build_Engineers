import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .min(2, 'First name must be at least 2 characters'),
  
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .min(2, 'Last name must be at least 2 characters'),
  
  workEmail: z
    .string()
    .min(1, 'Work email is required')
    .email('Please enter a valid email address'),
  
  companyName: z
    .string()
    .min(1, 'Company name is required')
    .min(2, 'Company name must be at least 2 characters'),
  
  message: z
    .string()
    .optional()
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
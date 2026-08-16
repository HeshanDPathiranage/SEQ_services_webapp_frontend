import { z } from 'zod';
import { isValidPhoneNumber } from 'react-phone-number-input';

export const enquirySchema = z.object({
  name: z.string().min(2, 'Name is required.'),
  companyName: z.string().optional(),
  phone: z.string()
    .min(1, 'Phone is required.')
    .refine((val) => isValidPhoneNumber(val), {
      message: 'Enter a valid phone number for the selected country.',
    }),
  email: z.string().email('Enter a valid email address.'),
  location: z.string().min(2, 'Location is required.'),
  serviceCategory: z.string().min(2, 'Please select a service category.'),
  serviceRequired: z.string().min(2, 'Please select a service.'),
  message: z.string().min(10, 'Please provide more detail.'),
});

export type EnquirySchemaValues = z.infer<typeof enquirySchema>;

export const enquirySchemaValues = {
  name: '',
  companyName: '',
  phone: '',
  email: '',
  location: '',
  serviceCategory: '',
  serviceRequired: '',
  message: '',
} as const;

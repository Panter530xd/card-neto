import { z } from 'zod';

export const shippingAndContactSchema = z.object({
  email: z.string().email(),
  phoneNumber: z.string().min(6),
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  country: z.string().min(1),
  city: z.string().min(5),
  postalCode: z.string().min(2),
  apartment: z.string().min(3),
  address: z.string().min(5),
});

export const discountCodeSchema = z.object({
  discountCode: z.string(),
});

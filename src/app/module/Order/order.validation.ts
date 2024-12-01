import { z } from 'zod';

export const orderValidationSchema = z.object({
  email: z.string().email('Invalid email format').optional(),
  product: z.string().nonempty('Product ID is required').trim(),
  quantity: z
    .number()
    .int('Quantity must be an integer')
    .min(1, 'Quantity must be at least 1'),
  totalPrice: z
    .number()
    .min(0, 'Total price must be greater than or equal to 0'),
});

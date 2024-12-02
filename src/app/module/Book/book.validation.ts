import { z } from 'zod';

export const bookValidationSchema = z.object({
  title: z.string().nonempty('Title is required').trim(),
  author: z
    .string()
    .nonempty('Author is required')
    .trim()
    .max(20, 'Author name must not exceed 20 characters')
    .refine(
      (value) => /^[A-Z](\.|[a-z]*)?(\s[A-Z](\.|[a-z]*)?)*$/.test(value),
      {
        message:
          "Author name must start with a capital letter for each word and can include initials (e.g., 'F. Scott Fitzgerald').",
      },
    ),

  price: z
    .number()
    .min(0, 'Price must be greater than or equal to 0')
    .max(1000000, 'Price cannot exceed 1,000,000'),
  category: z.enum([
    'Fiction',
    'Science',
    'SelfDevelopment',
    'Poetry',
    'Religious',
  ]),
  description: z
    .string()
    .nonempty('Description is required')
    .max(100, 'Description must not exceed 100 characters')
    .trim(),
  quantity: z
    .number()
    .min(1, 'Quantity must be at least 1')
    .max(1000, 'Quantity cannot exceed 1,000'),
  inStock: z.boolean().refine((val) => val !== null, {
    message: 'In-stock status must be provided',
  }),
});

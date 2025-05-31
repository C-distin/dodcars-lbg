import { z } from "zod/v4";

export const DonationSchema = z.object({
  firstName: z.string().min(1, "Enter first name"),
  lastName: z.string().min(1, "Enter last name"),
  email: z.email("Enter your email"),
  phoneNumber: z
    .string()
    .min(10, "Phone number less than 10")
    .max(10, "Phone number more than 10"),
  amount: z.number().min(1, "Enter amount"),
});

export type DonationData = z.infer<typeof DonationSchema>;

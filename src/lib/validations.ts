import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .min(5, { message: "Message cannot be less than 5 characters long" })
    .max(100, { message: "Name cannot exceed 100 characters" }),

  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(5, { message: "Email cannot be less than 5 characters long" })
    .max(100, { message: "Email cannot exceed 100 characters" }),

  subject: z
    .string()
    .min(1, { message: "Subject is required" })
    .min(5, { message: "Subject cannot be less than 5 characters long" })
    .max(100, { message: "Subject cannot exceed 100 characters" }),

  message: z
    .string()
    .min(5, { message: "Message cannot be less than 5 characters long" })
    .max(1000, { message: "Message cannot exceed 1000 characters" }),
});

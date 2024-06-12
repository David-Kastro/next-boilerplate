import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Must be a valid e-mail",
  }),
});

export type loginSchemaType = z.infer<typeof loginSchema>;

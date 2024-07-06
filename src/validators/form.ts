import { z } from "zod"

export const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string(),
  message: z.string(),
})

export type FormSchema = z.infer<typeof formSchema>

import { z } from "zod"

export const contactschema = z.object({
  name: z.string().min(5, "at least 3 charachters"),
  message: z.string().min(10, "at least 10 charachters")
})

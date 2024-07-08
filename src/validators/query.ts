import { z } from "zod"

export const querySchema = z
  .object({
    location: z.string().optional(),
    property: z.string().optional(),
    start: z.coerce.number().optional(),
    end: z.coerce.number().optional(),
  })
  .refine(
    (data) => {
      if (data.start !== undefined && data.end !== undefined) {
        return data.start <= data.end
      }

      return true
    },
    {
      message: "Range should be valid.",
      path: ["start", "end"],
    }
  )

export type QuerySchema = z.infer<typeof querySchema>

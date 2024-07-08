import { querySchema } from "@/validators/query"
import { housesData } from "@/server//houses-data"

export default defineEventHandler(async (event) => {
  const result = await getValidatedQuery(event, (query) =>
    querySchema.safeParse(query)
  )

  if (!result.success) {
    throw result.error.issues
  }

  const query = result.data

  return housesData.filter((house) => {
    if (query.location && house.country !== query.location) {
      return false
    }

    if (query.property && house.type !== query.property) {
      return false
    }

    if (query.start && house.price < query.start) {
      return false
    }

    if (query.end && house.price > query.end) {
      return false
    }

    return true
  })
})

import { housesData } from "../houses-data"

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  return housesData.filter((house) => {
    if (query.location && house.country !== query.location) {
      return false
    }

    if (query.property && house.type !== query.property) {
      return false
    }

    return true
  })
})

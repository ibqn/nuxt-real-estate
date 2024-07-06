import { type House } from "@/types"
import { housesData } from "@/server/houses-data"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id")
  const [house] = housesData.filter((house: House) => house.id === id)
  if (!house) {
    setResponseStatus(event, 404)
  }

  return house
})

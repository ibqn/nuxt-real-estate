import { housesData } from "@/server/houses-data"

export default defineEventHandler(async (event) => {
  return Array.from(new Set(housesData.map((house) => house.type)))
})

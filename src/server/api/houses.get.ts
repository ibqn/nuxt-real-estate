import { housesData } from "../houses-data"

export default defineEventHandler(async (event) => {
  return housesData
})

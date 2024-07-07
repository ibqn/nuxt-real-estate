import { housesData } from "@/server/houses-data"
import { formatPrice } from "~/utils/price-formatter"

export default defineEventHandler(async (event) => {
  const prices = Array.from(new Set(housesData.map((house) => house.price)))

  const minPrice = Math.min(...prices)
  const maxPrice = Math.max(...prices)

  const rangeSize = 5
  const range = Math.ceil(((maxPrice - minPrice) / rangeSize / 1000) * 1000)

  const priceRanges = Array.from({ length: rangeSize }, (_, index) => {
    const start = Number((minPrice + index * range).toFixed(0))
    const end = Number((start + range).toFixed(0))

    let label = `${formatPrice(start)} - ${formatPrice(end)}`

    if (index === rangeSize - 1) {
      label = `from ${formatPrice(start)}`
    } else if (index === 0) {
      label = `up to ${formatPrice(end)}`
    }

    return {
      start,
      end,
      label,
    }
  })

  return priceRanges
})

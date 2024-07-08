import { housesData } from "@/server/houses-data"
import { PriceRange } from "@/types"
import { formatPrice } from "@/utils/price-formatter"

export default defineEventHandler(async (event): Promise<PriceRange[]> => {
  const prices = Array.from(new Set(housesData.map((house) => house.price)))

  const minPrice = Math.min(...prices)
  const maxPrice = Math.max(...prices)

  const rangeSize = 5
  const range = Math.ceil(((maxPrice - minPrice) / rangeSize / 1000) * 1000)

  const priceRanges = Array.from({ length: rangeSize }, (_, index) => {
    let start: number | undefined
    let end: number | undefined

    start = Number((minPrice + index * range).toFixed(0))
    end = Number((start + range).toFixed(0))
    let label = `${formatPrice(start)} - ${formatPrice(end)}`

    if (index === rangeSize - 1) {
      label = `from ${formatPrice(start)}`
      end = undefined
    } else if (index === 0) {
      label = `up to ${formatPrice(end)}`
      start = undefined
    }

    return { start, end, label }
  })

  return priceRanges
})

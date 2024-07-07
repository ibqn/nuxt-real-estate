import type { PriceRange } from "@/types"

export const getPriceRanges = async (): Promise<PriceRange[]> => {
  const priceRanges = await $fetch<PriceRange[]>("/api/price-ranges")
  return priceRanges
}

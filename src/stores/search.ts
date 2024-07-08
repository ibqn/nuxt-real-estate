export const useSearchStore = defineStore("search", () => {
  const defaultLocation = "Location (any)"
  const defaultProperty = "Property (any)"
  const defaultPriceRange = "Price range (any)"

  const location = ref(defaultLocation)
  const property = ref(defaultProperty)
  const priceRange = ref(defaultPriceRange)

  const searchQuery = ref("")
  const setSearchQuery = (newSearchQuery: string) =>
    (searchQuery.value = newSearchQuery)

  const setLocation = (newLocation: string) => (location.value = newLocation)
  const setProperty = (newProperty: string) => (property.value = newProperty)
  const setPriceRange = (newPriceRange: string) =>
    (priceRange.value = newPriceRange)

  return {
    location,
    property,
    priceRange,
    setLocation,
    setProperty,
    setPriceRange,

    defaultLocation,
    defaultProperty,
    defaultPriceRange,

    searchQuery,
    setSearchQuery,
  }
})

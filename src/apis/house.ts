export const getHouses = async () => {
  const houses = await $fetch("/api/houses")
  return houses
}

export const getHouseById = async (id: string) => {
  const house = await $fetch(`/api/house/${id}`)
  return house
}

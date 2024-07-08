export const getHouses = async (queryString: string) => {
  const houses = await $fetch(`/api/houses?${queryString}`)
  return houses
}

export const getHouseById = async (id: string) => {
  const house = await $fetch(`/api/house/${id}`)
  return house
}

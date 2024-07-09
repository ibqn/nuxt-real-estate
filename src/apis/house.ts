function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

export const getHouses = async (queryString: string) => {
  const houses = await $fetch(`/api/houses?${queryString}`)
  await sleep(Math.floor(Math.random() * 2000))
  return houses
}

export const getHouseById = async (id: string) => {
  const house = await $fetch(`/api/house/${id}`)
  return house
}

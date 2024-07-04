export const getHouses = async () => {
  const houses = await $fetch("/api/houses")
  return houses
}

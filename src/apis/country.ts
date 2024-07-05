export const getCountries = async () => {
  const countries = await $fetch("/api/countries")
  return countries
}

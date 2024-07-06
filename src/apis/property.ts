export const getProperties = async () => {
  const properties = await $fetch("/api/properties")
  return properties
}

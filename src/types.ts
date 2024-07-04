export type House = {
  id: string
  type: string
  name: string
  description: string
  image: string
  imageLg: string
  country: string
  address: string
  bedrooms: number
  bathrooms: number
  surface: string
  year: number
  price: number
  agent: Agent
}

export type Agent = {
  image: string
  name: string
  phone: string
}

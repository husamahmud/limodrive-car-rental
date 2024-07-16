export interface CarI {
  id: number
  name: string
  model: string
  price: number
  availability: boolean
  description: string
  image: string
  seats: number
  transmission: string
  color: string
  seat: string
  interior: string
  category: string
  type: string
  make: string
  stars: number
}

export interface CarInfoI {
  transmission: string
  interior: string
  type: string
  seat: string
  category: string
  make: string
}

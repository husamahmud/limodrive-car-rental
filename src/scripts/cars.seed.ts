import { createCar } from '@/lib/car.api'
import { CARS } from '@/data/cars'

export const seedCars = async () => {
  for (const car of CARS) {
    try {
      const { data } = await createCar(car)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
}

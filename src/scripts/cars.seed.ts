import { addCarAPI } from '@/lib/data-service'
import { CARS } from '@/data/cars'

export const seedCars = async () => {
  for (const car of CARS) {
    try {
      const { data } = await addCarAPI(car)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
}

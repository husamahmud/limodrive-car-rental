import { supabase } from '@/lib/supabase'
import { CarI } from '@/types/car.interface'
import { toast, useToast } from '@/components/ui/use-toast'

export async function getCarsAPI() {
  const { data, error } = await supabase
    .from('cars')
    .select('*')

  if (error) {
    console.error('getCarsAPI', error)
    throw error
  }

  const cars = data as CarI[]
  return { data: cars }
}

export async function getCarAPI(id: string): Promise<{ data: CarI }> {
  const { data, error } = await supabase
    .from('cars')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('getCarAPI', error)
    throw error
  }

  const car = data as CarI
  return { data: car }
}

export async function addCarAPI(car: CarI) {
  const { data, error } = await supabase
    .from('cars')
    .insert(car)

  if (error) {
    console.error(error)
    throw error
  }

  return { data }
}

export async function deleteCarAPI(id: string) {
  const { error } = await supabase
    .from('cars')
    .delete()
    .eq('id', id)

  if (error) {
    console.error(error)
    throw error
  }

  return { data: id }
}

import { supabase } from '@/lib/supabase'
import { BookingI } from '@/types/booking.interface'

export async function addBookingAPI(booking: BookingI) {
  const { data, error } = await supabase
    .from('bookings')
    .insert(booking)
    .select()

  if (error) {
    console.error(error)
    throw error
  }

  return { data }
}

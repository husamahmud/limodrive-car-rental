import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateCarAPI } from '@/lib/car.api'

export function useUpdateCar() {
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationFn: updateCarAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cars'] })
    },
  })

  return { updateCar: mutate, isUpdating: isPending }
}

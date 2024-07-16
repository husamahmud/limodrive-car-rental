import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createCar as createCarAPI } from '@/lib/car.api'

export function useCreateCar() {
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationFn: createCarAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cars'] })
    },
  })

  return { createCar: mutate, isCreating: isPending }
}

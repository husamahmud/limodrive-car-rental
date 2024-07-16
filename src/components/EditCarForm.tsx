'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Switch } from '@/components/ui/switch'
import { Input } from '@/components/ui/input'
import React from 'react'
import { Textarea } from '@/components/ui/textarea'
import { useQuery } from '@tanstack/react-query'
import { getCarAPI } from '@/lib/car.api'
import Spinner from '@/components/Spinner'
import { useUpdateCar } from '@/app/hooks/useUpdateCar'
import { toast } from '@/components/ui/use-toast'
import { useCreateCar } from '@/app/hooks/useCreateCar'

const formSchema = z.object({
  name: z.string(),
  model: z.string(),
  price: z.string(),
  availability: z.boolean(),
  description: z.string(),
  image: z.string(),
  seat: z.string(),
  seats: z.string(),
  transmission: z.string(),
  color: z.string(),
  interior: z.string(),
  category: z.string(),
  type: z.string(),
  make: z.string(),
  stars: z.string(),
})

export default function EditCarForm({ carId }: { carId?: string }) {
  const { updateCar, isUpdating } = useUpdateCar()
  const { createCar, isCreating } = useCreateCar()
  const isEditingSession = Boolean(carId)
  const isWorking = isUpdating || isCreating

  const { data, isLoading } = useQuery({
    queryKey: ['car', carId],
    queryFn: () => getCarAPI(carId!),
    enabled: isEditingSession,
    retry: false,
  })

  const car = data?.data

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      model: '',
      price: '',
      availability: false,
      description: '',
      image: '',
      seat: '',
      seats: '',
      transmission: '',
      color: '',
      interior: '',
      category: '',
      type: '',
      make: '',
      stars: '',
    },
  })

  useEffect(() => {
    if (car && isEditingSession) {
      form.reset({
        ...car,
        price: car.price.toString() || '',
        seats: car.seats.toString() || '',
        stars: car.stars.toString() || '',
      })
    }
  }, [car, isEditingSession, form])

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)

    const carValues = {
      ...values,
      price: +values.price,
      seats: +values.seats,
      stars: +values.stars,
    }

    if (isEditingSession) {
      updateCar({
        ...carValues,
        id: +carId!,
      }, {
        onSuccess: () => {
          toast({ title: 'Car updated successfully' })
        },
        onError: (error) => {
          toast({ title: 'Failed to update car' })
          console.error(error)
        },
      })
    } else {
      console.log('createCar', carValues)
      createCar({
        ...carValues,
        id: Math.floor(Math.random() * 1000),
      }, {
        onSuccess: () => {
          toast({ title: 'Car created successfully' })
          form.reset()
        },
        onError: (error) => {
          toast({ title: 'Failed to create car', variant: 'destructive' })
          console.error(error)
        },
      })

    }
  }

  if (isLoading) return <Spinner />

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Car Image url</FormLabel>
              <FormControl>
                <Input onChange={field.onChange}
                       value={field.value} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-3 gap-x-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Car name</FormLabel>
                <FormControl>
                  <Input onChange={field.onChange}
                         value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="availability"
            render={({ field }) => (
              <FormItem className="flex justify-between items-center">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">
                    Availability
                  </FormLabel>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value || false}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Car Model</FormLabel>
                <FormControl>
                  <Input onChange={field.onChange}
                         value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Car Category</FormLabel>
                <FormControl>
                  <Input onChange={field.onChange}
                         value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price per hour</FormLabel>
                <FormControl>
                  <Input onChange={field.onChange}
                         value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Car type</FormLabel>
                <FormControl>
                  <Input onChange={field.onChange}
                         value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="stars"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Stars</FormLabel>
                <FormControl>
                  <Input onChange={field.onChange}
                         value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="transmission"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Transmission</FormLabel>
                <FormControl>
                  <Input onChange={field.onChange}
                         value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="interior"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Interior</FormLabel>
                <FormControl>
                  <Input onChange={field.onChange}
                         value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="seat"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Seat type</FormLabel>
                <FormControl>
                  <Input onChange={field.onChange}
                         value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="seats"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Seats Count</FormLabel>
                <FormControl>
                  <Input onChange={field.onChange}
                         value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="make"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Make</FormLabel>
                <FormControl>
                  <Input onChange={field.onChange}
                         value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-3 mt-6">
          <Button
            type="submit"
            variant="outline"
            className="border-brand hover:text-white hover:bg-brand"
            disabled={isWorking}
          >
            {isEditingSession ? 'Update Car' : 'Create Car'}
          </Button>
        </div>
      </form>
    </Form>
  )
}

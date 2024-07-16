'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

import CarItem from '@/components/CarItem'
import CarsOperations from '@/components/CarsOperations'

import { getCarsAPI } from '@/lib/data-service'
import { CarI } from '@/types/car.interface'
import { useQuery } from '@tanstack/react-query'
import Spinner from '@/components/Spinner'

export default function Vehicles() {
  const { data, isPending: isLoading, error } = useQuery({
    queryKey: ['cars'],
    queryFn: getCarsAPI,
  })
  const cars = data?.data as CarI[]
  const searchParams = useSearchParams()
  const [filteredCars, setFilteredCars] = useState<CarI[]>([])

  useEffect(() => {
    const typeFilter = searchParams.get('type') || 'all'
    const makeFilter = searchParams.get('make') || 'all'
    const colorFilter = searchParams.get('color') || 'all'

    const newFilteredCars = cars?.filter(car =>
      (typeFilter === 'all' || car.type === typeFilter) &&
      (makeFilter === 'all' || car.make === makeFilter) &&
      (colorFilter === 'all' || car.color === colorFilter),
    )

    setFilteredCars(newFilteredCars)
  }, [cars, searchParams])

  return (
    <div className="container py-12 space-y-14">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-serif font-medium tracking-widest">
          Browse our lexury vehicles
        </h1>

        <CarsOperations />
      </div>

      {isLoading && <Spinner />}
      {error && <span>There is no cars at the momment</span>}
      <div className="grid grid-cols-4 items-center gap-4">
        {filteredCars?.length === 0 ? (
          <div className="col-span-full text-center">
            <p className="text-gray-700">No cars found</p>
          </div>
        ) : (
          filteredCars?.map((car) => (
            <CarItem
              {...car}
              key={car.id}
            />
          ))
        )}
      </div>
    </div>
  )
}

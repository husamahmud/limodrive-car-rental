'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

import CarItem from '@/components/CarItem'
import CarsOperations from '@/components/CarsOperations'

import { getCarsAPI } from '@/lib/data-service'
import { CarI } from '@/types/car.interface'


export default function Vehicles() {
  const searchParams = useSearchParams()
  const [cars, setCars] = useState<CarI[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filteredCars, setFilteredCars] = useState<CarI[]>([])

  useEffect(() => {
    async function fetchCars() {
      setLoading(true)
      setError(null)

      try {
        const { data } = await getCarsAPI()
        setCars(data)
      } catch (error: any) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchCars()
  }, [])

  useEffect(() => {
    const typeFilter = searchParams.get('type') || 'all'
    const makeFilter = searchParams.get('make') || 'all'
    const colorFilter = searchParams.get('color') || 'all'

    const newFilteredCars = cars.filter(car =>
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

      <div className="grid grid-cols-4 gap-4">
        {loading ? (
          <div className="col-span-full text-center">
            <p className="text-gray-700">Loading cars...</p>
          </div>
        ) : error ? (
          <div className="col-span-full text-center">
            <p className="text-red-500">{error}</p>
          </div>
        ) : filteredCars.length === 0 ? (
          <div className="col-span-full text-center">
            <p className="text-gray-700">No cars found</p>
          </div>
        ) : (
          filteredCars.map((car) => (
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

const MessageDisplay = ({ message, className = 'text-gray-700' }: {
  message: string;
  className?: string;
}) => (
  <div className="col-span-full text-center">
    <p className={className}>{message}</p>
  </div>
)

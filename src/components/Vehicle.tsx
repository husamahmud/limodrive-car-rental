'use client'

import React from 'react'
import Image from 'next/image'
import { FiTool } from 'react-icons/fi'
import { PiSeatbeltLight, PiSeatLight } from 'react-icons/pi'
import { BiCategoryAlt } from 'react-icons/bi'
import { FaCarSide } from 'react-icons/fa'
import { IoCarSportOutline } from 'react-icons/io5'
import { useQuery } from '@tanstack/react-query'

import { getCarAPI } from '@/lib/data-service'
import Stars from '@/components/Stars'
import {
  Card,
  CardHeader,
} from '@/components/ui/card'

const CAR_INFO = [
  {
    type: 'transmission',
    label: 'Transmission',
    icon: FiTool,
  },
  {
    type: 'interior',
    label: 'Interior',
    icon: PiSeatbeltLight,
  },
  {
    type: 'type',
    label: 'Type',
    icon: FaCarSide,
  },
  {
    type: 'seat',
    label: 'Seat',
    icon: PiSeatLight,
  },
  {
    type: 'category',
    label: 'Category',
    icon: BiCategoryAlt,
  },
  {
    type: 'make',
    label: 'Make',
    icon: IoCarSportOutline,
  },
]

export default function Vehicle({ carId }: { carId: string }) {
  const { data, isPending, error } = useQuery({
    queryKey: ['car', carId],
    queryFn: () => getCarAPI(carId),
  })

  if (isPending) return <div>Loading...</div>

  if (error) return <div>Error: {error.message}</div>

  const car = data?.data

  return (
    <div className="py-20 container">
      <div className="flex gap-8 px-10">
        <div className="flex-1 flex justify-center items-center">
          <Image
            width={500}
            height={500}
            src={car.image}
            alt={car.name}
            priority={true}
          />
        </div>

        <div className="flex-1 space-y-5">
          <h1 className="text-5xl font-serif font-medium">{car.name}</h1>
          <Stars
            number={car.stars}
            className="flex"
          />

          <div className="grid grid-cols-2 gap-3">
            {CAR_INFO.map((info) => (
              <Card
                key={info.type}
                className="bg-[#F7F5F3] flex flex-col border border-brand-gray"
              >
                <CardHeader className="flex flex-row justify-between p-4 items-center">
                  <p className="flex flex-col">
                    <span className="font-semibold text-base">
                      {car[info.type]}
                    </span>
                    {info.label}
                  </p>

                  {info.icon && (
                    <info.icon
                      size={25}
                      className="text-gray-500"
                    />
                  )}
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

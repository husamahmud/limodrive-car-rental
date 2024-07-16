'use client'

import React from 'react'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import { FiTool } from 'react-icons/fi'
import { FaCarSide } from 'react-icons/fa'
import { BiCategoryAlt } from 'react-icons/bi'
import { PiSeatbeltLight, PiSeatLight } from 'react-icons/pi'
import { HiArrowUpRight } from 'react-icons/hi2'
import { IoCarSportOutline } from 'react-icons/io5'
import { getCarAPI } from '@/lib/data-service'
import { Card, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Stars from '@/components/Stars'
import Spinner from '@/components/Spinner'
import { Modal } from '@/components/Modal'
import ModalForm from '@/components/ModalForm'

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

interface carInfoType {
  transmission: string
  interior: string
  type: string
  seat: string
  category: string
  make: string
}

export default function Vehicle({ carId }: { carId: string }) {
  const { data, isPending, error } = useQuery({
    queryKey: ['car', carId],
    queryFn: () => getCarAPI(carId),
  })

  if (isPending) return <Spinner />

  if (error) return <div>Error: {error.message}</div>

  const car = data?.data

  return (
    <div className="py-20 container">
      <div className="flex gap-8 px-10">
        <div className="flex-1 flex flex-col justify-evenly items-center">
          <Image
            width={500}
            height={285}
            src={car.image}
            alt={car.name}
            priority={true}
          />

          <p className="text-lg tracking-wide">
            {car.description}
          </p>
        </div>

        <div className="flex-1 space-y-5">
          <h1 className="text-4xl font-serif font-medium">{car.name}</h1>
          <Stars number={car.stars}
                 className="flex" />

          <div className="grid grid-cols-2 gap-3">
            {CAR_INFO.map((info) => (
              <Card
                key={info.type}
                className="bg-[#F7F5F3] flex flex-col border border-brand-gray"
              >
                <CardHeader className="flex flex-row justify-between p-4 items-center">
                  <p className="flex flex-col">
                    <span className="font-semibold text-base">
                      {car[info.type as keyof carInfoType]}
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

          <div className="flex justify-evenly">
            <p className="flex justify-center text-lg items-center gap-1">
              <span className="text-4xl font-semibold">${car.price}</span> / per
              hour
            </p>
            <p className="flex justify-center text-lg items-center gap-1">
              <span className="text-4xl font-semibold">${car.price * 20}</span> /
              per
              day
            </p>
          </div>

          <Modal
            title={`Book ${car.name}`}
            modalOpen={
              <Button className='w-full py-8 flex items-center gap-4 text-lg border border-brand shadow hover:text-white transition-all text-brand-dark font-semibold hover:bg-brand bg-transparent'>
              Book now <HiArrowUpRight />
              </Button>
            }
          >
            <ModalForm />
          </Modal>
        </div>
      </div>
    </div>
  )
}

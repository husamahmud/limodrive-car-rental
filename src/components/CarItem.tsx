'use client'

import Link from 'next/link'
import Image from 'next/image'
import { HiArrowUpRight } from 'react-icons/hi2'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CarI } from '@/types/car.interface'
import Stars from '@/components/Stars'

export default function CarItem(car: CarI) {
  return (
    <Card className="bg-[#F7F5F3] flex flex-col">
      <CardHeader>
        <CardTitle className="font-medium text-base text-center">
          {car.name}
        </CardTitle>

        <Stars number={car.stars} />
      </CardHeader>

      <CardContent className="space-y-6 text-center flex flex-col justify-between flex-1">
        <Image
          src={car.image}
          alt={car.name}
          width={200}
          height={200}
          priority={true}
          className="object-cover mx-auto"
        />

        <p className="font-light text-sm">
          {car.description}
        </p>

        <p className="flex justify-center items-center gap-1">
          <span className="text-3xl font-semibold">${car.price}</span> / per
          hour
        </p>
      </CardContent>

      <CardFooter>
        <Link
          href={`/vehicles/${car.id}`}
          className="flex items-center gap-1 mx-auto border border-brand px-5 py-3 rounded-md shadow hover:text-white transition-all hover:bg-brand"
        >
          More details <HiArrowUpRight />
        </Link>
      </CardFooter>
    </Card>
  )
}

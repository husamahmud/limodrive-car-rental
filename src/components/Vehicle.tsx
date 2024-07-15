'use client'

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getCarAPI } from '@/lib/data-service'

export default function Vehicle({ carId }: { carId: string }) {
  const { data, isPending, error } = useQuery({
    queryKey: ['car', carId],
    queryFn: () => getCarAPI(carId),
  })

  console.log(data)

  return (
    <div className="py-20 container">
      <div className="flex gap-8 px-10">
        <div className="flex-1">
          1
        </div>
        <div className="flex-1">
          1
        </div>
      </div>
    </div>
  )
}

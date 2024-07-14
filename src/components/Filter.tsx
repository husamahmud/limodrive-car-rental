'use client'

import { useSearchParams, useRouter } from 'next/navigation'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface FilterProps {
  options: { label: string; value: string }[]
  filterField: string
  placeholder: string
}

export default function Filter({
                                 options,
                                 filterField,
                                 placeholder,
                               }: FilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleValueChange = (value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()))
    current.set(filterField, value)

    const search = current.toString()
    const query = search ? `?${search}` : ''
    const newPath = `${window.location.pathname}${query}`
    router.push(newPath)
  }

  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent>
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

'use client'

import React from 'react'
import { HiOutlinePhoneArrowUpRight } from 'react-icons/hi2'
import { HiOutlineMail } from 'react-icons/hi'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'

export default function Footer() {
  const { toast } = useToast()
  const [email, setEmail] = React.useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast({ title: 'You have successfully subscribed' })
    setEmail('')
  }

  return (
    <footer className="bg-brand-dark"
            onSubmit={handleSubmit}>
      <div className="container flex justify-between text-white py-14">
        <a href="tel:+15249205320"
           className="flex items-center gap-5">
          <HiOutlinePhoneArrowUpRight
            size={30}
            className="text-brand"
          />

          <p className="flex flex-col">
            <span className="text-brand font-extralight text-sm uppercase">Phone</span>
            <span className="tracking-wide">+1 524 9205 320</span>
          </p>
        </a>

        <a href="mailto:info@limo.com"
           className="flex items-center gap-5">
          <HiOutlineMail
            size={30}
            className="text-brand"
          />

          <p className="flex flex-col">
            <span className="text-brand font-extralight text-sm uppercase">Email</span>
            <span className="tracking-wide">info@limo.com</span>
          </p>
        </a>

        <div>
          <form className="flex gap-3">
            <Input
              type="email"
              placeholder="Email"
              className="bg-brand-gray border-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              type="submit"
              className="border border-brand bg-transparent hover:bg-brand"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </footer>
  )
}

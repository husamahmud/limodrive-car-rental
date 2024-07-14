'use client'

import React from 'react'
import { HiOutlinePhoneArrowUpRight } from 'react-icons/hi2'
import { HiOutlineMail } from 'react-icons/hi'
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import Logo from '@/components/Logo'

const LINKS = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Services', href: '/services' },
  { title: 'Vehicles', href: '/vehicles' },
]

const SERVICES = [
  { title: 'Airport Transfer', href: '/services' },
  { title: 'Corporate Travel', href: '/services' },
  { title: 'Wedding Limo', href: '/services' },
  { title: 'Prom Limo', href: '/services' },
]

export default function Footer() {
  const { toast } = useToast()
  const [email, setEmail] = React.useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast({ title: 'You have successfully subscribed' })
    setEmail('')
  }

  return (
    <footer className="bg-brand-dark divide-y divide-stone-700"
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

      <div className="container flex justify-between gap-32 text-white py-14">
        <div className="space-y-10 flex-1">
          <Logo color="light" />
          <p className="font-extralight text-sm">
            We offer a luxurious and stylish transportation option for various
            occasions and events. Whether you are planning a special
            celebration,
            corporate event, wedding, prom night, or simply desire a
            sophisticated ride.
          </p>
        </div>

        <div className="flex-1">
          <h6 className="font-serif text-xl mb-6 uppercase">Links</h6>
          <ul className="font-extralight flex flex-col gap-4">
            {LINKS.map(({ title, href }) => (
              <Link
                href={href}
                key={title}
                className="hover:text-brand transition-colors"
              >
                {title}
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <h6 className="font-serif text-xl mb-6 uppercase">Our services</h6>
          <ul className="font-extralight flex flex-col gap-4">
            {SERVICES.map(({ title, href }) => (
              <Link
                href={href}
                key={title}
                className="hover:text-brand transition-colors"
              >
                {title}
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex-1 space-y-10">
          <h6 className="font-serif text-xl mb-6 uppercase">Adress</h6>

          <p>
            1532 Park Serrena Street,
            Selgoes Park, Los Angeles
            90001, US
          </p>

          <div className="flex gap-4">
            <a href="/">
              <FaFacebook size={20}
                          className="hover:text-brand transition-colors" />
            </a>
            <a href="/">
              <FaInstagram size={20}
                           className="hover:text-brand transition-colors" />
            </a>
            <a href="/">
              <FaTwitter size={20}
                         className="hover:text-brand transition-colors" />
            </a>
            <a href="/">
              <FaLinkedinIn size={20}
                            className="hover:text-brand transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <div className="container flex justify-between text-white py-4 text-sm font-light">
        <p>© Limodrive Car Rental. All Rights Reserved.</p>
        <p>Privacy Policy</p>
      </div>
    </footer>
  )
}

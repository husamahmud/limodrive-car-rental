import React from 'react'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import './globals.css'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'
import Providers from '@/app/providers'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Limodrive',
  description: 'Limodrive is a car rental service that provides a wide range of vehicles for rent.',
}

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={cn('min-h-screen font-sans antialiased', fontSans.variable)}>
    <Providers>
      {children}
      <Toaster />
    </Providers>
    </body>
    </html>
  )
}

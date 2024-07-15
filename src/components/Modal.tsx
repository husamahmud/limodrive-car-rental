import React from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import ModalForm from '@/components/ModalForm'

interface ModalProps {
  children: React.ReactNode
  carName: string
}

export function Modal({ children, carName }: ModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full py-8 flex items-center gap-4 text-lg border border-brand shadow hover:text-white transition-all text-brand-dark font-semibold hover:bg-brand bg-transparent">{children}</Button>
      </DialogTrigger>

      <DialogContent className="max-w-lg">
        <DialogHeader className="mb-6">
          <DialogTitle>Book {carName}</DialogTitle>
        </DialogHeader>

        <ModalForm />
      </DialogContent>
    </Dialog>
  )
}

import React from 'react'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface ModalProps {
  children: React.ReactNode
  modalOpen: React.ReactNode | string
  title: string
}

export function Modal({
                        children,
                        title,
                        modalOpen,
                      }: ModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {modalOpen}
      </DialogTrigger>

      <DialogContent className="max-w-lg">
        <DialogHeader className="mb-6">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        {children}
      </DialogContent>
    </Dialog>
  )
}

'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/app/hooks/useAuth'
import Spinner from '@/components/Spinner'

export default function ProtectedRoute({ children }: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const { isLoading, isAuthenticated } = useUser()

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      router.replace('/login')
    }
  }, [isAuthenticated, router, isLoading])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <Spinner />
      </div>
    )
  }

  if (isAuthenticated) return children
}

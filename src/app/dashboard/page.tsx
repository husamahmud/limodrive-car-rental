'use client'

import React from 'react'
import Dashboard from '@/components/Dashboard'
import ProtectedRoute from '@/components/ProtectedRoute'

const Page = () => {
  return (
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  )
}

export default Page

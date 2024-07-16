import { Suspense } from 'react'

import Header from '@/components/Header'
import VehiclesBanner from '@/components/VehiclesBanner'
import Footer from '@/components/Footer'
import Vehicles from '@/components/Vehicles'
import Spinner from '@/components/Spinner'

const Page = () => {
  return (
    <>
      <Header />
      <VehiclesBanner />
      <Suspense fallback={<Spinner />}>
        <Vehicles />
      </Suspense>
      <Footer />
    </>
  )
}

export default Page

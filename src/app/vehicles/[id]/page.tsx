import Header from '@/components/Header'
import Vehicle from '@/components/Vehicle'
import Footer from '@/components/Footer'

const Page = ({ params }: { params: any }) => {
  return (
    <>
      <Header />
      <Vehicle carId={params.id} />
      <Footer />
    </>
  )
}

export default Page

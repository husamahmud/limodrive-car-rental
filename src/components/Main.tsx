import { HiOutlinePhoneArrowUpRight } from 'react-icons/hi2'
import { HiOutlineMail } from 'react-icons/hi'
import { HiOutlinePlay } from 'react-icons/hi2'

import Slider from '@/components/Slider'
import AboutUsForm from '@/components/AboutUsForm'

export default function Main() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[35rem] dropdown">
        <div className="absolute inset-0 bg-hero-banner bg-cover bg-center"></div>
        <div className="relative flex container items-center justify-center flex-col space-y-3 h-full">
          <p className="text-lg font-semibold uppercase tracking-wider text-brand">
            Beyond the ordinary
          </p>
          <h1 className="text-4xl font-bold text-white">
            Elevate your journey with limodrive
          </h1>
        </div>
      </section>

      {/* Services */}
      <section className="bg-brand-gray">
        <div className="container py-16 flex justify-between items-center flex-col md:flex-row gap-8 md:gap-20">
          <div className="flex-1 space-y-4">
            <h2 className="text-lg font-medium text-left font-serif text-brand">
              Our Services
            </h2>
            <h5 className="text-4xl font-serif text-left text-stone-100">
              Seamless Luxury Services
            </h5>
            <p className="text-left text-stone-200 text-sm">
              Limodrive provide a fleet of high-end vehicles from well-known
              luxury brands. This may include cars from manufacturers like
              Mercedes-Benz, BMW, Audi, Jaguar, and more.
            </p>
            <p className="text-left text-stone-200 text-sm">
              We offer chauffeur services, allowing customers to relax and enjoy
              the ride while a professional driver takes care of the
              transportation.
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <Slider />
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="bg-video-banner bg-no-repeat bg-center bg-cover relative">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="py-36 flex justify-center items-center relative z-10 flex-col gap-6">
          <a className="p-8 bg-stone-50 bg-opacity-20 rounded-full flex justify-center items-center"
             href="/">
            <HiOutlinePlay
              size={60}
              className="text-brand p-4 bg-stone-50 rounded-full border border-brand"
            />
          </a>

          <h2 className="text-lg font-medium text-left font-serif text-brand">
            Our Services
          </h2>
          <h5 className="text-4xl font-serif text-left text-stone-100">
            Seamless Luxury Services
          </h5>
        </div>
      </section>

      {/* About us */}
      <section className="bg-about-banner">
        <div className="container py-16 gap-10 bg-cover flex flex-col md:flex-row">
          <div className="flex-1 space-y-4">
            <h2 className="text-lg font-medium text-left font-serif text-brand">
              GET IN TOUCH
            </h2>
            <h5 className="text-4xl font-serif text-left text-stone-100">
              Reach Out to Us
              Today
            </h5>
            <p className="text-left text-stone-200 text-sm">
              Connect with us today for personalized assistance and support. Our
              team is ready to address your needs and provide the guidance
              you are looking for. Reach out to us and experience the difference
              in service and care.
            </p>

            <div className="w-full flex text-white">
              <a className="flex-1 border-l border-brand p-1 px-6 flex flex-col md:py-4 space-y-2 md:space-y-6"
                 href="tel:+15249205320"
              >
                <HiOutlinePhoneArrowUpRight
                  size={30}
                  className="text-brand"
                />
                <span className="text-stone-600">Phone</span>
                <span>+1 524 9205 320</span>
              </a>
              <a className="flex-1 border-l border-brand p-1 px-6 flex flex-col md:py-4 space-y-2 md:space-y-6"
                 href="mailto:info@limo.com">
                <HiOutlineMail
                  size={30}
                  className="text-brand"
                />
                <span className="text-stone-600">Email</span>
                <span>info@limo.com</span>
              </a>
            </div>

          </div>

          <div className="flex-1">
            <AboutUsForm />
          </div>
        </div>
      </section>
    </main>
  )
}

import Logo from '@/components/Logo'
import MainNav from '@/components/MainNav'
import CallUs from '@/components/CallUs'

const Header = () => {
  return (
    <header className="py-5 border-b-2 border-stone-300">
      <div className="container flex justify-center items-center gap-10">
        <MainNav />
        <Logo />
        <CallUs />
      </div>
    </header>
  )
}

export default Header

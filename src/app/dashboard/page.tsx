'use Client'

import Logo from '@/components/Logo'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { FiLogOut } from 'react-icons/fi'
import { Button } from '@/components/ui/button'
import CarsTable from '@/components/CarsTable'

export default function Dashboard() {
  return (
    <>
      <header className="py-5 border-b-2 border-stone-300">
        <div className="container flex justify-between items-center gap-10">
          <Logo />

          <div className="flex gap-4 items-center">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <Button variant="outline">
              <FiLogOut />
            </Button>
          </div>
        </div>
      </header>

      <div className="container">
        <CarsTable />
      </div>
    </>
  )
}

import Logo from '@/components/Logo'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { FiLogOut } from 'react-icons/fi'
import { Modal } from '@/components/Modal'
import EditCarForm from '@/components/EditCarForm'
import CarsTable from '@/components/CarsTable'
import { useLogout } from '@/app/hooks/useAuth'

export default function Dashboard() {
  const { logout, isLoggingOut } = useLogout()

  const handleLogout = () => {
    logout()
  }

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

            <Button variant="outline"
                    disabled={isLoggingOut}
                    onClick={handleLogout}>
              <FiLogOut />
            </Button>
          </div>
        </div>
      </header>

      <div className="container py-14 space-y-4">
        <Modal modalOpen={<Button>Add Car </Button>}
               title="Add a new Car">
          <EditCarForm />
        </Modal>

        <CarsTable />
      </div>
    </>
  )
}

import { useRouter } from 'next/navigation'
import { useMutation, useQuery } from '@tanstack/react-query'
import { login as loginAPI } from '@/lib/auth.api'
import { logout as logoutAPI } from '@/lib/auth.api'
import { LoginI } from '@/types/user.interface'
import { getCurrentUser } from '@/lib/auth.api'

export function useLogin() {
  const router = useRouter()

  const { mutate: login, isPending: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }: LoginI) => loginAPI({ email, password }),
    onSuccess: () => {
      router.push('/dashboard')
    },
  })

  return { login, isLoggingIn }
}

export function useLogout() {
  const router = useRouter()

  const { mutate: logout, isPending: isLoggingOut } = useMutation({
    mutationFn: () => logoutAPI(),
    onSuccess: () => {
      router.push('/login')
    },
  })

  return { logout, isLoggingOut }
}

export function useUser() {
  const { data: user, isPending: isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
  })

  return {
    user,
    isLoading,
    isAuthenticated: user?.role === 'authenticated',
  }
}

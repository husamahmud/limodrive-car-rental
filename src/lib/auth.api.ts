import { supabase } from '@/lib/supabase'

interface LoginProps {
  email: string,
  password: string
}

export async function login({ email, password }: LoginProps) {
  let { data, error } = await supabase
    .auth
    .signInWithPassword({
      email: email,
      password: password,
    })

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export async function logout() {
  let { error } = await supabase.auth.signOut()

  if (error) {
    throw new Error(error.message)
  }
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession()

  if (!session.session) {
    return null
  }

  const { data, error } = await supabase.auth.getUser()
  console.log(data)

  if (error) {
    throw new Error(error.message)
  }

  return data?.user
}

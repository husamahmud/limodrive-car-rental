'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import SpinnerMini from '@/components/SpinnerMini'
import { useToast } from '@/components/ui/use-toast'
import { useLogin } from '@/app/hooks/useAuth'

const Login = () => {
  const { toast } = useToast()
  const [email, setEmail] = useState('husam@gmail.com')
  const [password, setPassword] = useState('123456789')
  const { login, isLoggingIn } = useLogin()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    login({ email, password }, {
      onSuccess: () => {
        toast({ title: 'Login success' })
      },
      onError: () => {
        toast({ title: 'Login error', variant: 'destructive' })
      },
    })
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Card className="w-[350px]">
        <CardHeader className="text-center">
          <CardTitle>Sign in</CardTitle>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Write your email"
                  disabled={isLoggingIn}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Write your password"
                  disabled={isLoggingIn}
                />
              </div>
            </div>
          </CardContent>

          <CardFooter className="w-full flex-col space-y-3">
            <Button
              className="w-full"
              type="submit"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? <SpinnerMini /> : 'Login'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

export default Login

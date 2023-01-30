'use client'

import { useEffect, useState } from 'react'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { UserContextProvider } from '../context'
import { fetchUser } from '../fetch'
import { UserType } from '../types'

type Props = {
  children: React.ReactNode
}

export const UserContextWrapper = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<Partial<UserType>>({})

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      fetchUser()
        .then((user) => {
          setUser(user)
          setIsLoggedIn(true)
        })
        .finally(() => {
          setIsLoading(false)
        })
    } else {
      setIsLoading(false)
    }
  }, [])

  const onLogout = () => {
    localStorage.clear()
    setIsLoggedIn(false)
  }

  const onLogin = (user: UserType) => {
    setIsLoggedIn(true)
    setUser(user)
  }

  return (
    <UserContextProvider
      value={{
        ...user,
        isLoggedIn,
        isLoading,
        onLogin,
        onLogout,
      }}
    >
      {!isLoading ? (
        children
      ) : (
        <span>
          <ArrowPathIcon className="mx-auto h-7 w-7 animate-spin" />
        </span>
      )}
    </UserContextProvider>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { UserContextProvider } from '../context'
import { fetchUser } from '../fetch'

type Props = {
  children: React.ReactNode
}

export const UserContextWrapper = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      fetchUser()
        .then(() => {
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

  const onLogin = () => {
    setIsLoggedIn(true)
  }

  return (
    <UserContextProvider
      value={{
        isLoggedIn,
        isLoading,
        onLogin,
        onLogout,
      }}
    >
      {!isLoading ? children : <span><ArrowPathIcon className='animate-spin w-7 h-7 mx-auto'/></span>}
    </UserContextProvider>
  )
}

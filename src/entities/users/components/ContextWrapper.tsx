'use client'

import { useEffect, useState } from 'react'
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
      fetchUser('', token)
        .then(() => {
          setIsLoggedIn(true)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
    setIsLoading(false)
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
      {!isLoading ? children : 'Loading user...'}
    </UserContextProvider>
  )
}

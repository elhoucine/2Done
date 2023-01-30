'use client'

import React from 'react'
import { UserType } from './types'

type ValuesType = {
  isLoggedIn: boolean
  isLoading: boolean
  username?: string
  avatar?: string
  onLogin: (user: UserType) => void
  onLogout: () => void
}

const UserContext = React.createContext<ValuesType>({
  isLoggedIn: false,
  isLoading: true,
  username: '',
  avatar: '',
  onLogin: () => {},
  onLogout: () => {},
})

export const UserContextProvider = UserContext.Provider

export default UserContext

'use client'

import UserContext from '@/entities/users/context'
import { useContext } from 'react'
import Login from './Login'
import TodoContainer from './TodoContainer'

export default function App() {
  const { isLoggedIn } = useContext(UserContext)

  return <>{!isLoggedIn ? <Login /> : <TodoContainer />}</>
}

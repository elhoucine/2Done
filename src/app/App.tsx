'use client'

import UserContext from '@/entities/users/context'
import { useContext } from 'react'
import Login from '@/entities/users/components/Login/Login'
import TodosContainer from '@/entities/todos/components/TodosContainer/TodosContainer'

export default function App() {
  const { isLoggedIn } = useContext(UserContext)

  return <>{!isLoggedIn ? <Login /> : <TodosContainer />}</>
}

'use client'

import { useState } from 'react'
import Login from './Login'
import TodoContainer from './TodoContainer'

const getIsLoggedIn = ():boolean => {
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    return !!localStorage?.getItem?.('token');
  }
  return false;
}


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(getIsLoggedIn());

  const handleOnLogin = (token: string): void => {
    if (token) {
      setIsLoggedIn(true)
    }
  } 

  return (
    <>
        
        {!isLoggedIn ?
            <Login onLogin={handleOnLogin}/>
        :
            <TodoContainer/>
        }
    </>
  )
}

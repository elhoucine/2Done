'use client'

import { login } from '@/entities/users/fetch'
import { useState } from 'react'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUsername(e?.currentTarget?.value)
  }
  const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e?.currentTarget?.value)
  }

  const handleOnFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await login(username, password)
    if (res) {
      localStorage.setItem('token', res)
    }
  }

  return (
    <form name='User login form' onSubmit={handleOnFormSubmit}>
        <input
          type="text"
          title='username'
          onChange={handleUsernameChange}
          placeholder="Username"
          name="addTodo"
          id="addTodo"
          value={username}
        />
        <input
          type="password"
          title='password'
          onChange={handlePasswordChange}
          placeholder="What you planning todo?"
          name="addTodo"
          id="addTodo"
          value={password}
        />
      <button>Login</button>
    </form>
  )
}

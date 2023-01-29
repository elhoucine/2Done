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

  const handleSubmit = async () => {
    const res = await login(username, password)
    if (res) {
      localStorage.setItem('token', res)
    }
  }

  return (
    <div>
      <input
        className="border-2"
        type="text"
        onChange={handleUsernameChange}
        placeholder="Username"
        name="addTodo"
        id="addTodo"
        value={username}
      />
      <input
        className="border-2"
        type="password"
        onChange={handlePasswordChange}
        placeholder="What you planning todo?"
        name="addTodo"
        id="addTodo"
        value={password}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

'use client'

import { useState, useMemo, useEffect } from 'react'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { register } from '@/entities/users/fetch'

export default function Register() {
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [avatar, setAvatar] = useState('')
  const [error, setError] = useState<string>()

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(res => setAvatar(res?.results?.[0].picture?.large));
  }, [])

  const isButtonDisabled = useMemo(() => {
    return username === '' || password === '' || isLoading
  }, [username, password, isLoading])

  const handleUsernameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUsername(e?.currentTarget?.value)
  }
  const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e?.currentTarget?.value)
  }

  const handleOnFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    localStorage.clear()
    try {
      const res = await register(username, password, avatar)
      if (res) {        
        localStorage.setItem('token', res)
        window.location.replace('/');
      } else {
        setError('Wrong credentials.')
      }
    } catch (error) {
      setError(error as string)
    }
  }

  return (
    <form
      className="mx-auto mt-5 w-1/2 rounded-lg border-2 border-dashed border-blue-500 border-opacity-20 p-10"
      name="UserLoginForm"
      onSubmit={handleOnFormSubmit}
    >
      <div role='alert' area-label='error'>
        {error ? <p data-testid='error-message' className="text-red-500">{error}</p> : null}
      </div>
      <div className="flex flex-col justify-between">
        <label htmlFor="username">Username</label>
        <input
          className="mb-5 w-full border-blue-200"
          type="text"
          title="username"
          onChange={handleUsernameChange}
          name="username"
          id="username"
          minLength={3}
          value={username}
        />
        <label htmlFor="password">Password</label>
        <input
          data-testid='password-input'
          className="mb-5 w-full border-blue-200"
          type="password"
          title="password"
          onChange={handlePasswordChange}
          name="password"
          id="password"
          minLength={6}
          value={password}
        />
        <button className='w-20 rounded-sm bg-blue-500 p-2 text-white mx-auto'
          disabled={isButtonDisabled}>Register</button>
      </div>
    </form>
  )
}

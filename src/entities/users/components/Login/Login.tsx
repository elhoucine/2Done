import { useState, useContext, useMemo } from 'react'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { login } from '@/entities/users/fetch'
import UserContext from '@/entities/users/context'

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string>()
  const { onLogin } = useContext(UserContext)

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
      const res = await login(username, password)
      if (res) {
        localStorage.setItem('token', res.token)
        onLogin(res)
      } else {
        setError('Wrong credentials.')
      }
    } catch (error) {
      setError(error as string)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form
      className="mx-auto mt-5 w-1/2 rounded-lg border-2 border-dashed border-blue-500 border-opacity-20 p-10"
      name="UserLoginForm"
      onSubmit={handleOnFormSubmit}
    >
      <div role="alert" area-label="error">
        {error ? (
          <p data-testid="error-message" className="text-red-500">
            {error}
          </p>
        ) : null}
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
          value={username}
          minLength={3}
        />
        <label htmlFor="password">Password</label>
        <input
          data-testid="password-input"
          className="mb-5 w-full border-blue-200"
          type="password"
          title="password"
          onChange={handlePasswordChange}
          name="password"
          id="password"
          minLength={6}
          value={password}
        />
        <button
          className="mx-auto mt-5 w-full rounded-sm bg-blue-500 p-2 text-white"
          disabled={isButtonDisabled}
        >
          {isLoading ? (
            <ArrowPathIcon className="mx-auto h-7 w-7 animate-spin" />
          ) : (
            'Login'
          )}
        </button>
        <a className="mt-10 text-center text-sm text-gray-600" href="/register">
          {'Create an account'}
        </a>
      </div>
    </form>
  )
}

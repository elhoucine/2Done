import { useState, useContext } from 'react'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { login } from '@/entities/users/fetch'
import UserContext from '@/entities/users/context'

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string>()
  const { onLogin } = useContext(UserContext)

  const handleUsernameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUsername(e?.currentTarget?.value)
  }
  const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e?.currentTarget?.value)
  }

  const handleOnFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    localStorage.clear()
    setIsLoading(true)
    e.preventDefault()
    try {
      const res = await login(username, password)
      if (res) {
        localStorage.setItem('token', res)
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
      name="User login form"
      onSubmit={handleOnFormSubmit}
    >
      {error ? <p className="text-red-500">{error}</p> : null}
      <div className="flex flex-col justify-between">
        <input
          className="mb-5 w-full border-blue-200"
          type="text"
          title="username"
          onChange={handleUsernameChange}
          placeholder="Username"
          name="addTodo"
          id="addTodo"
          value={username}
        />
        <input
          className="mb-5 w-full border-blue-200"
          type="password"
          title="password"
          onChange={handlePasswordChange}
          placeholder="What you planning todo?"
          name="addTodo"
          id="addTodo"
          value={password}
        />
        <button className='w-20 rounded-sm bg-blue-500 p-2 text-white mx-auto'
          disabled={isLoading}>
          {isLoading ? <ArrowPathIcon className='animate-spin w-7 h-7 mx-auto'/> : 'Login'}
        </button>
      </div>
    </form>
  )
}

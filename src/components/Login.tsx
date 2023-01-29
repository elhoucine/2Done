import { useState } from 'react'
import { BeakerIcon } from '@heroicons/react/24/solid'
import { login } from '@/entities/users/fetch'

type Props = {
  onLogin: (token: string) => void
}

export default function Login({ onLogin }: Props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string>()

  const handleUsernameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUsername(e?.currentTarget?.value)
  }
  const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e?.currentTarget?.value)
  }

  const handleOnFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    localStorage.clear();
    e.preventDefault()
    try {
      const res = await login(username, password)      
      if (res) {        
        localStorage.setItem('token', res)
        onLogin(res)
      } else {
        setError('Wrong credentials.');
      }
    } catch (error) {
      setError(error as string);

    }
  }

  return (
    <form className="w-1/2 mx-auto mt-5 border-2 border-blue-500 border-opacity-20 border-dashed rounded-lg p-10" name='User login form' onSubmit={handleOnFormSubmit}>
      {error ? <p className='text-red-500'>{error}</p> : null}
      <div className="flex flex-col justify-between">
        <input
           className='w-full mb-5 border-blue-200'
          type="text"
          title='username'
          onChange={handleUsernameChange}
          placeholder="Username"
          name="addTodo"
          id="addTodo"
          value={username}
        />
        <input
             className='w-full mb-5 border-blue-200'
          type="password"
          title='password'
          onChange={handlePasswordChange}
          placeholder="What you planning todo?"
          name="addTodo"
          id="addTodo"
          value={password}
        />
        <button className='bg-blue-500 p-2 rounded-sm text-white w-20'>Login</button>
      </div>
    </form>
  )
}

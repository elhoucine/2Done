import { fetcher } from '../utils'
import { UserType } from './types'

type Credentials = {
  username: string
  password: string
  avatar?: string
}

type AuthArgs = {
  username: string
  token: string
}

export const login = async (
  username: string,
  password: string,
): Promise<UserType> =>
  await fetcher<Credentials, UserType>('api/auth', 'POST', {
    username,
    password,
  })

export const register = async (
  username: string,
  password: string,
  avatar: string,
): Promise<string> =>
  await fetcher<Credentials, string>('api/users', 'POST', {
    username,
    password,
    avatar,
  })

export const fetchUser = async (): Promise<UserType> =>
  await fetcher<AuthArgs, UserType>('api/auth', 'GET')

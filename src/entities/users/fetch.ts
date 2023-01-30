import { fetcher } from '../utils'
import { UserType } from './types'

type Credentials = {
  username: string
  password: string
}

type AuthArgs = {
  username: string
  token: string
}

export const login = async (
  username: string,
  password: string,
): Promise<string> =>
  await fetcher<Credentials, string>('api/auth', 'POST', { username, password })

export const fetchUser = async (
  username: string,
  token: string,
): Promise<UserType> =>
  await fetcher<AuthArgs, UserType>('api/auth/id', 'POST', { username, token })

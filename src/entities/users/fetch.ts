import { fetcher } from '../utils'
import { UserType } from './types'

type Credentials = {
  username: string
  password: string
}

export const login = async (
  username: string,
  password: string,
): Promise<string> =>
  await fetcher<Credentials, string>('api/auth', 'POST', { username, password })

export const fetchUser = async (token: string): Promise<UserType> =>
  await fetcher<string, UserType>('api/auth/id', 'POST', token)

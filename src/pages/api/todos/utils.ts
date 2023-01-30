import { TodosType } from '@/entities/todos/types'
import { getUser } from '../store'
import { getUsernameFromToken } from '../utils'

export const removeProperty = (obj: TodosType, key: string): TodosType => {
  const { [key]: unused, ...rest } = obj
  return rest
}

export const isUserAuthenticated = (token: string | undefined): boolean => {
  const username = getUsernameFromToken(token)
  const user = getUser(username)
  return !!token && user && token === user.token
}

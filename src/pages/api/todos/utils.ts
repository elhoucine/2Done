import { TodosType } from '@/entities/todos/types'
import { getUserToken } from '../store'

export const removeProperty = (obj: TodosType, key: string): TodosType => {
  const { [key]: unused, ...rest } = obj
  return rest
}

export const isUserAuthenticated = (token: string | undefined): boolean => {
  return !!token && getUserToken() === token
}

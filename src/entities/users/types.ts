import { TodosType } from '../todos/types'

export type UserType = {
  username: string
  password: string
  token: string
  avatar: string
  todos: TodosType
}

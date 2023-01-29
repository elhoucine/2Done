import { TodosType } from '../todos/types'

export type UserType = {
  username: string
  password: string
  token: string
  todos: TodosType
}

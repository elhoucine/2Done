import store from 'store2'
import ShortUniqueId from 'short-unique-id'
import { TodosType, TodoType } from '@/entities/todos/types'
import { removeProperty } from './todos/utils'
import { UserType } from '@/entities/users/types'

const DEFAULT_USERNAME = 'trustpair'

const initGetUser = (): UserType => {
  if (!store(DEFAULT_USERNAME)) {
    store(DEFAULT_USERNAME, {
      username: DEFAULT_USERNAME,
      password: 'trustpair',
      token: '',
      todos: {},
    })
  }
  return store(DEFAULT_USERNAME)
}

const saveToStore = (todos: TodosType): void => {
  const user = initGetUser()
  store(DEFAULT_USERNAME, { ...user, todos })
}

export const authUser = (username: string, password: string): string => {
  const user = initGetUser()
  console.dir({ ii: { username, password } })

  if (username === user.username && password === user.password) {
    const uid = new ShortUniqueId({ length: 10 })()
    store(DEFAULT_USERNAME, { ...user, token: uid })
    return uid
  }
  return ''
}

export const getUserToken = () => {
  const user = initGetUser()
  return user.token
}

export const getTodos = (): TodosType => {
  const user = initGetUser()
  return store(DEFAULT_USERNAME).todos
}

export const addTodo = (newTodo: TodoType): boolean => {
  const uid = new ShortUniqueId({ length: 10 })()
  const todos = getTodos()
  saveToStore({ ...todos, [uid]: { ...newTodo, id: uid } })
  return true
}

export const updateTodo = (id: string, data: TodoType): boolean => {
  const todos = getTodos()
  if (todos[id]) {
    saveToStore({ ...todos, [id]: { ...data, id } })
    return true
  }
  return false
}

export const deleteTodo = (id: string): boolean => {
  const todos = getTodos()
  const newTodos: TodosType = removeProperty(todos, id)
  saveToStore(newTodos)
  return true
}

export const getTodo = (id: string): TodoType => {
  const data = getTodos()
  return data[id] ?? false
}

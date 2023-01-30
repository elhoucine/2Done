import store from 'store2'
import ShortUniqueId from 'short-unique-id'
import { TodosType, TodoType } from '@/entities/todos/types'
import { removeProperty } from './todos/utils'
import { UserType } from '@/entities/users/types'
import { generateToken, getUsernameFromToken } from './utils'

// Users
export const getUser = (username: string): UserType => {
  return store(username)
}

export const createUser = (
  username: string,
  password: string,
  avatar: string,
): string => {
  const existingUser = store(username)
  if (existingUser) {
    return existingUser?.token
  }
  const token = generateToken(username)
  store(username, {
    username,
    password,
    avatar,
    token,
    todos: {},
  })
  return token
}

export const authUser = (
  username: string,
  password: string,
): string | UserType => {
  const user = getUser(username)
  if (user && username === user.username && password === user.password) {
    const token = generateToken(username)
    store(username, { ...user, token })
    return getUser(username)
  }
  return ''
}

// TODOS
export const getTodos = (token: string): TodosType => {
  const username = getUsernameFromToken(token)
  return getUser(username)?.todos ?? {}
}

const saveToStore = (todos: TodosType, token: string): void => {
  const username = getUsernameFromToken(token)
  const user = getUser(username)
  store(user.username, { ...user, todos })
}

export const addTodo = (newTodo: TodoType, token: string): boolean => {
  const uid = new ShortUniqueId({ length: 10 })()
  const todos = getTodos(token)
  saveToStore({ ...todos, [uid]: { ...newTodo, id: uid } }, token)
  return true
}

export const updateTodo = (
  id: string,
  data: TodoType,
  token: string,
): boolean => {
  const todos = getTodos(token)
  if (todos[id]) {
    saveToStore({ ...todos, [id]: { ...data, id } }, token)
    return true
  }
  return false
}

export const deleteTodo = (id: string, token: string): boolean => {
  const todos = getTodos(token)
  const newTodos: TodosType = removeProperty(todos, id)
  saveToStore(newTodos, token)
  return true
}

export const getTodo = (id: string, token: string): TodoType => {
  const data = getTodos(token)
  return data[id] ?? false
}

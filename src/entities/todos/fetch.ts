import { fetcher } from '../utils'
import { TodosType, TodoType } from './types'

export const fetchTodos = async (): Promise<TodosType> =>
  await fetcher<undefined, TodosType>('api/todos', 'GET')

export const addTodo = async (todo: TodoType): Promise<TodoType> =>
  await fetcher<TodoType, TodoType>('api/todos', 'POST', todo)

export const updateTodo = async (id: string, todo: TodoType): Promise<string> =>
  await fetcher<TodoType, string>(`api/todos/${id}`, 'PUT', todo)

export const deleteTodo = async (id: string): Promise<string> =>
  await fetcher<TodoType, string>(`api/todos/${id}`, 'DELETE')

'use client'

import { useEffect, useState } from 'react'
import {
  fetchTodos,
  addTodo,
  deleteTodo,
  updateTodo,
} from '@/entities/todos/fetch'
import { TodosType, TodoType } from '@/entities/todos/types'
import List from '@/components/List'
import AddTodo from './AddTodo'

export default function TodoContainer() {
  const [todos, setTodos] = useState<TodosType>({})
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const fetchData = () => {
    fetchTodos()
      .then((res) => {
        setTodos(res)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleOnSave = (value = ''): void => {
    if (value.trim()) {
      addTodo({ id: '', value }).then(() => {
        fetchData()
      })
    }
  }

  const handleOnDelete = (id: string): void => {
    if (id) {
      deleteTodo(id).then(() => {
        fetchData()
      })
    }
  }

  const handleOnUpdate = (todo: TodoType): void => {
    if (todo.id) {
      updateTodo(todo.id, todo).then(() => {
        fetchData()
      })
    }
  }

  return (
    <div className='shadow-xl ring-gray-900/5 rounded-lg bg-white mt-36 w-1/2 mx-auto p-5 h-96'>
      {isLoading && <p>Loading items, please hold on...</p>}
      {!isLoading ? (
        <>
          <AddTodo onSave={handleOnSave} />
          <List
            todos={todos}
            onDelete={handleOnDelete}
            onUpdate={handleOnUpdate}
          />
        </>
      ) : null}
    </div>
  )
}

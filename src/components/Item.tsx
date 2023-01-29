import { useEffect, useState } from 'react'
import { TodoType } from '@/entities/todos/types'
import { CheckIcon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ArrowPathIcon } from '@heroicons/react/24/solid'

interface Props {
  todo: TodoType
  onDelete: (id: string) => void
  onUpdate: (todo: TodoType) => void
}

export default function Item({ todo, onDelete, onUpdate }: Props) {
  const [isUpdate, setIsUpdate] = useState(false)
  const [todoValue, setTodoValue] = useState(todo.value)

  useEffect(() => {
    setTodoValue(todo.value)
  }, [todo.value])

  const handleDelete = () => {
    onDelete(todo.id)
  }

  const handleItemClick = () => {
    setIsUpdate(true)
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTodoValue(e.currentTarget.value)
  }

  const handleOnFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onUpdate({ ...todo, value: todoValue })
    setIsUpdate(false)
  }

  return (
    <li className='list-none m-0 p-0 mt-4'>
      {!isUpdate ? (
        <div className='flex flex-row justify-between w-full'>
          <p>{todo.value}</p>
          <div className="flex flex-flow justify-center w-inherit">
          <button className='cursor-pointer mr-7' onClick={handleItemClick}>
              <ArrowPathIcon className="h-5 w-5 text-blue-500"/>
            </button>
            <button className='cursor-pointer' onClick={handleDelete}>
              <XMarkIcon className="h-5 w-5 text-blue-500"/>
            </button>
          </div>
        </div>
      ) : (
        <form className='m-0 p-0' onSubmit={handleOnFormSubmit}>
          <div className="flex flex-row justify-between m-0 p-0 mt-4">
            <input
              className='w-full'
              value={todoValue}
              onChange={handleChange}
              title='Enter the text to update your todo'
              type="text"
              name="todo"
              id="todo"
            />
            <button className='rounded-sm text-white bg-white'>
              <CheckIcon className="h-5 w-5 text-blue-500 m-2"/>
            </button>
          </div>
        </form>
      )}
    </li>
  )
}

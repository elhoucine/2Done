import { useEffect, useState } from 'react'
import { TodoType } from '@/entities/todos/types'
import { CheckIcon, XMarkIcon, ArrowPathIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

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

  const handleOnCheck = () => {
    onUpdate({ ...todo, done: !todo.done })
  }

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
    <li className="m-0 mt-4 list-none p-0">
      {!isUpdate ? (
        <div className="flex w-full flex-row justify-between bg-gray-50 hover:bg-gray-100 p-4 pt-0 pb-0 rounded-md">
            <p className={todo.done ? 'line-through' : ''}>{todo.value}</p>
          <div className="flex-flow w-inherit flex justify-center">
          <button className="mr-7 cursor-pointer" onClick={handleOnCheck}>
              <CheckCircleIcon className="h-5 w-5 text-blue-500 hover:text-blue-600" />
            </button>
            <button className="mr-7 cursor-pointer" onClick={handleItemClick}>
              <ArrowPathIcon className="h-5 w-5 text-blue-500 hover:text-blue-600" />
            </button>
            <button className="cursor-pointer" onClick={handleDelete}>
              <XMarkIcon className="h-5 w-5 text-blue-500 hover:text-blue-600" />
            </button>
          </div>
        </div>
      ) : (
        <form className="m-0 p-0" onSubmit={handleOnFormSubmit}>
          <div className="m-0 mt-4 flex flex-row justify-between p-0">
            <input
              className="w-full"
              value={todoValue}
              onChange={handleChange}
              title="Enter the text to update your todo"
              type="text"
              name="todo"
              id="todo"
            />
            <button className="rounded-sm bg-white text-white">
              <CheckIcon className="m-2 h-5 w-5 text-blue-500" />
            </button>
          </div>
        </form>
      )}
    </li>
  )
}

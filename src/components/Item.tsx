import { TodoType } from '@/entities/todos/types'
import { useEffect, useState } from 'react'

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

  const handleOnUpdate = () => {
    onUpdate({ ...todo, value: todoValue })
    setIsUpdate(false)
  }

  return (
    <li>
      {!isUpdate ? (
        <>
          <span onClick={handleItemClick}>{todo.value}</span>
          <span onClick={handleDelete}>X</span>
        </>
      ) : (
        <>
          <input
            value={todoValue}
            onChange={handleChange}
            type="text"
            name="todo"
            id="todo"
          />
          <button onClick={handleOnUpdate}>Update</button>
        </>
      )}
    </li>
  )
}

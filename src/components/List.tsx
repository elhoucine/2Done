import { TodosType, TodoType } from '@/entities/todos/types'
import Item from './Item'

interface Props {
  todos: TodosType
  onDelete: (id: string) => void
  onUpdate: (todo: TodoType) => void
}

export default function List({ todos, onDelete, onUpdate }: Props) {
  return (
    <ul className='list-none p-0 m-0'>
      {Object.keys(todos).map((key, index) => {
        return (
          <Item
            todo={todos[key]}
            onDelete={onDelete}
            onUpdate={onUpdate}
            key={index}
          />
        )
      })}
    </ul>
  )
}

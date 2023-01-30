import { useMemo } from 'react'
import { Tab } from '@headlessui/react'
import { TodosType, TodoType } from '@/entities/todos/types'
import { classNames } from '@/entities/utils'
import Item from '../Item/Item'
import { Quote } from '../Quote/Quote'

interface Props {
  todos: TodosType
  onDelete: (id: string) => void
  onUpdate: (todo: TodoType) => void
}

interface CategoriesTypes {
  [key: string]: { label: string; values: TodoType[] }
}

export default function List({ todos, onDelete, onUpdate }: Props) {
  const categorizedTodos: CategoriesTypes = useMemo(() => {
    const categories: CategoriesTypes = {
      all: { label: 'All', values: [] },
      todo: { label: 'Todo', values: [] },
      done: { label: 'Done', values: [] },
    }
    Object.values(todos).forEach((todo) => {
      if (todo.done === true) {
        categories.done.values.push(todo)
      } else if (todo.done === false) {
        categories.todo.values.push(todo)
      }
      categories.all.values.push(todo)
    })
    return categories
  }, [todos])

  const categories = useMemo(() => {
    return Object.keys(categorizedTodos)
  }, [categorizedTodos])

  return (
    <Tab.Group>
      <Tab.List className="mt-10 flex space-x-1 rounded-xl bg-gray-50 p-1">
        {categories.map((category) => (
          <Tab
            key={category}
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5',
                'bg-blue-100 text-gray-500 hover:text-gray-700',
                selected ? 'bg-blue-200 text-gray-700' : 'hover:bg-blue-200',
              )
            }
          >
            {category}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-2">
        {categories.map((category) => {
          return (
            <Tab.Panel key={category}>
              {categorizedTodos[category].values.length > 0 ? (
                <ul className="m-0 list-none p-0">
                  {categorizedTodos[category].values.map((todo) => {
                    return (
                      <Item
                        key={todo.id}
                        todo={todo}
                        onDelete={onDelete}
                        onUpdate={onUpdate}
                      />
                    )
                  })}
                </ul>
              ) : (
                <Quote/>
              )}
            </Tab.Panel>
          )
        })}
      </Tab.Panels>
    </Tab.Group>
  )
}

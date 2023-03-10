import { Button } from '@/components/Button/Button'
import { Input } from '@/components/Input/Input'
import React, { useState } from 'react'

type Props = {
  onSave: (value: string) => void
}

export default function AddTodo({ onSave }: Props) {
  const [value, setValue] = useState('')

  const handleOnTextChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e?.currentTarget?.value)
  }

  const handleOnFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSave(value)
    setValue('')
  }

  return (
    <div className="mt-5">
      <form
        className="flex flex-row "
        name="AddTodoForm"
        onSubmit={handleOnFormSubmit}
      >
        <div className="flex w-full flex-row justify-between">
          <Input
            type="text"
            title="addTodoInput"
            onChange={handleOnTextChange}
            placeholder="What you planning todo?"
            name="addTodo"
            id="addTodo"
            value={value}
          />
          <Button
            className="w-20 rounded-sm bg-blue-500 p-2 text-white"
            type="submit"
          >
            Add
          </Button>
        </div>
      </form>
    </div>
  )
}

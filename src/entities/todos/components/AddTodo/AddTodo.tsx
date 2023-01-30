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
          <input
            type="text"
            className="w-full"
            title="addTodoInput"
            onChange={handleOnTextChange}
            placeholder="What you planning todo?"
            name="addTodo"
            id="addTodo"
            value={value}
          />
          <button
            className="w-20 rounded-sm bg-blue-500 p-2 text-white"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

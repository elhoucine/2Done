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
    <div>
      <h1>Very long header title text to showcase</h1>
      <h1>Very long header title text to showcase</h1>
      <form name='Adding new todo form' onSubmit={handleOnFormSubmit}>
        <input
            type="text"
            title="Enter the text for the new todo"
            onChange={handleOnTextChange}
            placeholder="What you planning todo?"
            name="addTodo"
            id="addTodo"
            value={value}
          />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

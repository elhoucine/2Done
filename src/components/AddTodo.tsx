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
      <form onSubmit={handleOnFormSubmit}>
        <input
          className="border-2"
          type="text"
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

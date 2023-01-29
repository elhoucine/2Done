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
    <div className='mt-5'>
      <form className='flex flex-row ' name='Adding new todo form' onSubmit={handleOnFormSubmit}>
        <div className="flex flex-row justify-between w-full">
          <input
              type="text"
              className='w-full'
              title="Enter the text for the new todo"
              onChange={handleOnTextChange}
              placeholder="What you planning todo?"
              name="addTodo"
              id="addTodo"
              value={value}
            />
          <button className='bg-blue-500 p-2 rounded-sm text-white w-20' type="submit">Add</button>
        </div>
      </form>
    </div>
  )
}

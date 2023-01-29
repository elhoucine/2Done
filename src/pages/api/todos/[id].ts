import { TodoType } from '@/entities/todos/types'
import type { NextApiRequest, NextApiResponse } from 'next'
import { deleteTodo, getTodo, updateTodo } from '../store'
import { isUserAuthenticated } from './utils'

type Data = {
  data: TodoType | string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const token = req.headers.authorization
  if (token && !isUserAuthenticated(token)) {
    res.status(401).json({ data: 'must be logged in!' })
  }

  if (req.method === 'GET') {
    if (req.query.id) {
      const todo = getTodo(req.query.id as string)
      if (todo) {
        res.status(200).json({ data: todo })
      }
    }
  } else if (req.method === 'PUT') {
    if (req.query.id && req.body.data) {
      if (updateTodo(req.query.id as string, req.body.data)) {
        res.status(201).json({ data: 'ok' })
      }
    }
  } else if (req.method === 'DELETE') {
    if (req.query.id) {
      if (deleteTodo(req.query.id as string)) {
        res.status(201).json({ data: 'ok' })
      }
    }
  }
}

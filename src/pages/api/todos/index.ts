import { TodosType } from '@/entities/todos/types'
import type { NextApiRequest, NextApiResponse } from 'next'
import { addTodo, getTodos } from '../store'
import { isUserAuthenticated } from './utils'

type Data = {
  data: TodosType | string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const token = req.headers.authorization

  if (!isUserAuthenticated(token)) {
    res.status(401).json({ data: 'must be logged in!' })
  }

  if (req.method === 'GET') {
    res.status(200).json({ data: getTodos(token as string) })
  } else if (req.method === 'POST') {
    if (req.body.data) {
      if (addTodo(req.body.data, token as string)) {
        res.status(200).json({ data: 'ok' })
      }
    }
  }
}

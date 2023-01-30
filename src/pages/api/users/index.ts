import type { NextApiRequest, NextApiResponse } from 'next'
import { authUser, createUser } from '../store'

type Data = {
  data?: string
  error?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'POST') {
    const { username, password, avatar } = req.body?.data
    const token = createUser(username, password, avatar)
    if (token) {
      res.status(201).json({ data: token })
    } else {
      res.status(500).json({ error: 'Something went wrong!' })
    }
  }
}

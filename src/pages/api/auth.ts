import type { NextApiRequest, NextApiResponse } from 'next'
import { authUser } from './store'

type Data = {
  data?: string
  error?: string
}

// Fake auth implementation, not suitable for production.
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'POST') {
    const { username, password } = req.body?.data
    const token = authUser(username, password)

    if (token) {
      res.status(200).json({ data: token })
    } else {
      res.status(401).json({ error: 'Username or password not correct!' })
    }
  }
}

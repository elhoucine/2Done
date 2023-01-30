import { UserType } from '@/entities/users/types'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getUser } from '../store'
import { isUserAuthenticated } from '../todos/utils'
import { getUsernameFromToken } from '../utils'

type Data = {
  data?: string | UserType
  error?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'GET') {
    const token = req.query.id as string

    if (token && !isUserAuthenticated(token)) {
      res.status(401).json({ data: 'must be logged in!' })
    }

    const user = getUser(getUsernameFromToken(token))
    if (user) {
      res.status(200).json({ data: user })
    } else {
      res.status(500).json({ error: 'Something went wrong!' })
    }
  }
}

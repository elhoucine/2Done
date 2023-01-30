import type { NextApiRequest, NextApiResponse } from 'next'
import { getUser, getUserToken } from '../store'

type Data = {
  data?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'POST') {
    const { data: token } = req.body
    const userToken = getUserToken()
    if (token === userToken) {
      const user = getUser()
      if (user) {
        res.status(200).json({ data: user })
      } else {
        res.status(400).json({ data: 'Bad request!' })
      }
    } else {
      res.status(401).json({ data: 'Unauthorized access!' })
    }
  }
}

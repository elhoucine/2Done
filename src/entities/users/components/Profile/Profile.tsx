'use client'

import { useContext, useMemo } from 'react'
import UserContext from '../../context'

export const Profile = () => {
  const { isLoggedIn, username, avatar, onLogout } = useContext(UserContext)

  if (!isLoggedIn) {
    return null
  }

  return (
    <figure className="flex flex-col items-center justify-center">
      <img
        className="mx-auto h-20 w-20 rounded-full"
        src={avatar}
        alt=""
        width="384"
        height="512"
      />
      <p>{username}</p>
      <a className="cursor-pointer" onClick={onLogout}>
        logout
      </a>
    </figure>
  )
}

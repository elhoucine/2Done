import ShortUniqueId from 'short-unique-id'

export const generateToken = (username: string): string => {
  const uid = new ShortUniqueId({ length: 10 })()
  return username + '-' + uid
}

export const getUsernameFromToken = (token = ''): string => {
  return token.split('-')[0]
}

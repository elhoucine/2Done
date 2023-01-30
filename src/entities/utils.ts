'use client'

export const fetcher = async <T, T2>(
  url: string,
  method = 'GET',
  payload?: T,
): Promise<T2> => {
  const res = await fetch(url, {
    method,
    ...(payload && { body: JSON.stringify({ data: payload }) }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token') ?? '',
    },
  })
  const { data } = await res.json()
  return data
}

export const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ')
}
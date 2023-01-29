import Login from '@/components/Login'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='max-w-none prose bg-gradient-to-r from-pink-500 to-yellow-500'>
        {/* <Login /> */}
        {children}
      </body>
    </html>
  )
}

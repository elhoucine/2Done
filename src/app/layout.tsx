import Login from '@/entities/users/components/Login/Login'
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
      <body className="prose max-w-none bg-gradient-to-r from-pink-500 to-yellow-500">
        {children}
      </body>
    </html>
  )
}

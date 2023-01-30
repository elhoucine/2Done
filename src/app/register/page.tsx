import { UserContextWrapper } from '@/entities/users/components/ContextWrapper'
import Register from '@/entities/users/components/Register/Register'

export default function Home() {
  return (
    <div className="mx-auto mt-36 h-auto w-1/2 overflow-x-scroll rounded-lg bg-white p-5 shadow-xl ring-gray-900/5">
      <UserContextWrapper>
        <Register/>
      </UserContextWrapper>
    </div>
  )
}

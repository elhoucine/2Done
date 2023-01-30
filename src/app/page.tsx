import App from '@/app/components/App'
import { UserContextWrapper } from '@/entities/users/components/ContextWrapper'

export default function Home() {
  return (
    <div className="mx-auto mt-36 h-96 w-1/2 overflow-x-scroll rounded-lg bg-white p-5 shadow-xl ring-gray-900/5">
      <UserContextWrapper>
        <App />
      </UserContextWrapper>
    </div>
  )
}

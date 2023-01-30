import App from '@/app/components/App'
import { UserContextWrapper } from '@/entities/users/components/ContextWrapper'
import { Profile } from '@/entities/users/components/Profile/Profile'

export default function Home() {
  return (
    <>
      <UserContextWrapper>
        <Profile />
        <div className="mx-auto mt-10 h-auto w-1/2 overflow-x-scroll rounded-lg bg-white p-5 shadow-xl ring-gray-900/5">
          <App />
        </div>
      </UserContextWrapper>
    </>
  )
}

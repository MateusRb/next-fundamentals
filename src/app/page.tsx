import { Suspense } from 'react'
import { GithubProfile } from '@/app/components/github-profile'

export default async function Home() {
  return (
    <div>
      <h1>Home!</h1>

      <Suspense>
        {/* @ts-expect-error Server Component */}
        <GithubProfile />
      </Suspense>
    </div>
  )
}

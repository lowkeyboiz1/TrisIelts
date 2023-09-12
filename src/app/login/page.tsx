'use client'

import DefaultLayout from '@/components/Layout/DefaultLayout'
import { Button } from '@nextui-org/react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

function Login() {
  const { data, status } = useSession()

  const router = useRouter()

  console.log(data)

  if (status === 'loading') {
    return <Button color='primary' isLoading />
  }

  if (status === 'authenticated') {
    router.push('/')
  }
  return (
    <DefaultLayout>
      <div className='flex-center w-full h-[100vh]'>
        <div
          className='text-white bg-red-500 rounded-2xl p-4 cursor-pointer'
          onClick={() => signIn('google')}
        >
          Sign in With Google
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Login

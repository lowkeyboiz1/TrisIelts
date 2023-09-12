'use client'

import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

function AuthLink() {
  const { status } = useSession()

  return (
    <>
      {status === 'authenticated' ? (
        <span onClick={() => signOut()} className='cursor-pointer'>
          Log out
        </span>
      ) : (
        <Link href={'/login'} className=''>
          Log in
        </Link>
      )}
    </>
  )
}

export default AuthLink

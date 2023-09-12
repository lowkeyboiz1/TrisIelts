'use client'

import { EyeFilledIcon, EyeSlashFilledIcon } from '@/icons'
import { Input } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { signIn, useSession } from 'next-auth/react'

function AdminLogin() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [errorLogin, setErrorLogin] = useState(false)

  const { data, status } = useSession()

  const router = useRouter()

  const toggleVisibility = () => setIsVisible(!isVisible)

  const handleSubmit = (e: any) => {
    e.preventDefault() // Prevent the default form submission behavior

    if (password === 'admin123' && name === 'admin123') {
      router.push('/dashboard')
    } else {
      setErrorLogin(true)
    }
  }

  return (
    <div className='flex-center h-[100vh] px-2 md:px-0'>
      <div className='bg-white rounded-[8px] text-[var(--primary-black)] w-[360px] p-2 md:px-6 md:py-4 flex flex-col gap-6'>
        <h1 className='text-center text-2xl font-bold'>Tris Ielst</h1>
        <form onSubmit={handleSubmit}>
          <div className='control-input flex flex-col gap-1 mt-2'>
            <label>User name</label>
            <Input
              type='text'
              variant='bordered'
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                setErrorLogin(false)
              }}
              placeholder='Enter your user name'
            />
            <p className='text-[#FF0E0E] h-[20px]'>
              {errorLogin && 'Your user name or password invalid'}
            </p>
          </div>
          <div className='control-input flex flex-col gap-1 mt-2'>
            <label>Password</label>
            <Input
              variant='bordered'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setErrorLogin(false)
              }}
              placeholder='Enter your password'
              endContent={
                <button
                  className='focus:outline-none'
                  type='button'
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon props='text-2xl text-default-400 pointer-events-none' />
                  ) : (
                    <EyeFilledIcon props='text-2xl text-default-400 pointer-events-none' />
                  )}
                </button>
              }
              type={isVisible ? 'text' : 'password'}
              className='max-w-xs'
            />
            <p className='text-[#FF0E0E] h-[20px]'>
              {errorLogin && 'Your user name or password invalid'}
            </p>
          </div>
          <button
            type='submit'
            className='w-full rounded-[8px] py-2 bg-black text-white text-xl font-bold mt-4 mb-2 hover:bg-opacity-90'
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin

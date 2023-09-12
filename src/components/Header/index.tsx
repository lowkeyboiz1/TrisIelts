import Link from 'next/link'
import Nav from '../Nav'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { HambergerMenu } from 'iconsax-react'
import { useSession } from 'next-auth/react'
import AuthLink from '../AuthLink'

function Header() {
  return (
    <header className='bg-bgHeader shadow-[4px_4px_16px_0_rgba(0,18,38,0.08)] fixed left-0 right-0 z-10 w-full'>
      <div className='flex max-w-[90%] lg:max-w-[80%] w-full mx-auto justify-between h-[60px] items-center'>
        <Link href='/'>
          <div className='font-bold text-foreground'>IELTS TRIS</div>
        </Link>
        <div className='hidden lg:block'>
          <div className='flex gap-6 items-center justify-between'>
            <Nav />
            <div className='flex gap-6 items-center'>
              <ThemeSwitcher />
              <AuthLink />
            </div>
          </div>
        </div>
        <div className='mobile flex lg:hidden'>
          <HambergerMenu size={40} className='cursor-pointer' />
        </div>
      </div>
    </header>
  )
}

export default Header

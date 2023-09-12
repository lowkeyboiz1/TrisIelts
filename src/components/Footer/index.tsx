'use client'

import { Facebook, Youtube } from 'iconsax-react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='bg-bgHeader w-full h-[60px] flex items-center py-[50px] gap-[6px] md:gap-0'>
      <div className=' text-text text-[16px] flex flex-col md:flex-row items-center justify-between w-full max-w-[90%] lg:max-w-[80%] mx-auto'>
        <div className=''>© English with Tris</div>
        <div className='socials flex gap-4'>
          <Link href={'/'} className='cursor-pointer'>
            <Youtube size={32} variant='Bold' />
          </Link>
          <Link href={'https://www.facebook.com/tridang279'} className='cursor-pointer'>
            <Facebook size={32} variant='Bold' />
          </Link>
        </div>
        <div className='flex items-center gap-6'>
          <div className=''>Terms of Use</div>
          <div className=''>Privacy Policy</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

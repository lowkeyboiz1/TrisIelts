import DefaultLayout from '@/components/Layout/DefaultLayout'
import Link from 'next/link'
import Image from 'next/image'
import InputSearch from '@/components/InputSearch'
import { Pagination } from '@nextui-org/react'
import PaginationApp from '@/components/Pagination'

export default function Page() {
  const arrFake = ['1', '2', '3', '4', '5', '6']
  return (
    <DefaultLayout>
      <div className=' text-center px-4 lg:px-10 py-10 text-text pt-[60px]'>
        <h1 className='text-3xl font-bold lg:text-[60px] mb-8 pt-4'>
          Level Up Your English Skills
        </h1>
        <p className='text-[18px] lg:text-[26px] lg:max-w-[80%] mx-auto text-textDesc'>
          Whether you aspire to excel in foundational English skills, master language
          basics, or develop strong communication abilities, our introductory course is
          designed for you.
        </p>
      </div>
      <div className='cat-mini w-full mt-[40px]'>
        <div className='max-w-[90%] lg:max-w-[80%] w-full mx-auto flex flex-col md:flex-row items-center gap-2 md:gap-10'>
          <Link
            href={'/'}
            className='border-[2px] border-border mt-4 lg:mt-0 p-2 rounded-[8px] w-full h-[208px] mx-auto md:mx-0 group '
          >
            <div className='relative w-full h-full border-[2px] border-border1'>
              <Image
                src='/charts.png'
                alt=''
                fill={true}
                objectFit='cover'
                className='opacity-50'
              />
              <p className='absolute cursor-pointer font-bold w-[60%] text-center py-2 border-[1px] border-text text-text rounded-[8px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-[#a679ff]'>
                Writing Task 1
              </p>
            </div>
          </Link>
          <Link
            href={'/'}
            className='border-[2px] border-border mt-4 lg:mt-0 p-2 rounded-[8px] w-full h-[208px] mx-auto md:mx-0 group '
          >
            <div className='relative w-full h-full border-[2px] border-border1'>
              <Image
                src='/charts.png'
                alt=''
                fill={true}
                objectFit='cover'
                className='opacity-50'
              />
              <p className='absolute cursor-pointer font-bold w-[60%] text-center py-2 border-[1px] border-text text-text rounded-[8px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-[#a679ff]'>
                Writing Task 2
              </p>
            </div>
          </Link>
          <Link
            href={'/'}
            className='border-[2px] border-border mt-4 lg:mt-0 p-2 rounded-[8px] w-full h-[208px] mx-auto md:mx-0 group '
          >
            <div className='relative w-full h-full border-[2px] border-border1'>
              <Image
                src='/charts.png'
                alt=''
                fill={true}
                objectFit='cover'
                className='opacity-50'
              />
              <p className='absolute cursor-pointer font-bold w-[60%] text-center py-2 border-[1px] border-text text-text rounded-[8px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-[#a679ff]'>
                Easy Essays
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className='flex flex-col md:flex-row mx-auto max-w-[90%] lg:max-w-[80%] mt-[30px] justify-between'>
        <div className='left w-full md:w-[70%] text-white flex md:flex-col gap-6 flex-wrap'>
          {arrFake.map((a, index) => (
            <div
              key={index}
              className='item flex flex-col md:flex-row p-4 rounded-[8px] overflow-hidden border-[1px] border-border1 text-text'
            >
              <div className='w-full h-[200px] md:w-[280px] md:h-[300px] relative rounded-[12px] overflow-hidden flex flex-shrink-0'>
                <Image src={'/vocanal.png'} fill={true} alt='' className='' />
              </div>
              <div className='info-blog px-4 flex flex-col justify-between'>
                <div className=''>
                  <div className='time-public mt-2 md:mt-0 text-[14px] '>
                    05 JULY 2023
                  </div>
                  <Link href='/'>
                    <h3
                      style={{ width: 'max-content' }}
                      className='title-blog my-3 text-[20px] font-bold cursor-pointer hover:text-textHover'
                    >
                      Volcano
                    </h3>
                  </Link>
                  <p className='overflow-hidden line-clamp-5 text-[16px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
                    quisquam inventore incidunt ea autem modi, consequatur odio tempore
                    corrupti, vel laborum necessitatibus quasi laboriosam praesentium
                    soluta perferendis totam ad temporibus. Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Dolores cum doloremque nulla repellendus
                    debitis, voluptas porro eveniet excepturi saepe sequi, voluptates
                    mollitia dolorum natus maxime vitae. Laborum dolores ipsa libero?
                  </p>
                </div>
                {/* dỗ dữ liệu xuống */}
                <Link href={'/'} className='flex justify-end mt-4 md:mt-0'>
                  <p
                    style={{ width: 'max-content' }}
                    className='text-right cursor-pointer hover:text-textHover'
                  >
                    Writing Task 1
                  </p>
                </Link>
              </div>
            </div>
          ))}

          <div className='pagination flex items-center justify-center w-full'>
            <PaginationApp />
          </div>
        </div>
        <div className='right w-[28%]'>
          <div className='w-ful'>
            <InputSearch />
          </div>
          <div className=''></div>
        </div>
      </div>
    </DefaultLayout>
  )
}

'use client'

import { Pagination } from '@nextui-org/react'
import { useState } from 'react'

function PaginationApp() {
  const [currentPage, setCurrentPage] = useState<number>(1)

  console.log(currentPage)

  return (
    <Pagination
      className='gap-2'
      classNames={{ item: 'data-[hover=true]:bg-bgHeader' }}
      showControls
      radius='full'
      total={4}
      onChange={(page: number) => setCurrentPage(page)}
      initialPage={1}
      variant='light'
    />
  )
}

export default PaginationApp

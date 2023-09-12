'use client'
import { Button, Input } from '@nextui-org/react'
import { CloseCircle, SearchNormal1 } from 'iconsax-react'
import { useRef, useState } from 'react'

function InputSearch() {
  const [searchValue, setSearchValue] = useState('') // State to store the search input value

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value)
  }

  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleClear = () => {
    setSearchValue('')
    inputRef?.current?.focus()
  }

  const handleSubmit = () => {
    console.log(searchValue)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div className='w-full flex'>
      <Input
        size='lg'
        type='search'
        radius='none'
        variant='bordered'
        ref={inputRef}
        value={searchValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder='Search'
        className='w-full ease-in-out duration-300 bg-transparent file:text-text'
        classNames={{
          inputWrapper:
            'rounded-s-lg group-data-[focus=true]:border-bgHeader border-bgHeader data-[hover=true]:border-bgHeader',
          clearButton: 'cursor-pointer',
        }}
      />
      <Button size='lg' radius='none' className='rounded-e-lg'>
        Search
      </Button>
    </div>
  )
}

export default InputSearch

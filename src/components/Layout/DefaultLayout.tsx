import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className='bg-background selection:bg-selection'>{children}</div>
      <Footer />
    </>
  )
}

export default DefaultLayout

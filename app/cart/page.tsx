import Cart from '@/components/Cart'
import React from 'react'

function page() {
  return (
    <div className='flex flex-col gap-2 justify-center items-center h-screen'>
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
    </div>
  )
}

export default page
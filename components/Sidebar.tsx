import Link from 'next/link'
import React from 'react'

function Sidebar() {
  return (
    <div className=' fixed right-0 '>
        <aside className='h-screen flex flex-col basecolor text-2xl text-white p-5'>
            <div className='my-10'>
                <h1>Navigation</h1>
            </div>
            <div className='flex flex-col justify-between h-full'>
            <div className='flex flex-col'>
            <Link href="" >Home</Link>
            <Link href="" >Cart</Link>
            <Link href="" >Profile</Link>
            </div>

            <div>
            <Link href="" >Logout</Link>
            </div>
            </div>
        </aside>
    </div>
  )
}

export default Sidebar
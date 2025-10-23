'use client'

import React from 'react'
import Image from 'next/image'
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

function Cart() {
  return (
    <div className='flex justify-center bg-gray-300 w-fit p-5 items-center rounded-2xl'>
        <div className='w-30 h-30 mx-2 relative'>
            <Image 
            src="/image/menu.jpg"
            alt="fahfu"
            fill
            className='object-cover rounded-sm'
            />
        </div>

        <div className='flex text-2xl font-bold w-90'>
            <h1>Ayam special mentega + nasi padang sambal balado</h1>
        </div>

        <div className='flex w-80 h-5 justify-center items-center text-[20px]'>
            <div className='flex justify-center items-center w-5 basecolor'>-</div>
            <div className='px-3 bg-gray-400'>1</div>
            <div className='flex justify-center items-center w-5 basecolor'>+</div>
        </div>

        <div>
          <span>Rp.<span>1.000.000</span></span>
        </div>

        <div className='text-white bg-red-600 text-2xl rounded-sm p-1 mx-5'>
          <MdOutlineRemoveShoppingCart />
        </div>
    </div>
  )
}

export default Cart
"use client"
import Image from 'next/image'
import React from 'react'
import Buybttn from './Buybttn'

function Card() {
  return (
    <div className='flex flex-col bg-white text-black rounded-xl items-center md:w-[180px] w-[100px] overflow-hidden drop-shadow-xl'>
      <div className='relative md:w-[150px] md:h-[150px] w-[110px] h-[110px] flex items-center justify-center overflow-hidden rounded-sm m-3'>
        <Image
          src="/image/menu.jpg"
          alt="menu"
          fill
          className='object-cover'
        />
      </div>
      <div>
        <div className='m-2'>
        <h1 className='md:text-sm text-[10px] font-bold leading-snug px-1'>Mie bakso level 3 ribu panas</h1>
        <p className='md:text-sm text-[10px] px-1'>RP:10.000</p>
        <Buybttn />
        </div>
      </div>
    </div>
  )
}

export default Card
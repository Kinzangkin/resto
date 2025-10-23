'use client'

import React from 'react'
import { FcGoogle } from 'react-icons/fc'

function Login() {
  return (
    <div className='flex'>
      <div className='w-[50%] basecolor h-screen'>
      </div>

      <div className='flex flex-col items-center justify-center w-[50%]'>
        <h1 className='text-7xl text-basecolor font-bold mb-30'>Welcome</h1>
        <div className='flex flex-col items-center'>
          <input type="text" placeholder='email' className=' border-green-600 border-2 rounded-2xl px-10 py-3 my-3 text-black outline-none' />
          <input type="text" placeholder='password' className='border-green-600 border-2 rounded-2xl px-10 py-3 my-3 text-black outline-none' />
          <input type="button" value="Login" className='basecolor rounded-2xl px-7 py-2 my-3 cursor-pointer w-fit text-white outline-none' />
        </div>

        <h1>--OR--</h1>

        <div className='flex items-center flex-col'>
          <div className='flex justify-center items-center border-2 py-1 px-3 rounded-full border-green-500 w-fit mt-5 cursor-pointer'>
            <FcGoogle />
            <div className='mx-3'>
              <span className='text-cyan-600'>G</span>
              <span className='text-red-600'>o</span>
              <span className='text-yellow-500'>o</span>
              <span className='text-cyan-600'>g</span>
              <span className='text-green-600'>l</span>
              <span className='text-red-600'>e</span>
            </div>
          </div>
          <p className='mt-5'>Dont have account? <span className='text-blue-600 cursor-pointer'>register now</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login
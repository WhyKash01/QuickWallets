import React from 'react'
import SignInContent from './SignInContent'
import Link from "next/link"
const page = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-emerald-300 flex justify-center items-center'>
        <div className='absolute top-6 left-5'>
        <Link className='px-5 py-2 rounded-md  bg-zinc-900 shadow-zinc-700 shadow-sm text-white' href={"/"}>Home</Link>
       </div>
        <div className='w-[50vw] flex justify-center rounded-lg shadow-lg shadow-emerald-600 bg-white '>
            <SignInContent/>
        </div>
    </div>
  )
}

export default page
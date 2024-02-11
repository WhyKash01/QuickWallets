"use client"
import React from 'react'
import Amount from './Amount';
import { useSearchParams } from 'next/navigation';
import Link from "next/link"
const page = () => {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    const username = searchParams.get('username')
  return (
    <div className='w-[100vw] flex justify-center items-center h-[100vh] bg-zinc-200 '>
      <div className='absolute top-6 left-5'>
        <Link className='px-5 py-2 rounded-md  bg-zinc-900 shadow-zinc-700 shadow-sm text-white' href={"/"}>Home</Link>
       </div>
        <div className='w-[35vw] bg-white rounded-lg pb-10 pt-16'>
            <h1 className='text-4xl mb-10 text-center font-bold'>Send Money</h1>
            <div className='flex mx-20  items-center'>
                <div className='w-10 h-10 bg-emerald-400 rounded-full flex justify-center items-center text-2xl font-bold'>{username[0]}</div>
                <h2 className='text-2xl font-bold ml-5'>{username}</h2>
            </div>
            <Amount id={id}/>
        </div>
    </div>
  )
}

export default page
'use client'
import React, { useState } from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='bg-emerald-500 text-xl font-medium px-10 py-3 text-white flex justify-between'>
        <h2>Payment site</h2>
        <div className='items-center flex gap-2'>
            <div className='w-8 h-8 bg-white rounded-full text-zinc-600 flex justify-center items-center'>U</div>
            <h2 onClick={()=>{
          console.log(localStorage.getItem("token"));
          localStorage.removeItem("token")
        }} className='mr-5'>user</h2>
        <Link href={"signup"}>
            {"logout"}
        </Link></div>
    </div>
  )
}

export default Header
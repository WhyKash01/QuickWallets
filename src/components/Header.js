import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='bg-emerald-400 text-xl font-medium px-10 py-3 text-white flex justify-between'>
        <h2>Payment site</h2>
        <div className='items-center flex gap-2'>
            <div className='w-8 h-8 bg-white rounded-full text-zinc-600 flex justify-center items-center'>U</div>
            <h2 className='mr-5'>User</h2>
        <Link href={'signIn'}>
            Login
        </Link></div>
    </div>
  )
}

export default Header
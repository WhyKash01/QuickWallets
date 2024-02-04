import React from 'react'
import Link from 'next/link'
const User = ({username, logo}) => {
    
  return (
    <div className='mt-2 flex items-center justify-between'>
        <div className='flex items-center'>
            <div className='w-9 h-9 bg-emerald-400 rounded-full flex justify-center items-center text-xl font-semibold'>{logo}</div>
            <h2 className='text-xl font-semibold ml-2'>{username}</h2>
        </div>
        <Link className='bg-black text-white px-5 py-2 rounded-md' href={'MoneyTransfer'}>Send Money</Link>
    </div>
  )
}

export default User
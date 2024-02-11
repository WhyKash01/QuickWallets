import React from 'react'
import Link from 'next/link'
const User = ({user}) => {
    
  return (
    <div className='mt-2 flex items-center justify-between'>
        <div className='flex items-center'>
            <div className='w-9 h-9 bg-emerald-400 rounded-full flex justify-center items-center text-xl font-semibold'>{user.firstName[0]}</div>
            <h2 className='text-xl font-semibold ml-2'>{user.firstName+" "+user.lastName}</h2>
        </div>
        <Link className='bg-black text-white px-5 py-2 rounded-md' href={'MoneyTransfer?id='+user._id+"&username="+user.firstName}>Send Money</Link>
    </div>
  )
}

export default User
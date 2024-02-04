import React from 'react'
import Amount from './Amount';

const page = () => {
    let username = "Yash Kumar Singh";
    let logo = "Y";
  return (
    <div className='w-[100vw] flex justify-center items-center h-[100vh] bg-zinc-200 '>
        <div className='w-[35vw] bg-white rounded-lg pb-10 pt-16'>
            <h1 className='text-4xl mb-10 text-center font-bold'>Send Money</h1>
            <div className='flex mx-20  items-center'>
                <div className='w-10 h-10 bg-emerald-400 rounded-full flex justify-center items-center text-2xl font-bold'>{logo}</div>
                <h2 className='text-2xl font-bold ml-5'>{username}</h2>
            </div>
            <Amount/>
            
        </div>
    </div>
  )
}

export default page
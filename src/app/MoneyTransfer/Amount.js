import React from 'react'

const Amount = () => {
  return (
    <div className=''>
        <h3 className='mx-20 mt-5 text-xl'>Amount (In Rs.)</h3>
        <div className='mx-20 mt-2'>
        <input type="text" className='border-2 px-5 py-2 rounded-md w-[100%]' placeholder='Enter Amount' />
        <button className='rounded-md font-semibold text-lg w-[100%] bg-emerald-400 my-5 py-2'>Initiate Payment</button>
        </div>
        
    </div>
  )
}

export default Amount
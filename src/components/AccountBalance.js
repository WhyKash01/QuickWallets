import React from 'react'

const AccountBalance = () => {
    let balance= 10099;
  return (
    <div className='ml-10 mt-5 text-xl font-bold'>Your balance <span className='font-semibold text-lg ml-1'>Rs. {balance}</span></div>
  )
}

export default AccountBalance
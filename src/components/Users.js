import React from 'react'
import User from './User'

const Users = () => {
  return (
    <div>
        <h3 className='ml-10 mt-5 text-xl font-bold'>Users</h3>
        <div className='mx-10'>
        <input type="text" placeholder='Find users' className='w-[100%] px-5 py-2 rounded-md my-2 border-2 ' />
        <User logo={"Y"} username={"Yash Kumar Singh"}/>
        <User logo={"A"} username={"Abhinav Sharma"}/>
        </div>

    </div>

  )
}

export default Users
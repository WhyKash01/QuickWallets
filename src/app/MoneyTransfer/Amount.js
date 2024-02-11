import React, { useState } from 'react'
import axios from 'axios'
const Amount = ({id}) => {
  const [amount, setAmount]= useState(0);
  return (
    <div className=''>
        <h3 className='mx-20 mt-5 text-xl'>Amount (In Rs.)</h3>
        <div className='mx-20 mt-2'>
        <input onChange={(e)=>{
          setAmount(e.target.value);
        }} type="number" className='border-2 px-5 py-2 rounded-md w-[100%]' placeholder='Enter Amount' />
        <button onClick={()=>{
          axios.post("http://localhost:3000/api/v1/account/transfer",{
            to: id,
            amount
          },{
            headers: {
              Authorization: "Bearer "+localStorage.getItem("token")
            }
          })
        }} className='rounded-md font-semibold text-lg w-[100%] bg-emerald-400 my-5 py-2'>Initiate Payment</button>
        </div>
        
    </div>
  )
}

export default Amount
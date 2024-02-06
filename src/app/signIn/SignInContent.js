"use client"
import axios from "axios"
import React, { useState } from "react";
import InputField from "./InputField";
import Link from "next/link"
const SignInContent = () => {
  const [userName, setuserName]= useState("")
  const [password, setpassword]= useState("")
  return (
    <div className="my-5">
      <h1 className="text-3xl text-center  font-bold"> Sign In</h1>
      <h3 className="my-2 text-zinc-500 text-lg  text-center">
        Enter your information to Sign In your account{" "}
      </h3>
      <InputField onChange={(e)=>{
        setuserName(e.target.value)
      }} title={"Email"} placeholder={"xyz@gmail.com"} />
      <InputField onChange={(e)=>{
        setpassword(e.target.value)
      }} title={"Password"} placeholder={"123456"} />
      <button type="submit" onClick={()=>{
        axios.post("http://localhost:3000/api/v1/user/signin",
        {
          username: userName,
          password
        })}} className="bg-black mt-5 py-2 rounded-md text-white w-[100%] ">
        Sign In
      </button>
      <h3 className="mt-3 text-zinc-500 text-lg  text-center">Don't have account? <Link className="underline ml-1" href={"signup"}>Sign Up</Link></h3>
    </div>
  );
};

export default SignInContent;

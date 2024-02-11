"use client"
import React, { useState } from "react";
import InputField from "./InputField";
import Link from "next/link"
import  axios  from "axios";
const SignInContent = () => {
  const [firstName, setfirstName]= useState("")
  const [LastName, setLastName]= useState("")
  const [userName, setuserName]= useState("")
  const [password, setpassword]= useState("")
  return (
    <div className="my-5">
      <h1 className="text-3xl text-center  font-bold"> Sign Up</h1>
      <h3 className="my-2 text-zinc-500 text-lg  text-center">
        Enter your information to Sign Up your account{" "}
      </h3>
      <InputField onChange={(e)=>{
        setfirstName(e.target.value)
      }} title={"First Name"} placeholder={"John"} />
      <InputField onChange={(e)=>{
        setLastName(e.target.value)
      }} title={"Last Name"} placeholder={"Doe"} />
      <InputField onChange={(e)=>{
        setuserName(e.target.value)
      }} title={"Email"} placeholder={"xyz@gmail.com"} />
      <InputField onChange={(e)=>{
        setpassword(e.target.value)
      }} title={"Password"} placeholder={"123456"} />
      <button type="submit" onClick={async()=>{
        const response=await axios.post("http://localhost:3000/api/v1/user/signup",
        {
          username: userName,
          firstName,
          lastName: LastName,
          password
        })
        localStorage.setItem("token", response.data.token);
      }} className="bg-black mt-5 py-2 rounded-md text-white w-[100%] ">
        Sign In
      </button>
      <h3 className="mt-3 text-zinc-500 text-lg  text-center">Already have an accout? <Link className="underline ml-1" href={"signIn"}>Login</Link></h3>
    </div>
  );
};

export default SignInContent;

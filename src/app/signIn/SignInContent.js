import React from "react";
import InputField from "./InputField";
import Link from "next/link"
const SignInContent = () => {
  return (
    <div className="my-5">
      <h1 className="text-3xl text-center  font-bold"> Sign In</h1>
      <h3 className="my-2 text-zinc-500 text-lg  text-center">
        Enter your information to Sign In your account{" "}
      </h3>
      <InputField title={"Email"} placeholder={"xyz@gmail.com"} />
      <InputField title={"Password"} placeholder={"123456"} />
      <button type="submit" className="bg-black mt-5 py-2 rounded-md text-white w-[100%] ">
        Sign In
      </button>
      <h3 className="mt-3 text-zinc-500 text-lg  text-center">Don't have account? <Link className="underline ml-1" href={"signup"}>Sign Up</Link></h3>
    </div>
  );
};

export default SignInContent;

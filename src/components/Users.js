"use client";
import React, { useEffect, useState } from "react";
import User from "./User";
import axios from "axios";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter).then((response) => {
      setUsers(response.data.user);
      console.log(users)
    });
  
  }, [filter])
  
 
  console.log(users);
  return (
    <div>
      <h3 className="ml-10 mt-5 text-xl font-bold">
        Users
      </h3>
      <div className="mx-10">
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          placeholder="Find users"
          className="w-[100%] px-5 py-2 rounded-md my-2 border-2 "
        />
        <div className="">
          {users.map((t)=>{
            return <h1>{<User user={t} />}</h1>
          })}
        </div>
      </div>
    </div>
  );
};

export default Users;

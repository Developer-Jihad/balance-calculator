import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "./User";
import './Users.css'

export default function Users() {
  const users = useLoaderData();
  console.log(users);
  return (
    <>
      <div className="users">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}

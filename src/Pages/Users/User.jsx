import React from "react";
import "./User.css";
import { Link } from "react-router-dom";

export default function User({
  user: {
    id,
    name,
    email,
    website,
    company: { name: companyName },
  },
}) {
  return (
    <div className="user">
      <h3>{companyName}</h3>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{website}</p>
      <Link to={`/users/${id}`}><button>User Details</button></Link>
    </div>
  );
}

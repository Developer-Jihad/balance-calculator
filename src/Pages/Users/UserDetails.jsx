import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function UserDetails() {
  const navigate = useNavigate();
  const user = useLoaderData();
  const {
    name,
    email,
    website,
    company: { name: companyName },
  } = user;
  return (
    <>
      <div className="user">
        <h3>{companyName}</h3>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{website}</p>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </>
  );
}

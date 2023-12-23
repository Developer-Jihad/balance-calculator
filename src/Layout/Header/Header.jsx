import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <div>
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contacts</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </div>
  );
}

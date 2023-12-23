import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
  };

  const handleBack = () => {
    navigate(-1);
  };
  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <>
      <div>Login</div>

      <div className="login-form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Sign In</button>
        </form>
      </div>

      <button onClick={handleBack}>Go Back</button>
      <button onClick={handleGoHome}>Home</button>
    </>
  );
}

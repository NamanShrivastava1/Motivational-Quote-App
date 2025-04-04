import React, { useState } from "react";

const Register = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Registered:", { name, email, password });
    setEmail("");
    setName("");
    setPassword("");
  };

  return (
    <div>
      <form
        className="register-form"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;

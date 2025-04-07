import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8090/login",
        loginData
      );
      console.log("Login success:", response.data);
      setUser(response.data);
      navigate("/");
      alert("Login successful!");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed! Check email or password.");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form className="register-form" onSubmit={submitHandler}>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;

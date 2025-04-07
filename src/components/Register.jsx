import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Register = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();

    const user = {
      name: name,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post("http://localhost:8090/signup", user);
      console.log("User registered:", response.data);
      alert("User registered successfully!");

      setName("");
      setEmail("");
      setPassword("");
      navigate("/login");
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Failed to register user");
    }
  };

  return (
    <div>
      <form className="register-form" onSubmit={submitHandler}>
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <button type="submit">Register</button>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;

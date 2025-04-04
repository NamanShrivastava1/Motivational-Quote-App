import React from "react";

const Login = ({ email, setEmail, password, setPassword }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Registered:", { email, password });
    setEmail("");
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
        <h1>Login</h1>
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
        <button type="submit">Login</button>
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;

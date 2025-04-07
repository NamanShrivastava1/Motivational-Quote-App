import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Mood from "./components/Mood";
import Happy from "./components/Happy";
import Sad from "./components/Sad";
import Tired from "./components/Tired";
import Motivated from "./components/Motivated";
import Error from "./components/Error";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <Register
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/mood" element={<Mood />} />
        <Route path="/mood/happy" element={<Happy />} />
        <Route path="/mood/sad" element={<Sad />} />
        <Route path="/mood/tired" element={<Tired />} />
        <Route path="/mood/motivated" element={<Motivated />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import Mood from "../components/Mood";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleRegisterRedirect = () => {
    navigate("/register");
  };
  const handleMoodRedirect = () => {
    navigate("/mood");
  };

  return (
    <div className="home">
      <Navbar />
      <div className="home-content">
        {user ? (
          <div className="welcome-message">
            <h2>Welcome, {user.name}!</h2>
            <h3>Thank You for Registration</h3>
            <button onClick={handleMoodRedirect}>Please Select Mood 😊</button>
          </div>
        ) : (
          <>
            <h2>Welcome, Guest!</h2>
            <button onClick={handleRegisterRedirect}>Register</button>
            <h3>for Motivational Quote</h3>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";

const Mood = () => {
  return (
    <div className="mood-container">
      <h1>How are you feeling today?</h1>
      <div className="mood-options">
        <Link to="/mood/happy">
          <button className="mood-button-1">Happy</button>
        </Link>
        <Link to="/mood/sad">
          <button className="mood-button-2">Sad</button>
        </Link>
        <Link to="/mood/motivated">
          <button className="mood-button-3">Motivated</button>
        </Link>
        <Link to="/mood/tired">
          <button className="mood-button-4">Tired</button>
        </Link>
      </div>
      <div className="mood-message">
        <h2>Your selected mood will help us provide better quotes!</h2>
      </div>
    </div>
  );
};

export default Mood;

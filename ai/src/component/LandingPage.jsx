import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css"; // custom styling

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/chat");
  };

  return (
    <div className="landing-page">
      <div className="landing-box">
        <img src="/bot-icon.jpeg" alt="AI Bot" className="landing-img" />
        <h1>AI chatbot who really helps</h1>
        <p>Max is the most friendly and fast chatbot ever made on internet</p>
        <button onClick={handleStart}>Get Started</button>
      </div>
    </div>
  );
};

export default LandingPage;

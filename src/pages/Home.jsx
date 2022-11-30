import React from "react";
import { Link, useParams } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="hero-text">
        <h2 className="hero-welcome-text">Welcome to</h2>
        <h1 className="hero-country">JINDER</h1>
        <p className="hero-text-description">
          Jinder your way to a new job. Match with your dream company.
        </p>
        <Link to="/signup" className="explore-btn">
          SignUp
        </Link>
        <Link to="/login" className="explore-btn1">
          LogIn
        </Link>
      </div>
    </div>
  );
}

export default Home;

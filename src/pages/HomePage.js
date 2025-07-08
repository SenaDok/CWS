import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the CWS App</h1>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/book">Book a Seat</Link>
        <Link to="/terms">Terms</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}

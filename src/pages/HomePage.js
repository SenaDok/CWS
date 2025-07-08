import React from "react";
import { Link } from "react-router-dom";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import routes from "routes";
import footerRoutes from "footer.routes";

export default function HomePage() {
  return (
    <>
      <DefaultNavbar routes={routes} />
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
      <DefaultFooter content={footerRoutes} />
    </>
  );
}

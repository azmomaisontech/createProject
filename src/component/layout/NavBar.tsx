import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import "./NavBar.css";

const NavBar: React.FC = () => {
  return (
    <nav id="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <h1> Azmo Todo</h1>
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

export default NavBar;

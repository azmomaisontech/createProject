import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks: React.FC = () => {
  return (
    <ul>
      <li>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/signin">Log In</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;

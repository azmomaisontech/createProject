import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks: React.FC = () => {
  return (
    <ul>
      <li>
        <NavLink to="/create">New Project</NavLink>
        <NavLink to="/">Log Out</NavLink>
        <NavLink to="/" className="btn btn-round btn-pink">
          AM
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;

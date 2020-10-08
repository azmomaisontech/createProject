import React, { useState } from "react";
import "./SignUp.css";

const SignUp: React.FC = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <main id="signup" className="my-top">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <h2>Sign Up</h2>
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={handleChange} />
          </div>
          <div className="form-group">
            <button className="btn btn-pink">Sign Up</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SignUp;

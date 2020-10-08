import React, { useState } from "react";
import "./SignIn.css";

const SignIn: React.FC = () => {
  const [user, setUser] = useState({
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
    <main id="signin" className="my-top">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <h2>Sign In</h2>
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
            <button className="btn btn-pink">Login</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SignIn;

import React from "react";
import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <main id="dashboard" className="my-top">
      <div className="container">
        <div className="grid-container">
          <div className="grid-item">
            <ProjectList />
          </div>
          <div className="grid-item">
            <Notification />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;

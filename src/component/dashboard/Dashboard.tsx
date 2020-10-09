import React from "react";
import { connect } from "react-redux";
import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";
import "./Dashboard.css";

interface Prop {
  projects: { id: string; title: string; content: string }[];
}

const Dashboard: React.FC<Prop> = ({ projects }) => {
  return (
    <main id="dashboard" className="my-top">
      <div className="container">
        <div className="grid-container">
          <div className="grid-item">
            {projects && projects.map((project) => <ProjectList key={project.id} project={project} />)}
          </div>
          <div className="grid-item">
            <Notification />
          </div>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state: any) => ({
  projects: state.project.projects,
});

export default connect(mapStateToProps)(Dashboard);

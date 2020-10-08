import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList: React.FC = () => {
  return (
    <section className="projectlist">
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
    </section>
  );
};

export default ProjectList;

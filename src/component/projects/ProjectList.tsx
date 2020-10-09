import React from "react";

interface Prop {
  project: { id: string; title: string; content: string };
}

const ProjectList: React.FC<Prop> = ({ project }) => {
  const { title } = project;
  return (
    <section className="projectlist">
      <div className="project">
        <h2>{title}</h2>
        <p>Posted by Azmo Tech</p>
        <p>3rd September, 2am</p>
      </div>
    </section>
  );
};

export default ProjectList;

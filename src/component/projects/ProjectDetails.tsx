import React from "react";
import "./ProjectDetails.css";

interface Prop {
  match: {
    params: { id: string };
  };
}

const ProjectDetails: React.FC<Prop> = (props) => {
  const id = props.match.params.id;
  return (
    <main id="projectdetails" className="my-top">
      <div className="container">
        <div className="project-details">
          <h2>Project Title - {id}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, obcaecati labore debitis, delectus aut
            nesciunt asperiores, atque vero eos saepe repellendus! Voluptatem eum qui cum cupiditate, nisi eligendi
            similique veritatis?
          </p>
          <div className="line-break"></div>
          <p>Posted by Azmo Tech</p>
          <p>2nd September, 2am</p>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;

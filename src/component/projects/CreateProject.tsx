import React, { useState } from "react";
import { connect } from "react-redux";
import { createProject } from "../../redux/action/projectAction";
import { CreateProjectType } from "../../redux/action/type";
import "./CreateProject.css";

interface Prop {
  createProject: (project: CreateProjectType) => void;
}

const CreateProject: React.FC<Prop> = (props) => {
  const { createProject } = props;
  const [project, setProject] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e: any) => {
    setProject({ ...project, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createProject(project);
    setProject({ title: "", content: "" });
  };

  return (
    <main id="createproject" className="my-top">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <h2>Create Project</h2>
          </div>
          <div className="form-group">
            <label htmlFor="title"> Title</label>
            <input type="text" name="title" id="title" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea name="content" id="content" onChange={handleChange}></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-pink">Create</button>
          </div>
        </form>
      </div>
    </main>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  createProject: (project: CreateProjectType) => dispatch(createProject(project)),
});

export default connect(null, mapDispatchToProps)(CreateProject);

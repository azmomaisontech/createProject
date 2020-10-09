import { ProjectEnum, CreateProjectType } from "./type";

export const createProject = (project: CreateProjectType) => (dispatch: any) => {
  dispatch({
    type: ProjectEnum.createProject,
    payload: project,
  });
};

export const fetchProjects = () => (dispatch: any) => {
  dispatch({
    type: ProjectEnum.fetchProjects,
    payload: "123",
  });
};

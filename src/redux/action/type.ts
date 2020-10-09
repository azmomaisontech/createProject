export interface ProjectType {
  id: string;
  title: string;
  content: string;
}

export interface CreateProjectType {
  title: string;
  content: string;
}

export enum ProjectEnum {
  fetchProjects = "FETCH_PROJECTS",
  createProject = "CREATE_PROJECT",
}

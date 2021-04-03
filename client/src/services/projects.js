import api from "./api-config";

export const getAllProjects = async () => {
  const resp = await api.get("/projects");
  return resp.data;
};

export const postProject = async (projectData) => {
  const resp = await api.post("/projects", { project: projectData });
  return resp.data;
};

export const putProject = async (id, projectData) => {
  const resp = await api.put(`/projects/${id}`, { project: projectData });
  return resp.data;
};

export const destroyProject = async (id) => {
  const resp = await api.delete(`/projects/${id}`);
  return resp;
};

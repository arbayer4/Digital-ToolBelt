import api from "./api-config";

export const getAllHours = async () => {
  const resp = await api.get("/hours");
  return resp.data;
};

export const postHours = async (timeData) => {
  const resp = await api.post("/hours", { hour: timeData });
  return resp.data;
};
export const destroyHour = async (id) => {
  const resp = await api.delete(`/hours/${id}`);
  return resp;
};

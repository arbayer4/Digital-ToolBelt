import api from "./api-config";

export const getAllHours = async () => {
  const resp = await api.get("/hours");
  return resp.data;
};

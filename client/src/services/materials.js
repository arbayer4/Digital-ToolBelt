import api from "./api-config";

export const getAllMaterials = async () => {
  const resp = await api.get("/materials");
  return resp.data;
};

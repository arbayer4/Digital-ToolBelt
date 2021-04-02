import api from "./api-config";

export const getAllMaterials = async () => {
  const resp = await api.get("/materials");
  return resp.data;
};

export const postMaterial = async (materialData) => {
  const resp = await api.post("/materials", { material: materialData });
  return resp.data;
};

export const destroyMaterial = async (id) => {
  const resp = await api.delete(`/materials/${id}`);
  return resp;
};

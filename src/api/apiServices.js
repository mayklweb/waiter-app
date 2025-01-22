import { Axios } from "./api";

export const getProducts = async () => {
  const { data } = await Axios.get("/products/");
  return data;
};

export const getCategories = async () => {
  const { data } = await Axios.get("/сategory/");
  return data;
};

export const getRooms = async () => {
  const { data } = await Axios.get("/table_cat/");
  return data;
};

export const getTable = async () => {
  const { data } = await Axios.get("/table/");
  return data;
};

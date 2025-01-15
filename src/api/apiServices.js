import { Axios } from "./api";

export const getRooms = async () => {
  const { data } = await Axios.get("/table_cat/");
  return data.results;
};

export const getTable = async () => {
  const { data } = await Axios.get("/table/");
  return data.results;
};
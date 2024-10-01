import { catListAdapterFromAtelierApi } from "../adapters/CatAdapter";

const ApiAtelierUrl = "https://data.latelier.co/cats.json";

export const getAllCatsWithApiAtelier = async (): Promise<ICat[]> => {
  const response = await fetch(ApiAtelierUrl);
  const data = await response.json();
  return catListAdapterFromAtelierApi(data.images);
};

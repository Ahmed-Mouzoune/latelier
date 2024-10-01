export const catAdapterFromAtelierApi = (data: ICatApiAtelier): ICat => ({
  id: data.id,
  imageUrl: data.url,
  score: 0,
});
export const catListAdapterFromAtelierApi = (data: ICatApiAtelier[]): ICat[] =>
  data.map((cat) => catAdapterFromAtelierApi(cat));

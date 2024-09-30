export const catAdapterFromApiAtelier = (data: ICatApiAtelier): ICat => ({
  id: data.id,
  imageUrl: data.url,
  score: 0,
});
export const catAdapterFromApiAtelierList = (data: ICatApiAtelier[]): ICat[] =>
  data.map((cat) => catAdapterFromApiAtelier(cat));

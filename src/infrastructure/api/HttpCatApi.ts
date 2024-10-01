export const fetchAllCats = async (): Promise<ICat[]> => {
  const response = await fetch("/api/cats");
  const { data: cats } = await response.json();
  return cats;
};

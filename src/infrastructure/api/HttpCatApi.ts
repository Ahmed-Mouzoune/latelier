export const fetchAllCats = async (): Promise<ICat[]> => {
  const response = await fetch("/api/cats");
  const { data: cats } = await response.json();
  return cats;
};
export const voteForCat = async (cat: ICat): Promise<ICat[]> => {
  const response = await fetch("/api/cats", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cat }),
  });
  const { data: catUpdate } = await response.json();
  return catUpdate;
};

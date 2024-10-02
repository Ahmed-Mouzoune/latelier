export const getAllCats = async (
  repository: ICatRepository
): Promise<ICat[]> => {
  return await repository.getAllCats();
};
export const getOneCat = async (
  repository: ICatRepository,
  catId: string
): Promise<ICat | undefined> => {
  return await repository.getOneCat(catId);
};
export const addCat = async (
  repository: ICatRepository,
  cat: ICat
): Promise<ICat | undefined> => {
  return await repository.addCat(cat);
};

export const voteForCat = async (
  repository: ICatRepository,
  cat: ICat
): Promise<ICat | undefined> => {
  const catWithVote = {
    ...cat,
    score: cat.score + 1,
  };
  return await repository.updateCat(catWithVote);
};
export const sortCatsByScore = (catsList: ICat[]): ICat[] => {
  return [...catsList].sort((a, b) => b.score - a.score);
};
export const getRankingOfCat = (catsList: ICat[], cat: ICat): number => {
  const sortedCats = sortCatsByScore(catsList); // Utilisation de la fonction de tri
  const rank = sortedCats.findIndex((c) => c.id === cat.id);
  return rank !== -1 ? rank + 1 : -1;
};

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
    score: cat.score++,
  };
  return await repository.updateCat(catWithVote);
};

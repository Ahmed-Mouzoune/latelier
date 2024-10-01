export const getAllCats = async (repository: ICatRepository): Promise<void> => {
  await repository.getAllCats();
};

// export const voteForCat = async (
//   repository: ICatRepository,
//   catId: string
// ): Promise<void> => {
//   await repository.voteForCat(catId);
// };

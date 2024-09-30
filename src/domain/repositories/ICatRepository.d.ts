interface ICatRepository {
  getAllCats(): Promise<ICat[]>;
  voteForCat(catId: string): Promise<void>;
}

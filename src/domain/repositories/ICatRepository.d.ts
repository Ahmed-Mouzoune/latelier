interface ICatRepository {
  getAllCats(): Promise<ICat[]>;
  getOneCat(catId: string): Promise<ICat | undefined>;
  updateCat(updatedCat: ICat): Promise<ICat | undefined>;
  addCat(cat: ICat): Promise<ICat | undefined>;
}

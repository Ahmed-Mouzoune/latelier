import { catAdapterFromApiAtelierList } from "../adapters/CatAdapter";

export class CatRepository implements ICatRepository {
  private apiUrl = "https://data.latelier.co/cats.json";
  async getAllCats(): Promise<ICat[]> {
    const response = await fetch(this.apiUrl);
    const data = await response.json();
    return catAdapterFromApiAtelierList(data.images);
  }
  // voteForCat(catId: string): Promise<void> {}
}

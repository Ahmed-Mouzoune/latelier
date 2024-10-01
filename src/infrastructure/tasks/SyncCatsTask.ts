import { addCat, getOneCat } from "@/domain/usecases/CatUsecases";
import { PrismaCatRepository } from "../repositories/PrismaCatRepository";
import { getAllCatsWithApiAtelier } from "../api/AtelierCatApi";

export const SyncCatsTask = async (): Promise<ICat[] | void> => {
  const prismaCatRepository = new PrismaCatRepository();
  const externalCats = await getAllCatsWithApiAtelier();
  for (const catData of externalCats) {
    const isExist = await getOneCat(prismaCatRepository, catData.id);
    if (!isExist) await addCat(prismaCatRepository, catData);
  }
  return externalCats;
};

import prisma from "@/infrastructure/db/client";

export class PrismaCatRepository implements ICatRepository {
  async getAllCats(): Promise<ICat[]> {
    const cats = await prisma.cat.findMany();
    return cats;
  }
  async getOneCat(catId: string): Promise<ICat | undefined> {
    const cat = await prisma.cat.findFirst({
      where: { id: catId },
    });
    if (!cat) return undefined;
    return cat;
  }

  async updateCat(updatedCat: ICat): Promise<ICat | undefined> {
    const newCat = await prisma.cat.update({
      where: { id: updatedCat.id },
      data: updatedCat,
    });
    if (!updatedCat) return undefined;
    return newCat;
  }

  async addCat(cat: ICat): Promise<ICat | undefined> {
    const createdCat = await prisma.cat.create({
      data: cat,
    });
    if (!createdCat) return undefined;
    return cat;
  }
}

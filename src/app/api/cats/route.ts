import { getAllCats } from "@/domain/usecases/CatUsecases";
import { PrismaCatRepository } from "@/infrastructure/repositories/PrismaCatRepository";

export async function GET() {
  try {
    const prismaCatRepository = new PrismaCatRepository();
    const cats = await getAllCats(prismaCatRepository);
    return Response.json({ data: cats });
  } catch (error) {
    return new Response(`Error when synchronising cats ${error}`, {
      status: 500,
    });
  }
}

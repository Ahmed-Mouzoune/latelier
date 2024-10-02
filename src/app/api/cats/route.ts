import { getAllCats, voteForCat } from "@/domain/usecases/CatUsecases";
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

export async function POST(request: Request) {
  try {
    const prismaCatRepository = new PrismaCatRepository();
    const { cat } = await request.json();

    if (!cat) return new Response("cat is required", { status: 400 });

    const updatedCat = await voteForCat(prismaCatRepository, cat);

    if (!updatedCat) {
      return new Response("Cat not found", { status: 404 });
    }

    return Response.json({ data: updatedCat });
  } catch (error) {
    return new Response(`Error when voting for cat: ${error}`, {
      status: 500,
    });
  }
}

import { SyncCatsTask } from "@/infrastructure/tasks/SyncCatsTask";

export async function GET() {
  try {
    const syncCatsTask = await SyncCatsTask();
    if (syncCatsTask)
      return Response.json({ message: "Cats synchronisation completed" });
    return new Response("Error when synchronising cats", {
      status: 500,
    });
  } catch (error) {
    return new Response(`Error when synchronising cats ${error}`, {
      status: 500,
    });
  }
}

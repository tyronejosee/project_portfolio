import { NextResponse } from "next/server";
import { messageNotifier } from "@/lib/observer";
import { DiscordObserver } from "@/lib/dicord";

export async function POST(req: Request) {
  try {
    messageNotifier.subscribe(DiscordObserver);

    const data = await req.json();
    await messageNotifier.notify(data);

    return NextResponse.json({ message: "Notification sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error processing the request" },
      { status: 500 }
    );
  }
}

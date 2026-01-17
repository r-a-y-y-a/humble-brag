import { NextResponse } from "next/server";
import { generateSpeech } from "@/lib/elevenlabs";

export async function POST(req: Request) {
  try {
    const { script, mode } = await req.json();

    const VOICE_IDS = {
        MOVIE: "N2lVS1w4EtoT3dr4eOWO",
        SPORTS: "SOYHLrjzK2X1ezoPC6cr"
    };

    // Select voice ID based on user's choice
    const voiceId = mode === "sports" ? VOICE_IDS.SPORTS : VOICE_IDS.MOVIE;

    // Call the logic from lib file
    const response = await generateSpeech(script, voiceId);

    // Return the audio and alignment data to your frontend
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error: "Failed to generate speech" }, { status: 500 });
  }
}
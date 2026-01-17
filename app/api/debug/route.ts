import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    has_openai_key: !!process.env.OPENAI_API_KEY,
    openai_key_length: process.env.OPENAI_API_KEY?.length || 0,
    has_elevenlabs_key: !!process.env.ELEVENLABS_API_KEY,
    has_supabase_url: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    has_supabase_key: !!process.env.SUPABASE_SERVICE_ROLE_KEY
  });
}

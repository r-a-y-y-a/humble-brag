import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";

export const generateSpeech = async (text: string, voiceId: string) => {
  const client = new ElevenLabsClient({
    apiKey: process.env.ELEVENLABS_API_KEY, 
  });

  return await client.textToSpeech.convertWithTimestamps(voiceId, {
    text: text,
    modelId: "eleven_multilingual_v2",
    voiceSettings: { stability: 0.5, similarityBoost: 0.8 },
  });
};
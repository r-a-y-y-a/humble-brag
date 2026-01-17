import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";

const client = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY, 
});

export const generateSpeech = async (text: string, voiceId: string) => {
  return await client.textToSpeech.convertWithTimestamps(voiceId, {
    text: text,
    modelId: "eleven_multilingual_v2",
    voiceSettings: { stability: 0.5, similarityBoost: 0.8 },
  });
};
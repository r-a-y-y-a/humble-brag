"use client";
import { useState } from "react";

export default function TestSpeechPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const runTest = async () => {
    setLoading(true);
    const response = await fetch("/api/speech", {
      method: "POST",
      body: JSON.stringify({
        mode: "sports",
        script: "Testing text-to-speech for HumbleBrag.",
      }),
    });
    const data = await response.json();
    setResult(data);
    setLoading(false);

    // Play the audio immediately to test sound
    const audio = new Audio(`data:audio/mp3;base64,${data.audioBase64}`);
    audio.play();
  };

  return (
    <div className="p-10">
      <button 
        onClick={runTest} 
        className="bg-blue-500 text-white p-4 rounded"
        disabled={loading}
      >
        {loading ? "Generating..." : "Test Movie Mode Voice"}
      </button>

      {result && (
        <div className="mt-5">
          <h3 className="font-bold">Success!</h3>
          <p>Audio is playing...</p>
          <p>Character count received: {result.alignment.characters.length}</p>
          <details>
            <summary>View Alignment Data (Timestamps)</summary>
            <pre className="bg-gray-100 p-2 text-xs">
              {JSON.stringify(result.alignment, null, 2)}
            </pre>
          </details>
        </div>
      )}
    </div>
  );
}
import { useState } from "react";
import type { JSX } from "react";

type PodcastResponse = {
  file: string;
  url: string;
};

const BACKEND_URL = "http://localhost:3000"; // change if needed

export default function PodcastPlayer(): JSX.Element {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const generatePodcast = async (): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${BACKEND_URL}/api/podcast`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`Backend error: ${res.status}`);
      }

      const data: PodcastResponse = await res.json();

      // Convert relative URL to absolute URL
      setAudioUrl(`${BACKEND_URL}${data.url}`);
    } catch (err) {
      console.error(err);
      setError("Failed to generate podcast audio.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600 }}>
      <button onClick={generatePodcast} disabled={loading}>
        {loading ? "Generating Podcast..." : "Generate Podcast"}
      </button>

      {error && (
        <p style={{ color: "red", marginTop: 8 }}>{error}</p>
      )}

      {audioUrl && (
        <audio
          controls
          src={audioUrl}
          style={{ width: "100%", marginTop: 12 }}
        />
      )}
    </div>
  );
}

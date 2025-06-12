import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function extractVideoId(url) {
  try {
    const u = new URL(url);

    // Caso youtube.com/watch?v=VIDEO_ID
    if (u.hostname.includes("youtube.com") && u.searchParams.get("v")) {
      return u.searchParams.get("v");
    }

    // Caso youtu.be/VIDEO_ID
    if (u.hostname.includes("youtu.be")) {
      return u.pathname.slice(1);
    }

    // Caso youtube.com/shorts/VIDEO_ID
    if (u.pathname.startsWith("/shorts/")) {
      return u.pathname.split("/")[2];
    }
  } catch (e) {
    return null;
  }
}


export default function FeaturedVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const snapshot = await getDocs(collection(db, "videos"));
      const fetchedVideos = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setVideos(fetchedVideos);
    }

    fetchVideos();
  }, []);

  return (
    <section id="featured" className="py-16 px-6 bg-green-50 dark:bg-gray-800 transition-colors">
      <h2 className="text-3xl font-bold text-center text-green-900 dark:text-[#f6eee0] mb-8">
        Top Videos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {videos.map((video) => {
          const videoId = extractVideoId(video.url);
          return (
            <div
              key={video.id}
              className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg shadow overflow-hidden"
            >
              {videoId ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-sm text-red-500 px-4 text-center">
                  URL inválida
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function VideoUploadForm() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [user, setUser] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const extractVideoId = (url) => {
    const match = url.match(/(?:v=|\/embed\/|\.be\/)([\w-]{11})/);
    return match ? match[1] : null;
  };

  async function handleSubmit() {
    if (!title || !category || !user || !youtubeUrl) {
      return alert("Preencha todos os campos.");
    }

    const videoId = extractVideoId(youtubeUrl);
    if (!videoId) {
      return alert("URL do YouTube inválida.");
    }

    setSubmitting(true);

    await addDoc(collection(db, "videos"), {
      title,
      category,
      user,
      likes: 0,
      videoId,
    });

    alert("Vídeo adicionado!");
    setTitle("");
    setCategory("");
    setUser("");
    setYoutubeUrl("");
    setSubmitting(false);
  }

  return (
    <section className="py-12 px-6 bg-green-50 dark:bg-gray-800 transition-colors">
      <h2 className="text-2xl font-bold text-center text-green-900 dark:text-[#f6eee0] mb-6">
        Enviar Vídeo do YouTube
      </h2>
      <div className="max-w-lg mx-auto bg-white dark:bg-gray-700 p-6 rounded-lg shadow space-y-4">
        <input
          type="text"
          placeholder="Título"
          className="w-full p-2 rounded border dark:bg-gray-800 text-black dark:text-white"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Categoria"
          className="w-full p-2 rounded border dark:bg-gray-800 text-black dark:text-white"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Usuário"
          className="w-full p-2 rounded border dark:bg-gray-800 text-black dark:text-white"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL do YouTube"
          className="w-full p-2 rounded border dark:bg-gray-800 text-black dark:text-white"
          value={youtubeUrl}
          onChange={(e) => setYoutubeUrl(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
        >
          {submitting ? "Enviando..." : "Enviar"}
        </button>
      </div>
    </section>
  );
}

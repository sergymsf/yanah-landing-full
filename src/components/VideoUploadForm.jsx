import { useState } from "react";

export default function VideoUploadForm() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.type === "video/mp4") {
      setFile(selected);
      setMessage("");
    } else {
      setMessage("Por favor, selecione um ficheiro .mp4 válido.");
      setFile(null);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("Nenhum ficheiro selecionado.");
      return;
    }

    setUploading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("video", file);

    try {
      const res = await fetch("http://localhost:3001/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setMessage("Upload concluído! Vídeo: " + data.url);
      } else {
        setMessage("Erro: " + data.error);
      }
    } catch (err) {
      setMessage("Erro ao enviar o vídeo.");
    }

    setUploading(false);
  };

  return (
    <form onSubmit={handleUpload} className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Enviar vídeo MP4</h2>
      <input
        type="file"
        accept="video/mp4"
        onChange={handleFileChange}
        className="mb-4"
      />
      <button
        type="submit"
        disabled={uploading}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        {uploading ? "A enviar..." : "Enviar"}
      </button>
      {message && <p className="mt-4 text-sm">{message}</p>}
    </form>
  );
}

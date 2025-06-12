const express = require("express");
const multer = require("multer");
const cors = require("cors");
const uploadVideo = require("./upload");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("video"), async (req, res) => {
  const { title, description } = req.body;
  const filePath = req.file.path;

  try {
    const videoId = await uploadVideo(filePath, title, description);
    res.json({ success: true, videoId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Upload failed" });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

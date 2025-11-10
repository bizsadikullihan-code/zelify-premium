import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Error:", err));

const PostSchema = new mongoose.Schema({
  title: String,
  body: String
}, { timestamps: true });
const Post = mongoose.model("Post", PostSchema);

app.get("/api/posts", async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});
app.post("/api/posts", async (req, res) => {
  const post = await Post.create(req.body);
  res.json(post);
});

app.use(express.static(path.join(__dirname, "client", "dist")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"))
);

app.listen(4000, () => console.log("🚀 Server running on port 4000"));

import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

let posts = [
  { id: 1, title: "Welcome to Zelify 🚀", body: "Connect. Share. Inspire." },
];

// Get all posts
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// Create a new post
app.post("/api/posts", (req, res) => {
  const newPost = { id: Date.now(), ...req.body };
  posts.unshift(newPost);
  res.json(newPost);
});

// Serve frontend build
app.use(express.static(path.join(__dirname, "client", "dist")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"))
);

app.listen(4000, () => console.log("🚀 Zelify Demo Server running on port 4000"));

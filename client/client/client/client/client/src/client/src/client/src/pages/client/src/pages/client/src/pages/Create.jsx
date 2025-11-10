import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("/api/posts", { title, body });
    nav("/feed");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-gray-900 text-yellow-400 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Create Post</h2>
      <form onSubmit={submit} className="space-y-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full p-2 rounded bg-black text-yellow-300"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write something..."
          className="w-full h-40 p-2 rounded bg-black text-yellow-300"
        ></textarea>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:scale-105 transition">
          Post
        </button>
      </form>
    </div>
  );
}

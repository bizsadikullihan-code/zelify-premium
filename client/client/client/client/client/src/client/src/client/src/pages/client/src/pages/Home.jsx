import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/api/posts").then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 space-y-4">
      {posts.map((p) => (
        <div key={p._id} className="bg-gray-900 text-yellow-400 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">{p.title}</h2>
          <p>{p.body}</p>
        </div>
      ))}
    </div>
  );
}

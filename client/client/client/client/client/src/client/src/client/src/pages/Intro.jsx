import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-yellow-400">
      <h1 className="text-5xl font-bold mb-2">Welcome to Zelify</h1>
      <p className="text-lg mb-4">Connect. Share. Inspire.</p>
      <Link to="/feed" className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:scale-105 transition">
        Enter App
      </Link>
    </div>
  );
}

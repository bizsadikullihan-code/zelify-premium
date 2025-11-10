import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black text-yellow-400 p-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold">Zelify</Link>
      <nav className="flex gap-4 text-sm">
        <Link to="/feed">Feed</Link>
        <Link to="/create">Create</Link>
      </nav>
    </header>
  );
}

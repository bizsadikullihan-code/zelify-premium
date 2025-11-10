import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Create from "./pages/Create.jsx";
import Intro from "./pages/Intro.jsx";
import Header from "./components/Header.jsx";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/feed" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

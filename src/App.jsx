import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import MentionsLegales from "./pages/MentionsLegales.jsx";
import Merci from "./public/merci.html";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/merci.html" element={<Merci />} />   {/* ✅ */}  
      </Routes>
    </Router>
  );
}


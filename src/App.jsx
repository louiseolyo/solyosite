// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import MentionsLegales from "./pages/MentionsLegales.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Accueil (one-page) */}
        <Route path="/" element={<Home />} />

        {/* Mentions légales (page React) */}
        <Route path="/mentions-legales" element={<MentionsLegales />} />

        {/* (Optionnel) fallback 404 → renvoyer à l’accueil */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}



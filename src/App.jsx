import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Yoga from "./pages/Yoga";
import Sophrologie from "./pages/Sophrologie";
import MentionsLegales from "./pages/MentionsLegales.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="*" element={<Home />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/sophrologie" element={<Sophrologie />} />
      </Routes>
    </Router>
  );
}
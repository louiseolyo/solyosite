import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Yoga from "./pages/Yoga";
import Sophrologie from "./pages/Sophrologie";
import MentionsLegales from "./pages/MentionsLegales.jsx";
import Blog from "./pages/Blog.jsx";
import BlogArticle from "./pages/BlogArticle.jsx";
import CarteCadeau from "./pages/CarteCadeau";
import SophrologieEntreprise from "./pages/SophrologieEntreprise";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/sophrologie" element={<Sophrologie />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
        <Route path="*" element={<Home />} />
        <Route path="/carte-cadeau" element={<CarteCadeau />} />
        <Route path="/sophrologie/entreprises" element={<SophrologieEntreprise />} />
      </Routes>
    </Router>
  );
}
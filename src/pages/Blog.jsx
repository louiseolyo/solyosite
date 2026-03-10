import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import articles from "../components/articles";

export default function Blog() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream text-charbon font-sans">
      <Helmet>
        <title>Blog Sophrologie & Yoga – SoLyo | Louise Durieu</title>
        <meta name="description" content="Articles et conseils sur la sophrologie et le yoga par Louise Durieu, sophrologue et professeure de yoga à La Garenne-Colombes." />
      </Helmet>

      {/* Header identique aux autres pages */}
      <header className="fixed w-full bg-cream shadow z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 md:py-6 flex items-center relative">
          <Link to="/" className="absolute left-4 top-1/2 -translate-y-1/2">
            <img src="/img/logo-fonce.webp" alt="SoLyo - Louise Durieu" className="h-14 md:h-24 w-auto opacity-90" />
          </Link>
          <nav className="hidden md:flex ml-auto items-center gap-8 text-sm md:text-base lg:text-lg">
            <a href="/#about" className="hover:text-sage">Qui suis-je ?</a>
            <Link to="/yoga" className="hover:text-sage">Yoga</Link>
            <Link to="/sophrologie" className="hover:text-sage">Sophrologie</Link>
            <a href="/#temoignages" className="hover:text-sage">Témoignages</a>
            <a href="/#tarifs" className="hover:text-sage">Tarifs</a>
            <a href="/#rdv" className="hover:text-sage">Rendez-vous</a>
            <a href="/#contact" className="hover:text-sage">Contact</a>
            <Link to="/blog" className="hover:text-sage font-semibold">Blog</Link>
          </nav>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6">
        <h1 className="text-3xl font-bold text-center text-terra mb-12">Blog</h1>

        <div className="max-w-4xl mx-auto grid gap-8">
          {articles.map((article) => (
            <div key={article.slug} className="bg-white rounded-xl shadow-md p-6">
              {article.image && (
      <img
        src={article.image}
        alt={article.imageAlt}
        className="w-full h-64 object-cover"
      />
    )}
              <p className="text-sm text-sage mb-2">{new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</p>
              <h2 className="text-xl font-bold text-terra mb-3">{article.titre}</h2>
              <p className="text-charbon text-sm mb-4">{article.resume}</p>
              <Link to={`/blog/${article.slug}`} className="inline-block bg-sage text-white px-5 py-2 rounded-full text-sm hover:bg-olive transition">
                Lire la suite →
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
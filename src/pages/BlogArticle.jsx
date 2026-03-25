import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import articles from "../components/articles";

export default function BlogArticle() {
  const { slug } = useParams();
  const [menuOpen, setMenuOpen] = useState(false);
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <div className="pt-32 text-center">Article introuvable.</div>;

  return (
    <div className="min-h-screen bg-cream text-charbon font-sans">
<Helmet>
  <title>{article.titre} – SoLyo | Louise Durieu</title>
  <meta name="description" content={article.resume} />
  <link rel="canonical" href={`https://www.solyo.fr/blog/${slug}`} />
</Helmet>

         <header className="fixed w-full bg-cream shadow z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 lg:py-6 flex items-center relative">
          {/* Logo */}
          <Link to="/" className="absolute left-4 top-1/2 -translate-y-1/2">
            <img
              src="/img/logo-fonce.webp"
              alt="SoLyo - Louise Durieu"
              className="h-14 md:h-24 w-auto opacity-90 pointer-events-auto"
            />
          </Link>

          {/* Bouton burger mobile */}
          <button
            className="lg:hidden text-sage ml-auto"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Menu desktop */}
         <nav className="hidden lg:flex ml-auto items-center gap-8 text-sm md:text-base lg:text-lg">
      <Link to="/sophrologie" className="hover:text-sage">Sophrologie</Link>
      <Link to="/yoga" className="hover:text-sage">Yoga</Link>
      <a href="/#about" className="hover:text-sage">Qui suis-je ?</a>
      <a href="/#temoignages" className="hover:text-sage">Témoignages</a>
      <a href="/#tarifs" className="hover:text-sage">Tarifs</a>
      <a href="/#rdv" className="hover:text-sage">Rendez-vous</a>
      <a href="/#contact" className="hover:text-sage">Contact</a>
      <Link to="/blog" className="hover:text-sage font-semibold">Blog</Link>
    </nav>
  </div>

  {/* Menu mobile déroulant */}
  {menuOpen && (
    <div className="lg:hidden bg-cream border-t px-4 pb-4">
      <nav className="flex flex-col space-y-2 text-sm text-sage">
        <Link to="/sophrologie" onClick={() => setMenuOpen(false)}>Sophrologie</Link>
        <Link to="/yoga" onClick={() => setMenuOpen(false)}>Yoga</Link>
        <a href="/#temoignages" onClick={() => setMenuOpen(false)}>Témoignages</a>
        <a href="/#about" onClick={() => setMenuOpen(false)}>Qui suis-je ?</a>
        <a href="/#tarifs" onClick={() => setMenuOpen(false)}>Tarifs</a>
        <a href="/#rdv" onClick={() => setMenuOpen(false)}>Rendez-vous</a>
        <a href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
      </nav>
          </div>
        )}
      </header>

      <main className="pt-32 pb-20 px-6">
        <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
          <p className="text-sm text-sage mb-2">{new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</p>
          <h1 className="text-3xl font-bold text-terra mb-6">{article.titre}</h1>
          {article.image && (
    <img
      src={article.image}
      alt={article.imageAlt}
      className="w-full h-64 object-cover rounded-xl mb-8 shadow-sm"
    />
  )}
          <div className="prose text-charbon leading-relaxed text-justify"
            dangerouslySetInnerHTML={{ __html: article.contenu }}
          />
          <div className="mt-10">
            <Link to="/blog" className="text-sage hover:text-olive underline text-sm">← Retour au blog</Link>
          </div>
        </article>
      </main>
    </div>
  );
}
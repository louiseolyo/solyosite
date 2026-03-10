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
      </Helmet>

      <header className="fixed w-full bg-cream shadow z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 md:py-6 flex items-center relative">
          <Link to="/" className="absolute left-4 top-1/2 -translate-y-1/2">
            <img src="/img/logo-fonce.png" alt="SoLyo - Louise Durieu" className="h-14 md:h-24 w-auto opacity-90" />
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
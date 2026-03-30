import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import articles from "../components/articles";
import Navbar from "../components/Navbar";

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

         <Navbar />

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
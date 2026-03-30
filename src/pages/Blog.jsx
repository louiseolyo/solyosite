import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import articles from "../components/articles";
import Navbar from "../components/Navbar";


export default function Blog() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream text-charbon font-sans">
<Helmet>
  <title>Blog Sophrologie & Yoga – SoLyo | Louise Durieu</title>
  <meta name="description" content="Conseils et articles sur la sophrologie et le yoga par Louise Durieu, sophrologue et professeure de yoga à La Garenne-Colombes." />
  <link rel="canonical" href="https://www.solyo.fr/blog" />
</Helmet>

      <Navbar />

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
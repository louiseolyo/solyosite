// src/pages/Sophrologie.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";

export default function Sophrologie() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream text-charbon font-sans scroll-smooth">

<Helmet>
  <title>Sophrologue à La Garenne-Colombes – Louise Durieu | SoLyo</title>
  <meta name="description" content="Louise Durieu, sophrologue certifiée à La Garenne-Colombes. Séances de sophrologie pour stress, grossesse, cancérologie. Consultations à domicile à Courbevoie, Colombes, Asnières et en visio." />
  <link rel="canonical" href="https://www.solyo.fr/sophrologie" />
</Helmet>

 <Navbar />

      {/* Contenu page Sophrologie */}
      <main className="pt-32 bg-sage/10 min-h-screen">
        <section className="pb-16 px-6">
          <h1 className="text-3xl font-bold text-center text-terra mb-8">Sophrologie à La Garenne-Colombes</h1>

          <div className="max-w-4xl mx-auto mb-10">
            <img
              src="/img/sophrologie-illustration.webp"
              alt="Séance de sophrologie"
              className="rounded-xl w-full h-64 object-cover shadow-md"
            />
          </div>

          <div className="max-w-4xl mx-auto text-center text-charbon mb-12">
            <p className="text-md mb-4">
              La sophrologie est une méthode psycho-corporelle douce qui aide à mieux gérer ses émotions,
              son stress, et à se reconnecter à soi.
            </p>
            <p className="text-md font-bold text-sage mb-4">
              Spécialisée en grossesse et maternité et en cancérologie, je vous accompagne
              quelle que soit votre problématique : stress, sommeil, confiance, examens,
              addictions, nutrition...
            </p>
            <p className="text-md mb-4">
              Je vous reçois pour des séances de sophrologie à La Garenne-Colombes, et j'interviens également à domicile à Courbevoie, Colombes, Bois-Colombes et Asnières-sur-Seine, ainsi qu'en visio.
            </p>
          </div>

          {/* Cartes thématiques - ligne 1 */}
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
              <h2 className="text-xl font-semibold mb-2">Stress & anxiété</h2>
              <p className="text-sage text-sm">
                Apprendre à apaiser les tensions, retrouver le calme intérieur et prendre du recul dans le quotidien.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
              <h2 className="text-xl font-semibold mb-2">Grossesse & maternité</h2>
              <p className="text-sage text-sm">
                Préparer sereinement l'arrivée de bébé, se relier à son corps, à ses ressources
                et accueillir chaque étape avec confiance.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
              <h2 className="text-xl font-semibold mb-2">Cancer et pathologies</h2>
              <p className="text-sage text-sm">
                Mieux vivre sa maladie, son traitement, accepter et s'adapter à cette nouvelle vie.
                Je vous accompagne dès l'annonce de votre maladie ou de votre rechute.
              </p>
            </div>
          </div>

          {/* Cartes thématiques - ligne 2 centrée */}
          <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto mt-6">
            <Link to="/sophrologie/entreprises" className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition group">
    <h2 className="text-xl font-semibold mb-2 group-hover:text-terra transition">Sophrologie en entreprise</h2>
    <p className="text-sage text-sm">
      Accompagner vos équipes face au stress, prévenir le burn-out et favoriser le bien-être au travail.
      Ateliers collectifs ou séances individuelles, sur site ou à distance.
    </p>
    <span className="mt-4 text-xs text-terra font-medium">En savoir plus →</span>
  </Link>

            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
              <h2 className="text-xl font-semibold mb-2">Sophrologie & Seniors</h2>
              <p className="text-sage text-sm">
                Retrouver l'équilibre physique et mental, mieux vieillir, cultiver la joie de vivre,
                apaiser les douleurs chroniques et faire la paix avec sa vie.
              </p>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
}

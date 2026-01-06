// src/pages/Sophrologie.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sophrologie() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream text-charbon font-sans scroll-smooth">
      {/* Barre de navigation */}
      <header className="fixed w-full bg-cream shadow z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 md:py-6 flex items-center relative">
          {/* Logo */}
          <Link to="/" className="absolute left-4 top-1/2 -translate-y-1/2">
            <img
              src="/img/logo-fonce.png"
              alt="SoLyo - Louise Durieu"
              className="h-14 md:h-24 w-auto opacity-90 pointer-events-auto"
            />
          </Link>

          {/* Bouton burger mobile */}
          <button
            className="md:hidden text-sage ml-auto"
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
          <nav className="hidden md:flex ml-auto items-center gap-8 text-sm md:text-base lg:text-lg">
            <a href="/#about" className="hover:text-sage">Qui suis-je ?</a>
            <Link to="/yoga" className="hover:text-sage">Yoga</Link>
            <Link to="/sophrologie" className="hover:text-sage">Sophrologie</Link>
            <a href="/#temoignages" className="hover:text-sage">Témoignages</a>
            <a href="/#tarifs" className="hover:text-sage">Tarifs</a>
            <a href="/#rdv" className="hover:text-sage">Rendez-vous</a>
            <a href="/#contact" className="hover:text-sage">Contact</a>
          </nav>
        </div>

        {/* Menu mobile déroulant */}
        {menuOpen && (
          <div className="md:hidden bg-cream border-t px-4 pb-4">
            <nav className="flex flex-col space-y-2 text-sm text-sage">
              <a href="/#about" onClick={() => setMenuOpen(false)}>Qui suis-je</a>
              <Link to="/yoga" onClick={() => setMenuOpen(false)}>Yoga</Link>
              <Link to="/sophrologie" onClick={() => setMenuOpen(false)}>Sophrologie</Link>
              <a href="/#temoignages" onClick={() => setMenuOpen(false)}>Témoignages</a>
              <a href="/#tarifs" onClick={() => setMenuOpen(false)}>Tarifs</a>
              <a href="/#rdv" onClick={() => setMenuOpen(false)}>Rendez-vous</a>
              <a href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Contenu page Sophrologie */}
      <main className="pt-32 bg-sage/10 min-h-screen">
        <section className="pb-16 px-6">
          <h1 className="text-3xl font-bold text-center text-terra mb-8">Sophrologie</h1>

          {/* Image d’ambiance */}
          <div className="max-w-4xl mx-auto mb-10">
            <img
              src="/img/sophrologie-illustration.jpg"
              alt="Séance de sophrologie"
              className="rounded-xl w-full h-64 object-cover shadow-md"
            />
          </div>

          <div className="max-w-4xl mx-auto text-center text-charbon mb-12">
            <p className="text-md mb-4">
              La sophrologie est une méthode psycho-corporelle douce qui aide à mieux gérer ses émotions, 
              son stress, et à se reconnecter à soi.
            </p>
            <p className="text-md font-bold text-sage">
              Spécialisée en grossesse et maternité et en cancérologie, je vous accompagne 
              quelle que soit votre problématique : stress, sommeil, confiance, examens, 
              addictions, nutrition...
            </p>
          </div>

          {/* Cartes thématiques */}
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Stress & émotions</h3>
              <p className="text-sage text-sm">
                Apprendre à apaiser les tensions, retrouver le calme intérieur et prendre du recul dans le quotidien.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Grossesse & maternité</h3>
              <p className="text-sage text-sm">
                Préparer sereinement l’arrivée de bébé, se relier à son corps, à ses ressources 
                et accueillir chaque étape avec confiance.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Cancer et pathologies</h3>
              <p className="text-sage text-sm">
                Mieux vivre sa maladie, son traitement, accepter et s'adapter à cette nouvelle vie. 
                Je vous accompagne dès l'annonce de votre maladie ou de votre rechute.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


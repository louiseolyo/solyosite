// src/pages/Yoga.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Yoga() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-charbon font-sans scroll-smooth">
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

      {/* Contenu page Yoga */}
      <main className="pt-32">
        <section className="bg-white pb-16 px-6">
          <h1 className="text-3xl font-bold text-center text-sage mb-8">Yoga</h1>
          
          <div className="max-w-4xl mx-auto text-center text-charbon mb-12">
            <p className="text-md mb-4">
              Professeure de Yoga Vinyasa, Prénatal/Postnatal et Senior depuis 2021, je vous accompagne quelque soit votre niveau de pratique et vos blessures ou douleurs, dans la bonne humeur et la détente, tout en vous challengeant à votre rythme pour gagner en souplesse, en force et en confiance !
            </p>
            <p className="text-md mb-4">
              Je suis également formatrice en Yoga Prénatal et Postnatal et en Yoga Vinyasa depuis 2022.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Vinyasa */}
            <div className="bg-cream rounded-xl shadow-md overflow-hidden flex flex-col">
              <img src="/img/yoga-vinyasa.jpg" alt="Yoga Vinyasa" className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-charbon mb-2">Yoga Vinyasa</h3>
                <p className="text-sage text-sm mb-4">
                  Le Yoga Vinyasa est un yoga dynamique, basé sur la respiration et l'enchaînement des postures (asanas). 
                  Il favorise la souplesse, le renforcement musculaire, la concentration et l’ancrage.
                </p>
                <span className="mt-auto text-sm text-terracotta">
                  Cours collectifs & individuels, quel que soit votre niveau.
                </span>
              </div>
            </div>

            {/* Prénatal */}
            <div className="bg-cream rounded-xl shadow-md overflow-hidden flex flex-col">
              <img src="/img/yoga-prenatal.jpg" alt="Yoga Prénatal" className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-charbon mb-2">Yoga Prénatal/Postanatal</h3>
                <p className="text-sage text-sm mb-4">
                  Le Yoga Prénatal ou Postnatal est une pratique douce ou dynamique selon votre corps et vos envies, avec des postures adaptées, 
                  pour vivre la grossesse en conscience, soulager les tensions, préparer l’accouchement ou mieux vivre son postpartum.
                </p>
                <span className="mt-auto text-sm text-terracotta">
                  Cours en petit groupe & individuels, à tout stade de la grossesse (possible avec bébé en postanatal).
                </span>
              </div>
            </div>

            {/* Senior */}
            <div className="bg-cream rounded-xl shadow-md overflow-hidden flex flex-col">
              <img src="/img/yoga-senior.jpg" alt="Yoga Senior" className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-charbon mb-2">Yoga Senior</h3>
                <p className="text-sage text-sm mb-4">
                  Le Yoga Senior est une pratique adaptée pour entretenir la mobilité, soulager les douleurs, gagner en souplesse, 
                  renforcer la masse musculaire, améliorer l’équilibre et cultiver le bien-être global.
                </p>
                <span className="mt-auto text-sm text-terracotta">
                  Accessible à tous les âges et quelles que soient vos douleurs.
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


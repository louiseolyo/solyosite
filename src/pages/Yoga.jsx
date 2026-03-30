// src/pages/Yoga.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";

export default function Yoga() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-charbon font-sans scroll-smooth">

<Helmet>
  <title>Cours de Yoga à La Garenne-Colombes – Louise Durieu | SoLyo</title>
  <meta name="description" content="Louise Durieu, professeure de Yoga Vinyasa, Prénatal/Postnatal et Senior à La Garenne-Colombes. Cours particuliers au cabinet ou à domicile à Asnières, Colombes, Courbevoie." />
  <link rel="canonical" href="https://www.solyo.fr/yoga" />
</Helmet>
      <Navbar />

      {/* Contenu page Yoga */}
      <main className="pt-32">
        <section className="bg-white pb-16 px-6">
          <h1 className="text-3xl font-bold text-center text-sage mb-8">Cours de Yoga à La Garenne-Colombes</h1>
          
          <div className="max-w-4xl mx-auto text-center text-charbon mb-12">
            <p className="text-md mb-4">
              Professeure de Yoga Vinyasa, Prénatal/Postnatal et Senior depuis 2021, je vous accompagne quelque soit votre niveau de pratique et vos blessures ou douleurs, dans la bonne humeur et la détente, tout en vous challengeant à votre rythme pour gagner en souplesse, en force et en confiance !
            </p>
            <p className="text-md mb-4">
              Je suis également formatrice en Yoga Prénatal et Postnatal et en Yoga Vinyasa depuis 2022.
            </p>
            <p className="text-md font-bold text-sage mb-4">
              Je propose des cours particuliers à mon cabinet à La Garenne-Colombes, et je me déplace à votre domicile aux alentours (Asnières-sur-Seine, Colombes, Bois-Colombes, Courbevoie...).
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Vinyasa */}
            <div className="bg-cream rounded-xl shadow-md overflow-hidden flex flex-col">
              <img src="/img/yoga-vinyasa.webp" alt="Yoga Vinyasa" className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-charbon mb-2">Yoga Vinyasa</h2>
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
              <img src="/img/yoga-prenatal.webp" alt="Yoga Prénatal" className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-charbon mb-2">Yoga Prénatal/Postanatal</h2>
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
              <img src="/img/yoga-senior.webp" alt="Yoga Senior" className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-charbon mb-2">Yoga Senior</h2>
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


// src/pages/Home.jsx
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream text-charbon font-sans scroll-smooth">
      
      {/* Barre de navigation */}
      <header className="fixed w-full bg-cream shadow z-50">
  <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
    <a href="#accueil" className="text-xl font-bold text-sage hover:text-olive transition">
      SoLyo - Louise Durieu
    </a>

    {/* Bouton burger mobile */}
    <button
      className="md:hidden text-sage"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={
            menuOpen
              ? "M6 18L18 6M6 6l12 12" // croix
              : "M4 6h16M4 12h16M4 18h16" // burger
          }
        />
      </svg>
    </button>

    {/* Menu desktop */}
    <nav className="hidden md:flex space-x-6 text-sm">
      <a href="#about" className="hover:text-sage">Qui suis-je ?</a>
      <a href="#yoga" className="hover:text-sage">Yoga</a>
      <a href="#sophrologie" className="hover:text-sage">Sophrologie</a>
      <a href="#témoignages" className="hover:text-sage">Témoignages</a>
      <a href="#tarifs" className="hover:text-sage">Tarifs</a>
      <a href="#rdv" className="hover:text-sage">Rendez-vous</a>
      <a href="#contact" className="hover:text-sage">Contact</a>
    </nav>
  </div>

  {/* Menu mobile déroulant */}
  {menuOpen && (
    <div className="md:hidden bg-cream border-t px-4 pb-4">
      <nav className="flex flex-col space-y-2 text-sm text-sage">
        <a href="#about" onClick={() => setMenuOpen(false)}>Qui suis-je</a>
        <a href="#yoga" onClick={() => setMenuOpen(false)}>Yoga</a>
        <a href="#sophrologie" onClick={() => setMenuOpen(false)}>Sophrologie</a>
        <a href="#témoignages" onClick={() => setMenuOpen(false)}>Témoignages</a>
        <a href="#tarifs" onClick={() => setMenuOpen(false)}>Tarifs</a>
        <a href="#rdv" onClick={() => setMenuOpen(false)}>Rendez-vous</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
    </div>
  )}
</header>


      {/* Page d’accueil */}
     <section id="accueil"
  className="bg-cover bg-no-repeat bg-right text-white px-4 py-32 md:py-48 lg:py-56"
  style={{ backgroundImage: "url('/img/monstera-background.jpg')" }}
>
  <div className="bg-black/40 backdrop-blur-sm rounded-xl max-w-xl mx-auto text-center px-4 py-10">
    <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">SoLyo - Louise Durieu</h1>
    <h2 className="text-2xl mb-10">Sophrologie · Yoga Vinyasa · Prénatal · Senior</h2>
    <a
      href="#rdv"
      className="inline-block bg-sage hover:bg-olive text-white px-6 py-3 rounded-full text-sm transition"
    >
      Prendre rendez-vous
    </a>
  </div>
</section>


      {/* Qui suis-je ? */}
      <section id="about" className="bg-olive/20 py-20 px-6">
  <h2 className="text-3xl font-bold text-center text-charbon mb-8">Qui suis-je ?</h2>

  <div className="max-w-3xl mx-auto text-center text-charbon space-y-6 text-md leading-relaxed">
    <p>
      Je m'appelle Louise Durieu. Je suis depuis quelques années une vraie passionnée de bien-être et aime mettre mon énergie au profit de mes clients (sophronisants ou élèves de yoga).
      </p>
    <p>
      Après des années de danse et des métiers stressants en tout genre (notamment en cabinet d'expertise-comptable pendant 11 ans), c'est en 2015 que je me tourne naturellement vers le yoga pour ralentir et m'écouter davantage.
Je me forme et deviens professeur de yoga en 2021. 
</p>
    <p>
      C'est le début d'une envie d'aller plus loin encore et de compléter mes connaissances en yoga prénatal, yoga enfants et yoga seniors.
Depuis, j'approfondis régulièrement mes connaissances en formations notamment en anatomie pour accompagner au mieux toutes les morphologies et toutes les pathologies. 

En 2024, je quitte mon métier de responsable administrative et financière pour devenir sophrologue et partage maintenant mon temps entre ces deux activités bien-être (dans divers studios et au cabinet), et la musique qui est ma passion première.

    </p>
    <p>
      Je vous guide vers une pratique adaptée à vos besoins le tout dans la détente, la bonne humeur et la douceur que ce soit en yoga ou en sophrologie. L'union des deux disciplines peut mêler le mouvement conscient du yoga à l’écoute intérieure de la sophrologie pour proposer un accompagnement complet, respectueux et humain.
    </p>
    <p>
      Je travaille aussi bien avec des particuliers qu’en structures ou en entreprises, dans une logique d’ancrage, de mieux-être et d’autonomie.
    </p>
  </div>
</section>

      {/* Section Yoga */}
<section id="yoga" className="bg-white py-20 px-6">
  <h2 className="text-3xl font-bold text-center text-sage mb-8">Yoga</h2>
  <div className="grid gap-8 md:grid-cols-3">
    
    {/* Carte Vinyasa */}
    <div className="bg-cream rounded-xl shadow-md overflow-hidden flex flex-col">
      <img src="/img/yoga-vinyasa.jpg" alt="Yoga Vinyasa" className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-charbon mb-2">Yoga Vinyasa</h3>
        <p className="text-sage text-sm mb-4">
          Un yoga dynamique, basé sur la respiration et l'enchaînement des postures (asanas). Il favorise la souplesse, le renforcement musculaire, la concentration et l’ancrage.
        </p>
        <span className="mt-auto text-sm text-terracotta">Cours collectifs & individuels, quel que soit votre niveau</span>
      </div>
    </div>

    {/* Carte Prénatal */}
    <div className="bg-cream rounded-xl shadow-md overflow-hidden flex flex-col">
      <img src="/img/yoga-prenatal.jpg" alt="Yoga Prénatal" className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-charbon mb-2">Yoga Prénatal</h3>
        <p className="text-sage text-sm mb-4">
          Une pratique douce ou dynamique selon votre corps et vos envies, avec des postures adaptées, pour vivre la grossesse en conscience, soulager les tensions et se préparer à l’accouchement.
        </p>
        <span className="mt-auto text-sm text-terracotta">Cours en petit groupe & individuels, à tout stade de la grossesse</span>
      </div>
    </div>

    {/* Carte Senior */}
    <div className="bg-cream rounded-xl shadow-md overflow-hidden flex flex-col">
      <img src="/img/yoga-senior.jpg" alt="Yoga Senior" className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-charbon mb-2">Yoga Senior</h3>
        <p className="text-sage text-sm mb-4">
          Une pratique adaptée pour entretenir la mobilité, soulager les douleurs, gagner en souplesse, renforcer la masse musculaire, améliorer l’équilibre et cultiver le bien-être global.
        </p>
        <span className="mt-auto text-sm text-terracotta">Accessible à tous les âges et quelles que soient vos douleurs</span>
      </div>
    </div>

  </div>
</section>

{/* Section Sophrologie */}
<section id="sophrologie" className="bg-sage/10 py-20 px-6">
  <h2 className="text-3xl font-bold text-center text-terra mb-8">Sophrologie</h2>

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
      La sophrologie est une méthode psycho-corporelle douce qui aide à mieux gérer ses émotions, son stress, et à se reconnecter à soi.
    </p>
    <p className="text-md font-bold text-sage">
      Spécialisée en grossesse et maternité et en cancérologie, je vous accompagne quelque soit votre problématique : stress, sommeil, confiance, examens, addictions, nutrition...
    </p>
  </div>

  {/* Cartes thématiques */}
  <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
    {/* Carte 1 */}
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
      <h3 className="text-xl font-semibold mb-2">Stress & émotions</h3>
      <p className="text-sage text-sm">
        Apprendre à apaiser les tensions, retrouver le calme intérieur et prendre du recul dans le quotidien.
      </p>
    </div>

    {/* Carte 2 */}
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
      <h3 className="text-xl font-semibold mb-2">Grossesse & maternité</h3>
      <p className="text-sage text-sm">
        Préparer sereinement l’arrivée de bébé, se relier à son corps, à ses ressources et accueillir chaque étape avec confiance.
      </p>
    </div>

    {/* Carte 3 */}
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
      <h3 className="text-xl font-semibold mb-2">Cancer et pathologies</h3>
      <p className="text-sage text-sm">
        Mieux vivre sa maladie, son traitement, accepter et s'adapter à cette nouvelle vie. Je vous accompagne dès l'annonce de votre maladie ou de votre rechute. 
      </p>
    </div>
  </div>
</section>

{/* Section Témoignages */}
<section id="témoignages" className="bg-white py-20 px-6">
  <h2 className="text-3xl font-bold text-center text-terra mb-12">Témoignages</h2>
  <div className="max-w-3xl mx-auto px-0">
    <div dangerouslySetInnerHTML={{ __html: `<div class="elfsight-app-140b7d95-fb84-4e13-891c-bedfe62f33cd"></div>` }} />

  </div>
</section>


{/* Section Tarifs */}
<section id="tarifs" className="bg-olive/30 py-20 px-6">

  <h2 className="text-3xl font-bold text-center text-charbon mb-12">Tarifs</h2>
<div className="max-w-4xl mx-auto text-center text-charbon mb-12">
    <p className="text-md mb-4">
      Des ateliers découvertes de Sophrologie seront régulièrement organisés, n'hésitez pas à me contacter pour avoir les dates.
    </p>
    <p className="text-md text-sage">
      Il est possible de demander une séance mélangeant yoga et sophrologie, dans ce cas le tarif de la sophrologie s'applique.
    </p>
  </div>
  {/* Yoga */}
  <div className="max-w-5xl mx-auto mb-16">
    <h3 className="text-xl font-semibold text-charbon mb-6 border-b pb-2">Yoga</h3>
    <div className="grid gap-6 md:grid-cols-2">
      <div className="bg-cream rounded-lg p-6 shadow">
        <h4 className="font-semibold text-sage mb-2">Cours individuels</h4>
        <ul className="text-sm text-charbon space-y-1">
          <li>🧘‍♀️ Au cabinet : <span className="text-terracotta">50 €</span></li>
          <li>🏠 À domicile : <span className="text-terracotta">60 €</span></li>
        </ul>
      </div>
      <div className="bg-cream rounded-lg p-6 shadow">
        <h4 className="font-semibold text-sage mb-2">Cours collectifs</h4>
        <ul className="text-sm text-charbon space-y-1">
          <li>🧘‍♂️ Au cabinet : <span className="text-terracotta">50€/h (15€/personne à partir de 4 personnes)</span></li>
          <li>🏠 À domicile : <span className="text-terracotta">60€/h (15€/personne au delà de 4 personnes)</span></li>
        </ul>
      </div>
      

    </div>
  </div>

  {/* Sophrologie */}
  <div className="max-w-5xl mx-auto">
    <h3 className="text-xl font-semibold text-charbon mb-6 border-b pb-2">Sophrologie</h3>
    <div className="grid gap-6 md:grid-cols-2">
      <div className="bg-cream rounded-lg p-6 shadow">
        <h4 className="font-semibold text-sage mb-2">Séances individuelles</h4>
        <ul className="text-sm text-charbon space-y-1">
          <li>Au cabinet : <span className="text-terracotta">60 € (1ère séance : 65€)</span></li>
          <li>À domicile (proche cabinet) : <span className="text-terracotta">75 € (1ère séance : 85 €)</span></li>
        </ul>
      </div>
      <div className="bg-cream rounded-lg p-6 shadow">
        <h4 className="font-semibold text-sage mb-2">Séances collectives</h4>
        <ul className="text-sm text-charbon space-y-1">
          <li>En groupe (cabinet) : <span className="text-terracotta">20€/personne (3 personnes minimum)</span></li>
        </ul>
      </div>
    </div>
  </div>

  {/* Entreprises */}
  <div className="max-w-4xl mx-auto mt-12 text-center text-sm text-charbon">
    <p>
      💼 Cours et séances collectives en entreprise ou en structure (yoga ou sophrologie) : 
      <span className="text-terracotta font-medium"> devis sur demande</span>.
    </p>
  </div>
</section>

{/* Section Prendre rendez-vous */}
<section id="rdv" className="bg-cream py-20 px-6">
  <h2 className="text-3xl font-bold text-center text-terra mb-8">Prendre rendez-vous</h2>

  <div className="max-w-xl mx-auto text-center">
    <p className="text-charbon mb-6 text-sm">
      Choisissez simplement votre créneau selon vos disponibilités :
    </p>
    <a
      href="https://calendly.com/louise-solyo/seance-sophrologie?preview_source=et_card&month=2025-08"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-sage text-white px-6 py-3 rounded-full hover:bg-terracotta transition text-sm"
    >
      Réserver un créneau via Calendly
    </a>
  </div>
</section>


<section id="contact" className="bg-white py-20 px-6"> <h2 className="text-3xl font-bold text-center text-terra mb-8">Contact</h2> <div className="max-w-xl mx-auto text-center text-charbon mb-10"> <p className="text-md mb-2">Vous avez une question, vous souhaitez réserver ou simplement en savoir plus ?</p> <p className="text-sm text-sage">Je vous réponds avec plaisir dans les plus brefs délais 🌿</p> </div> <form className="max-w-xl mx-auto bg-white rounded-lg shadow p-6 space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-charbon mb-1">Nom</label> <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded p-2 text-sm" placeholder="Votre nom et prénom" /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-charbon mb-1">Email</label> <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded p-2 text-sm" placeholder="votreadresse@mail.com" /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-charbon mb-1">Message</label> <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded p-2 text-sm" placeholder="Écrivez-moi ce que vous souhaitez…"></textarea> </div> <button type="submit" className="bg-terracotta text-white px-6 py-2 rounded hover:bg-sage transition text-sm"> Envoyer le message </button> </form> <div className="mt-10 text-center text-sm text-charbon space-y-1"> <p>📧 louise@solyo.fr</p> <p>📞 06 61 36 68 09</p> <p>📍 2, rue Denis Papin 92600 Asnières-sur-Seine</p> </div> </section>

<footer className="bg-cream border-top border-olive/30 py-6 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-charbon">
    <p>© {new Date().getFullYear()} SoLyo – Louise Durieu. Tous droits réservés.</p>
    <div className="flex items-center gap-4">
      <a href="/mentions-legales" className="hover:text-sage underline">Mentions légales</a>
      <a href="#contact" className="hover:text-sage underline">Contact</a>
    </div>
  </div>
</footer>


    </div>
  );
  }
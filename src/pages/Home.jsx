// src/pages/Home.jsx
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // petit timeout pour laisser le DOM se charger
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      // si pas de hash, on remonte en haut
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

async function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;

  const data = {
    "form-name": form.getAttribute("name"), // doit être "contact"
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
    "bot-field": form["bot-field"]?.value || "",
  };

  try {
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(data),
    });
    window.location.href = "/merci.html"; // 🔒 redirection fiable
  } catch (err) {
    alert("Désolée, l’envoi a échoué. Réessayez dans un instant.");
  }
}

  return (
    <div className="min-h-screen bg-cream text-charbon font-sans scroll-smooth">
      {/* Barre de navigation */}
      <header className="fixed w-full bg-cream shadow z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 md:py-6 flex items-center relative">
          {/* Logo */}
          <a href="#accueil" className="absolute left-4 top-1/2 -translate-y-1/2">
            <img
              src="/img/logo-fonce.png"
              alt="SoLyo - Louise Durieu"
              className="h-14 md:h-24 w-auto opacity-90 pointer-events-auto"
            />
          </a>

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
                    ? "M6 18L18 6M6 6l12 12" // croix
                    : "M4 6h16M4 12h16M4 18h16" // burger
                }
              />
            </svg>
          </button>

          {/* Menu desktop */}
          <nav className="hidden md:flex ml-auto items-center gap-8 text-sm md:text-base lg:text-lg">
            <a href="#about" className="hover:text-sage">
              Qui suis-je ?
            </a>

            <Link to="/yoga" className="hover:text-sage">
              Yoga
            </Link>
            <Link to="/sophrologie" className="hover:text-sage">
              Sophrologie
            </Link>

            <a href="#temoignages" className="hover:text-sage">
              Témoignages
            </a>
            <a href="#tarifs" className="hover:text-sage">
              Tarifs
            </a>
            <a href="#rdv" className="hover:text-sage">
              Rendez-vous
            </a>
            <a href="#contact" className="hover:text-sage">
              Contact
            </a>
          </nav>
        </div>

        {/* Menu mobile déroulant */}
        {menuOpen && (
          <div className="md:hidden bg-cream border-t px-4 pb-4">
            <nav className="flex flex-col space-y-2 text-sm text-sage">
              <a href="#about" onClick={() => setMenuOpen(false)}>
                Qui suis-je
              </a>

              <Link to="/yoga" onClick={() => setMenuOpen(false)}>
                Yoga
              </Link>
              <Link to="/sophrologie" onClick={() => setMenuOpen(false)}>
                Sophrologie
              </Link>

              <a href="#temoignages" onClick={() => setMenuOpen(false)}>
                Témoignages
              </a>
              <a href="#tarifs" onClick={() => setMenuOpen(false)}>
                Tarifs
              </a>
              <a href="#rdv" onClick={() => setMenuOpen(false)}>
                Rendez-vous
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
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
    <h1 className="text-center mb-4 leading-tight">
  <img 
    src="/img/logo-blanc.png" 
    alt="SoLyo Logo" 
    className="mx-auto h-28 md:h-40 w-auto mb-0"
  />
  <a href="#about" className="font-perso text-3xl md:text-5xl hover:text-olive/90 transition">
    Louise Durieu</a>
</h1>
    <h2 className="text-xl md:text-2xl mt-4 mb-8 space-x-2">
  <a 
    href="#sophrologie" 
    className="text-white hover:text-olive/90 transition"
  >
    Sophrologie
  </a>
  <span className="hidden md:inline"> · </span>
  <br className="md:hidden"/>
  <a href="#yoga-vinyasa" className="text-white hover:text-olive/90 transition">Yoga Vinyasa</a>
  <span className="mx-1">·</span>

  <a href="#yoga-prenatal" className="text-white hover:text-olive/90 transition">Prénatal</a>
  <span className="mx-1">·</span>

  <a href="#yoga-senior" className="text-white hover:text-olive/90 transition">Senior</a>
</h2>

    <a
  href="https://calendly.com/louise-solyo/seance-sophrologie?preview_source=et_card&month=2025-08"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-sage hover:bg-olive text-white px-6 py-3 rounded-full text-sm transition"
>
  Prendre rendez-vous
</a>
  </div>
</section>


      {/* Qui suis-je ? */}
      <section id="about" className="bg-sage py-20 px-6">
  <h2 className="text-3xl font-bold text-center text-white mb-8">Qui suis-je ?</h2>

  <div className="max-w-5xl mx-auto space-y-10">
    {/* Bloc haut : photo + 2 premiers paragraphes */}
<div className="grid md:grid-cols-3 gap-10">
      {/* Photo */}
      <div className="md:col-span-1 flex items-center">
        <img 
          src="/img/moi.jpg" 
          alt="Louise Durieu" 
          className="w-full h-auto rounded-xl object-cover shadow-lg"
        />
      </div>
   {/* Texte à droite */}
     <div className="md:col-span-2 space-y-6 text-md text-white flex flex-col justify-center leading-relaxed text-justify">
    <p>
      Je m'appelle Louise Durieu. J'ai toujours eu à cœur de prendre soin des autres et aime mettre mon énergie au profit de mes clients (sophronisants ou élèves de yoga).
      </p>
    <p>
      Après des années de danse (niveau professionnel, castings...) et de comptabilité et finances en parallèle, c'est en 2015 que je me tourne vers le yoga pour ralentir et m'écouter davantage.
Je me forme et deviens professeur de yoga en 2021. 
</p>
    <p>
      Je me forme la même année en yoga prénatal, yoga enfants et yoga seniors. L'expérience inoubliable de ma grossesse en 2019 me donne particulièrement envie d'accompagner les femmes enceintes et venant d'accoucher.
Depuis, je continue de me former régulièrement notamment en anatomie pour accompagner au mieux toutes les morphologies et toutes les pathologies. 

En 2024, je quitte mon métier de responsable administrative et financière pour devenir sophrologue et partage maintenant mon temps entre ces deux activités bien-être (dans divers studios et au cabinet), et la musique qui est ma passion première.

    </p>
    </div>
    </div>

    {/* Bloc bas : texte pleine largeur */}
    <div className="space-y-6 text-md text-white leading-relaxed text-justify">
    <p>
      Je vous guide vers une pratique adaptée à vos besoins le tout dans la détente, la bonne humeur et la douceur que ce soit en yoga ou en sophrologie. L'union des deux disciplines peut mêler le mouvement conscient du yoga à l’écoute intérieure de la sophrologie pour proposer un accompagnement complet, respectueux et humain.
    </p>
    <p>
      Je travaille aussi bien avec des particuliers qu’en structures ou en entreprises, dans une logique d’ancrage, de mieux-être et d’autonomie.
    </p>
    </div>
  </div>
</section>

      {/* Section Yoga */}
<section id="yoga" className="bg-white py-20 px-6">
  <h2 className="text-3xl font-bold text-center text-sage mb-8">Yoga</h2>

  <div className="grid gap-8 md:grid-cols-3">
    {/* Carte Vinyasa */}
    <div id="yoga-vinyasa" className="-mt-28 pt-28 md:-mt-36 md:pt-36">
      <div className="bg-cream rounded-xl shadow-md overflow-hidden flex flex-col">
        <img src="/img/yoga-vinyasa.jpg" alt="Yoga Vinyasa" className="w-full h-48 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-charbon mb-2">Yoga Vinyasa</h3>
          <p className="text-sage text-sm mb-4">
            Un yoga dynamique, basé sur la respiration et l'enchaînement des postures (asanas).
            Il favorise la souplesse, le renforcement musculaire, la concentration et l’ancrage.
          </p>
          <span className="mt-auto text-sm text-charbon">
            Cours collectifs & individuels, quel que soit votre niveau
          </span>
        </div>
      </div>
    </div>

    {/* Carte Prénatal */}
    <div id="yoga-prenatal" className="-mt-28 pt-28 md:-mt-36 md:pt-36">
      <div className="bg-cream rounded-xl shadow-md overflow-hidden flex flex-col">
        <img src="/img/yoga-prenatal.jpg" alt="Yoga Prénatal" className="w-full h-48 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-charbon mb-2">Yoga Prénatal</h3>
          <p className="text-sage text-sm mb-4">
            Une pratique douce ou dynamique selon votre corps et vos envies, avec des postures adaptées,
            pour vivre la grossesse en conscience, soulager les tensions et se préparer à l’accouchement.
          </p>
          <span className="mt-auto text-sm text-charbon">
            Cours en petit groupe & individuels, à tout stade de la grossesse
          </span>
        </div>
      </div>
    </div>

    {/* Carte Senior */}
    <div id="yoga-senior" className="-mt-28 pt-28 md:-mt-36 md:pt-36">
      <div className="bg-cream rounded-xl shadow-md overflow-hidden flex flex-col">
        <img src="/img/yoga-senior.jpg" alt="Yoga Senior" className="w-full h-48 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-charbon mb-2">Yoga Senior</h3>
          <p className="text-sage text-sm mb-4">
            Une pratique adaptée pour entretenir la mobilité, soulager les douleurs, gagner en souplesse,
            renforcer la masse musculaire, améliorer l’équilibre et cultiver le bien-être global.
          </p>
          <span className="mt-auto text-sm text-charbon">
            Accessible à tous les âges et quelles que soient vos douleurs
          </span>
        </div>
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
    <p className="text-md font-bold text-terra mb-4">
      Qu'est ce que la sophrologie ?
    </p>
    <p className="text-md mb-4">
      La sophrologie est une méthode psycho-corporelle douce et adaptable à tous, composée de techniques guidées par la voix du sophrologue. On y retrouve des exercices de respiration, des mouvements corporels doux et des vivances positives (la vivance, c'est vivre ce qui se vit en nous, avec nos 5 sens).
    </p>
     <p className="text-md mb-4">
      La sophrologie permet en harmonisant le corps et l'esprit, de découvrir qui l'on est vraiment, ses propres valeurs, et de trouver nos propres ressources, toutes nos capacités pour mieux vivre au présent, dépasser chaque obstacle de la vie avec plus de force et de sérénité, et se projeter de façon plus positive dans notre vie future.
    </p>
    <p className="text-md font-bold text-sage">
      <p>Spécialisée en grossesse et maternité, et en cancérologie, je peux vous accompagner quelle que soit votre problématique : stress, sommeil, confiance, examens, addictions, nutrition...</p>
      
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

{/* Section Temoignages */}
<section id="temoignages" className="bg-white py-20 px-6">
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
          <li>🧘‍♀️ Au cabinet : <span className="text-charbon">50 €</span></li>
          <li>🏠 À domicile : <span className="text-charbon">60 €</span></li>
        </ul>
      </div>
      <div className="bg-cream rounded-lg p-6 shadow">
        <h4 className="font-semibold text-sage mb-2">Cours collectifs</h4>
        <ul className="text-sm text-charbon space-y-1">
          <li>🏠 À domicile : <span className="text-charbon">60€/h (15€/personne au delà de 4 personnes)</span></li>
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
          <li>🧘‍♂️ Au cabinet : <span className="text-charbon">60 € (1ère séance : 65€)</span></li>
          <li>🏠 À domicile (proche cabinet) : <span className="text-charbon">75 € (1ère séance : 85 €)</span></li>
          <li>Tarifs réduits étudiants et demandeurs d'emploi sur demande <span className="text-terra"></span></li>
        </ul>
      </div>
      <div className="bg-cream rounded-lg p-6 shadow">
        <h4 className="font-semibold text-sage mb-2">Séances collectives</h4>
        <ul className="text-sm text-charbon space-y-1">
          <li>🧘‍♂️ En groupe (cabinet) : <span className="text-charbon">20€/personne (3 personnes minimum)</span></li>
        </ul>
      </div>
    </div>
  </div>

  {/* Entreprises */}
  <div className="max-w-4xl mx-auto mt-12 text-center text-sm text-charbon">
    <p>
      💼 Cours et séances collectives en entreprise ou en structure (yoga ou sophrologie) : 
      <span className="text-terra font-medium"> devis sur demande</span>.
    </p>
  </div>
</section>

{/* Section Prendre rendez-vous */}
<section id="rdv" className="bg-cream py-20 px-6">
  <h2 className="text-3xl font-bold text-center text-terra mb-8">Prendre rendez-vous</h2>

  <div className="max-w-4xl mx-auto text-center">
    <p className="text-charbon mb-6 text-sm">
      Choisissez simplement votre créneau selon vos disponibilités pour les rendez-vous au cabinet :
    </p>
    <a
      href="https://calendly.com/louise-solyo/seance-sophrologie?preview_source=et_card&month=2025-08"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-sage text-white px-6 py-3 rounded-full hover:bg-terra transition text-sm"
    >
      Réserver un créneau via Calendly
    </a>
    <p className="mt-10 text-charbon text-sm">
      Pour les rendez-vous en visio ou à domicile, merci de me contacter par téléphone ou par mail afin de définir le créneau qui vous convient.
    </p>
  </div>
</section>


{/* Section Contact */}
<section id="contact" className="bg-white py-20 px-6">
  <h2 className="text-3xl font-bold text-center text-terra mb-8">Contact</h2>

  <div className="max-w-xl mx-auto text-center text-charbon mb-10">
    <p className="text-md mb-2">
      Vous avez une question, vous souhaitez réserver ou simplement en savoir plus ?
    </p>
    <p className="text-sm text-sage">
      Je vous réponds avec plaisir dans les plus brefs délais 🌿
    </p>
  </div>

  {/* 🔽 C’est uniquement CE formulaire qu’on remplace */}
  <form
    name="contact"
    method="POST"
    data-netlify="true"
    netlify-honeypot="bot-field"
    onSubmit={handleSubmit}
    action="/"
    className="max-w-xl mx-auto bg-cream rounded-lg shadow p-6 space-y-4"
  >
    <input type="hidden" name="form-name" value="contact" />
    <p className="hidden">
      <label>Ne pas remplir : <input name="bot-field" /></label>
    </p>

    <div>
      <label htmlFor="name" className="block text-sm font-medium text-charbon mb-1">Nom</label>
      <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded p-2 text-sm" placeholder="Votre nom et prénom" required />
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium text-charbon mb-1">Email</label>
      <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded p-2 text-sm" placeholder="votreadresse@mail.com" required />
    </div>

    <div>
      <label htmlFor="message" className="block text-sm font-medium text-charbon mb-1">Message</label>
      <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded p-2 text-sm" placeholder="Écrivez-moi ce que vous souhaitez…" required />
    </div>

    <button type="submit" className="bg-terra text-white px-6 py-2 rounded hover:bg-sage transition text-sm">
      Envoyer le message
    </button>
  </form>

  {/* tes infos fixes sous le formulaire */}
  <div className="mt-10 text-center text-sm text-charbon space-y-1">
  <p>📧 <a href="mailto:louise@solyo.fr" className="hover:text-sage underline">louise@solyo.fr</a></p>
  <p>📞 <a href="tel:+33661366809" className="hover:text-sage underline">06 61 36 68 09</a></p>
  <p>📍 <a href="https://www.google.com/maps?q=26+Rue+de+Châteaudun,+92250+La+Garenne-Colombes" target="_blank" rel="noopener noreferrer" className="hover:text-sage underline">26, rue de Châteaudun 92250 La Garenne-Colombes</a></p>
</div>

</section>

      <footer className="bg-cream border-t border-olive/30 py-6 px-6">
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

// src/pages/Home.jsx
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sophroOpen, setSophroOpen] = useState(false);
  const location = useLocation();
  const temoignagesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const script = document.createElement("script");
          script.src = "https://static.elfsight.com/platform/platform.js";
          script.async = true;
          document.body.appendChild(script);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (temoignagesRef.current) observer.observe(temoignagesRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => { el.scrollIntoView({ behavior: "smooth" }); }, 100);
      }
    } else {
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
      "form-name": form.getAttribute("name"),
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
      window.location.href = "/merci.html";
    } catch (err) {
      alert("Désolée, l'envoi a échoué. Réessayez dans un instant.");
    }
  }

  return (
    <>
      <Helmet>
        <title>Sophrologue et professeure de yoga à La Garenne-Colombes | SoLyo</title>
        <meta name="description" content="Louise Durieu, sophrologue et professeure de yoga à La Garenne-Colombes. Yoga Vinyasa, Prénatal, Senior. Sophrologie stress, grossesse, cancérologie. Massage bien-être prénatal dès juin 2026. Cabinet, domicile ou visio." />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "SoLyo – Louise Durieu",
            "description": "Sophrologie et yoga à La Garenne-Colombes",
            "url": "https://www.solyo.fr",
            "telephone": "+33661366809",
            "email": "louise@solyo.fr",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "26 rue de Châteaudun",
              "addressLocality": "La Garenne-Colombes",
              "postalCode": "92250",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 48.9047,
              "longitude": 2.2414
            },
            "serviceArea": ["La Garenne-Colombes", "Courbevoie", "Colombes", "Bois-Colombes", "Asnières-sur-Seine"]
          }
        `}</script>
        <link rel="canonical" href="https://www.solyo.fr/" />
      </Helmet>

      <div className="min-h-screen bg-cream text-charbon font-sans scroll-smooth">

        {/* Navigation */}
        <Navbar />

        {/* HERO — fond monstera + encadré accroche */}
        <section id="accueil"
          className="bg-cover bg-no-repeat bg-right text-white px-4 py-20 md:py-32"
          style={{ backgroundImage: "url('/img/monstera-background.webp')" }}
        >
          <div className="bg-black/40 backdrop-blur-sm rounded-xl max-w-xl mx-auto text-center px-4 py-10">
            <img src="/img/logo-blanc.webp" alt="SoLyo Logo" className="mx-auto h-28 md:h-40 w-auto mb-3" />
<p className="font-persotext-sm md:text-base text-white/80 tracking-wide mb-8">
  Louise Durieu — Sophrologue & Professeure de Yoga
</p>
<h1 className="text-xl md:text-2xl font-semibold text-white leading-snug mb-4">
  Vous vous sentez stressé·e, débordé·e, épuisé·e,<br />vous traversez une période difficile ?
</h1>
            <p className="text-lg md:text-xl text-white/90 font-medium mb-2">
              Retrouvez calme, équilibre et confiance —
            </p>
            <p className="text-lg md:text-xl text-white/90 font-medium mb-8">
              à chaque étape de votre vie.
            </p>
            <a
              href="https://www.resalib.fr/praticien/126130-louise-durieu-sophrologue-la-garenne-colombes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-sage hover:bg-olive text-white px-6 py-3 rounded-full text-sm transition"
            >
              Prendre rendez-vous
            </a>
          </div>
        </section>

        {/* CARTES NICHES */}
        <section className="bg-sage/10 py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-terra mb-4">Vous vous reconnaissez ?</h2>
            <p className="text-center text-charbon text-sm mb-10">Chaque accompagnement est unique. Choisissez ce qui vous correspond.</p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Link to="/sophrologie" className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition group">
                <span className="text-3xl mb-3">🤰</span>
                <h3 className="text-lg font-semibold text-charbon mb-2 group-hover:text-terra transition">Grossesse & maternité</h3>
                <p className="text-sage text-sm flex-grow">Préconception, PMA, grossesse, accouchement, post-partum… un accompagnement doux à chaque étape.</p>
                <span className="mt-4 text-xs text-terra font-medium">En savoir plus →</span>
              </Link>
              <Link to="/sophrologie" className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition group">
                <span className="text-3xl mb-3">🌬️</span>
                <h3 className="text-lg font-semibold text-charbon mb-2 group-hover:text-terra transition">Stress & anxiété</h3>
                <p className="text-sage text-sm flex-grow">Retrouver le calme, mieux dormir, gérer les émotions et reprendre confiance en vous au quotidien.</p>
                <span className="mt-4 text-xs text-terra font-medium">En savoir plus →</span>
              </Link>
              <Link to="/sophrologie" className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition group">
                <span className="text-3xl mb-3">🎗️</span>
                <h3 className="text-lg font-semibold text-charbon mb-2 group-hover:text-terra transition">Cancer & maladie</h3>
                <p className="text-sage text-sm flex-grow">Mieux vivre l'annonce, les traitements et la reconstruction. Un espace sécurisant pour traverser l'épreuve.</p>
                <span className="mt-4 text-xs text-terra font-medium">En savoir plus →</span>
              </Link>
              <Link to="/yoga" className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition group">
                <span className="text-3xl mb-3">🧘</span>
                <h3 className="text-lg font-semibold text-charbon mb-2 group-hover:text-terra transition">Yoga & bien-être</h3>
                <p className="text-sage text-sm flex-grow">Yoga Vinyasa, prénatal ou senior — pour bouger en conscience, à votre rythme, quel que soit votre niveau.</p>
                <span className="mt-4 text-xs text-terra font-medium">En savoir plus →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* MASSAGE PRÉNATAL */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <img src="/img/massage-prenatal.webp" alt="Massage bien-être prénatal"
                className="rounded-2xl shadow-md w-full h-72 object-cover" />
              <div className="flex flex-col gap-4">
                <span className="inline-block bg-terra/10 text-terra text-xs font-semibold px-3 py-1 rounded-full w-fit">
                  🌿 Nouveauté — disponible dès juin 2026
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-charbon">
                  Massage bien-être prénatal, postnatal & bébé
                </h2>
                <p className="text-charbon text-sm leading-relaxed">
                  Un moment de douceur et de détente totale, entièrement dédié aux futures et jeunes mamans, ainsi qu'aux bébés. Une pratique douce, respectueuse et apaisante pour accompagner ce temps précieux.
                </p>
                <p className="text-sage text-sm italic">
                  Les séances débuteront en juin 2026 au cabinet de La Garenne-Colombes.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  <Link to="/carte-cadeau"
  className="inline-block bg-terra hover:bg-sage text-white px-6 py-3 rounded-full text-sm transition text-center">
  🎁 Offrir une carte cadeau
</Link>
                  <a href="#contact"
                    className="inline-block border border-terra text-terra hover:bg-terra hover:text-white px-6 py-3 rounded-full text-sm transition text-center">
                    📋 Ajouter à une liste de naissance
                  </a>
                </div>
                <p className="text-xs text-charbon/60 mt-1">Pour toute demande, contactez-moi directement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SOPHROLOGIE */}
        <section id="sophrologie" className="bg-sage/10 py-20 px-6">
          <h2 className="text-3xl font-bold text-center text-terra mb-8">Sophrologie</h2>
          <div className="max-w-4xl mx-auto mb-10">
            <img src="/img/sophrologie-illustration.webp" alt="Séance de sophrologie" className="rounded-xl w-full h-64 object-cover shadow-md" />
          </div>
          <div className="max-w-4xl mx-auto text-center text-charbon mb-12">
            <p className="text-md font-bold text-terra mb-4">Qu'est-ce que la sophrologie ?</p>
            <p className="text-md mb-4">
              La sophrologie est une méthode psycho-corporelle douce et adaptable à tous, composée de techniques guidées par la voix du sophrologue. On y retrouve des exercices de respiration, des mouvements corporels doux et des vivances positives (la vivance, c'est vivre ce qui se vit en nous, avec nos 5 sens).
            </p>
            <p className="text-md mb-4">
              La sophrologie permet en harmonisant le corps et l'esprit, de découvrir qui l'on est vraiment, ses propres valeurs, et de trouver nos propres ressources, toutes nos capacités pour mieux vivre au présent, dépasser chaque obstacle de la vie avec plus de force et de sérénité, et se projeter de façon plus positive dans notre vie future.
            </p>
            <p className="text-md font-bold text-sage">
              Spécialisée en grossesse et maternité, et en cancérologie, je peux vous accompagner quelle que soit votre problématique : stress, sommeil, confiance, examens, addictions, nutrition...
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Stress & émotions</h3>
              <p className="text-sage text-sm">Apprendre à apaiser les tensions, retrouver le calme intérieur et prendre du recul dans le quotidien.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Grossesse & maternité</h3>
              <p className="text-sage text-sm">Préparer sereinement l'arrivée de bébé, se relier à son corps, à ses ressources et accueillir chaque étape avec confiance.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Cancer et pathologies</h3>
              <p className="text-sage text-sm">Mieux vivre sa maladie, son traitement, accepter et s'adapter à cette nouvelle vie. Je vous accompagne dès l'annonce de votre maladie ou de votre rechute.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/sophrologie" className="text-sage underline hover:text-olive text-sm">En savoir plus sur la Sophrologie →</Link>
          </div>
        </section>

        {/* YOGA */}
        <section id="yoga" className="bg-white py-20 px-6">
          <h2 className="text-3xl font-bold text-center text-sage mb-8">Yoga</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div id="yoga-vinyasa" className="-mt-28 pt-28 md:-mt-36 md:pt-36">
              <div className="bg-cream rounded-xl shadow-md overflow-hidden flex flex-col">
                <img src="/img/yoga-vinyasa.webp" alt="Yoga Vinyasa" className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-charbon mb-2">Yoga Vinyasa</h3>
                  <p className="text-sage text-sm mb-4">Un yoga dynamique, basé sur la respiration et l'enchaînement des postures (asanas). Il favorise la souplesse, le renforcement musculaire, la concentration et l'ancrage.</p>
                  <span className="mt-auto text-sm text-charbon">Cours collectifs & individuels, quel que soit votre niveau</span>
                </div>
              </div>
            </div>
            <div id="yoga-prenatal" className="-mt-28 pt-28 md:-mt-36 md:pt-36">
              <div className="bg-cream rounded-xl shadow-md overflow-hidden flex flex-col">
                <img src="/img/yoga-prenatal.webp" alt="Yoga Prénatal" className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-charbon mb-2">Yoga Prénatal</h3>
                  <p className="text-sage text-sm mb-4">Une pratique douce ou dynamique selon votre corps et vos envies, avec des postures adaptées, pour vivre la grossesse en conscience, soulager les tensions et se préparer à l'accouchement.</p>
                  <span className="mt-auto text-sm text-charbon">Cours en petit groupe & individuels, à tout stade de la grossesse</span>
                </div>
              </div>
            </div>
            <div id="yoga-senior" className="-mt-28 pt-28 md:-mt-36 md:pt-36">
              <div className="bg-cream rounded-xl shadow-md overflow-hidden flex flex-col">
                <img src="/img/yoga-senior.webp" alt="Yoga Senior" className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-charbon mb-2">Yoga Senior</h3>
                  <p className="text-sage text-sm mb-4">Une pratique adaptée pour entretenir la mobilité, soulager les douleurs, gagner en souplesse, renforcer la masse musculaire, améliorer l'équilibre et cultiver le bien-être global.</p>
                  <span className="mt-auto text-sm text-charbon">Accessible à tous les âges et quelles que soient vos douleurs</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/yoga" className="text-sage underline hover:text-olive text-sm">En savoir plus sur le Yoga →</Link>
          </div>
        </section>

        {/* QUI SUIS-JE */}
        <section id="about" className="bg-sage py-20 px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Qui suis-je ?</h2>
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="grid md:grid-cols-3 gap-10">
              <div className="md:col-span-1 flex items-center">
                <img src="/img/moi.webp" alt="Louise Durieu" className="w-full h-auto rounded-xl object-cover shadow-lg" />
              </div>
              <div className="md:col-span-2 space-y-6 text-md text-white flex flex-col justify-center leading-relaxed text-justify">
                <p>Je m'appelle Louise Durieu. J'ai toujours eu à cœur de prendre soin des autres et aime mettre mon énergie au profit de mes clients (sophronisants ou élèves de yoga).</p>
                <p>Après des années de danse (niveau professionnel, castings...) et de comptabilité et finances en parallèle, c'est en 2015 que je me tourne vers le yoga pour ralentir et m'écouter davantage. Je me forme et deviens professeur de yoga en 2021.</p>
                <p>Je me forme la même année en yoga prénatal, yoga enfants et yoga seniors. L'expérience inoubliable de ma grossesse en 2019 me donne particulièrement envie d'accompagner les femmes enceintes et venant d'accoucher. Depuis, je continue de me former régulièrement notamment en anatomie pour accompagner au mieux toutes les morphologies et toutes les pathologies. En 2024, je quitte mon métier de responsable administrative et financière pour devenir sophrologue et partage maintenant mon temps entre ces deux activités bien-être (dans divers studios et au cabinet), et la musique qui est ma passion première.</p>
              </div>
            </div>
            <div className="space-y-6 text-md text-white leading-relaxed text-justify">
              <p>Je vous guide vers une pratique adaptée à vos besoins le tout dans la détente, la bonne humeur et la douceur que ce soit en yoga ou en sophrologie. L'union des deux disciplines peut mêler le mouvement conscient du yoga à l'écoute intérieure de la sophrologie pour proposer un accompagnement complet, respectueux et humain.</p>
              <p>Je travaille aussi bien avec des particuliers qu'en structures ou en entreprises, dans une logique d'ancrage, de mieux-être et d'autonomie.</p>
            </div>
          </div>
        </section>

        {/* TÉMOIGNAGES */}
<section id="temoignages" className="bg-white py-20 px-6">
  <h2 className="text-3xl font-bold text-center text-terra mb-12">Témoignages</h2>

  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">

    {/* Christine */}
    <div className="bg-cream rounded-xl shadow-md p-6 flex flex-col gap-3">
      <div className="flex items-center gap-1 text-yellow-400 text-sm">★★★★★</div>
      <p className="text-charbon text-sm leading-relaxed italic flex-grow">
        "En plus d'être une prof de Yoga exceptionnelle, en Sophrologie Louise a été d'une très grande aide pour mon fils qui faisait de grosses crises d'angoisse très handicapantes. Il est à présent capable de les gérer et a retrouvé confiance en lui. Disponible, à l'écoute, bienveillante et très professionnelle. Je recommande à 150%."
      </p>
      <div className="mt-2">
        <p className="text-sm font-semibold text-charbon">Christine A.</p>
        <p className="text-xs text-sage">Sophrologie & Yoga · octobre 2025</p>
      </div>
    </div>

    {/* Amandine */}
    <div className="bg-cream rounded-xl shadow-md p-6 flex flex-col gap-3">
      <div className="flex items-center gap-1 text-yellow-400 text-sm">★★★★★</div>
      <p className="text-charbon text-sm leading-relaxed italic flex-grow">
        "Louise est attentive, à l'écoute et apaisante. Elle prend le temps d'écouter les ressentis et s'adapte constamment. Grâce à ses enseignements, il est possible de pratiquer seule les séances, ce qui permet de refaire les exercices en autonomie. J'ai vu d'immenses bienfaits par rapport au stress que je ressentais, que je sais dorénavant maîtriser davantage. Un énorme merci pour son professionnalisme et sa gentillesse."
      </p>
      <div className="mt-2">
        <p className="text-sm font-semibold text-charbon">Amandine D.</p>
        <p className="text-xs text-sage">Sophrologie · août 2025</p>
      </div>
    </div>

    {/* Inès */}
    <div className="bg-cream rounded-xl shadow-md p-6 flex flex-col gap-3">
      <div className="flex items-center gap-1 text-yellow-400 text-sm">★★★★★</div>
      <p className="text-charbon text-sm leading-relaxed italic flex-grow">
        "Les cours de yoga prénatal que je suis avec Louise depuis 4 mois sont devenus un indispensable de ma préparation ! Avec bienveillance, douceur et humour, Louise guide chaque participante individuellement. En plus des séances, je ressors toujours avec des exercices utiles pour mieux vivre ma grossesse. Louise intègre même quelques aspects de sophrologie pour encore plus de bien-être. Je recommande à 100% !"
      </p>
      <div className="mt-2">
        <p className="text-sm font-semibold text-charbon">Inès D.</p>
        <p className="text-xs text-sage">Yoga prénatal · février 2026</p>
      </div>
    </div>

    {/* Cérine */}
    <div className="bg-cream rounded-xl shadow-md p-6 flex flex-col gap-3">
      <div className="flex items-center gap-1 text-yellow-400 text-sm">★★★★★</div>
      <p className="text-charbon text-sm leading-relaxed italic flex-grow">
        "J'ai appris à mieux gérer mon stress, à me reconnecter à mon corps et à retrouver un vrai apaisement intérieur. Sa voix, sa présence et sa capacité d'écoute m'ont permis de me sentir en confiance très rapidement. Elle propose aussi des cours de yoga, que j'ai testés et que je recommande vivement : ils sont parfaitement complémentaires à la sophrologie. Un accompagnement précieux."
      </p>
      <div className="mt-2">
        <p className="text-sm font-semibold text-charbon">Cérine V.</p>
        <p className="text-xs text-sage">Sophrologie & Yoga · mai 2025</p>
      </div>
    </div>

    {/* Justine */}
    <div className="bg-cream rounded-xl shadow-md p-6 flex flex-col gap-3">
      <div className="flex items-center gap-1 text-yellow-400 text-sm">★★★★★</div>
      <p className="text-charbon text-sm leading-relaxed italic flex-grow">
        "J'ai commencé le yoga avec Louise il y a trois ans, ses séances sont à la fois douces et intenses, toujours adaptées au rythme de chacun. Louise est bienveillante, à l'écoute, et toujours dans le juste équilibre entre effort, détente et ancrage. Un vrai moment pour soi, que je recommande. 🧘🏼‍♀️"
      </p>
      <div className="mt-2">
        <p className="text-sm font-semibold text-charbon">Justine M.</p>
        <p className="text-xs text-sage">Yoga · juillet 2025</p>
      </div>
    </div>

    {/* Julia */}
    <div className="bg-cream rounded-xl shadow-md p-6 flex flex-col gap-3">
      <div className="flex items-center gap-1 text-yellow-400 text-sm">★★★★★</div>
      <p className="text-charbon text-sm leading-relaxed italic flex-grow">
        "Prendre un cours de yoga avec Louise, c'est un doux mélange de dynamisme, d'intensité, de douceur et de bien-être ! On est de suite embarqué par sa voix, sa connaissance du corps. Son enseignement est adapté à tous les corps, à tous les niveaux. Elle est aussi drôle que douce et chacun de ses cours nous permet de nous reconnecter à nos sensations."
      </p>
      <div className="mt-2">
        <p className="text-sm font-semibold text-charbon">Julia D.</p>
        <p className="text-xs text-sage">Yoga · juin 2025</p>
      </div>
    </div>

  </div>

  {/* Lien Google */}
  <div className="text-center mt-10">
    <a
      href="https://www.google.com/maps/place/Louise+DURIEU+-+Sophrologue+et+Professeure+de+Yoga+-+SoLyo/@48.9097607,2.2422961,714m/data=!3m1!1e3!4m8!3m7!1s0x47e66fc222ea6bf9:0x6718d404075ce752!8m2!3d48.9097607!4d2.244871!9m1!1b1!16s%2Fg%2F11x61vpj04?entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sage hover:text-olive underline text-sm transition"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
      </svg>
      Voir plus d'avis sur Google →
    </a>
  </div>
</section>


        {/* TARIFS */}
        <section id="tarifs" className="bg-olive/30 py-20 px-6">
          <h2 className="text-3xl font-bold text-center text-charbon mb-12">Tarifs</h2>
          <div className="max-w-4xl mx-auto text-center text-charbon mb-12">
            <p className="text-md mb-4">Des ateliers découvertes de Sophrologie seront régulièrement organisés, n'hésitez pas à me contacter pour avoir les dates.</p>
            <p className="text-md text-sage">Il est possible de demander une séance mélangeant yoga et sophrologie, dans ce cas le tarif de la sophrologie s'applique.</p>
          </div>
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
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl font-semibold text-charbon mb-6 border-b pb-2">Sophrologie</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-cream rounded-lg p-6 shadow">
                <h4 className="font-semibold text-sage mb-2">Séances individuelles</h4>
                <ul className="text-sm text-charbon space-y-1">
                  <li>🧘‍♂️ Au cabinet : <span className="text-charbon">60 € (1ère séance : 65€)</span></li>
                  <li>🏠 À domicile (proche cabinet) : <span className="text-charbon">75 € (1ère séance : 85 €)</span></li>
                </ul>
                <p className="text-sm text-sage mt-3 italic">Étudiants / Demandeur d'emploi : -15€ par séance</p>
              </div>
              <div className="bg-cream rounded-lg p-6 shadow">
                <h4 className="font-semibold text-sage mb-2">Accompagnements en programme</h4>
                <ul className="text-sm text-charbon space-y-1">
                  <li>• 6 séances : <span className="text-charbon">330 €</span> <span className="text-terra">(au lieu de 365 €)</span></li>
                  <li>• 8 séances : <span className="text-charbon">420 €</span> <span className="text-terra">(au lieu de 485 €)</span></li>
                  <li>• 10 séances : <span className="text-charbon">520 €</span> <span className="text-terra">(au lieu de 605 €)</span></li>
                </ul>
                <p className="text-sm text-sage mt-3 italic">Possibilité de paiement en 2 fois</p>
              </div>
              <div className="bg-cream rounded-lg p-6 shadow">
                <h4 className="font-semibold text-sage mb-2">Séances collectives</h4>
                <ul className="text-sm text-charbon space-y-1">
                  <li>🧘‍♂️ En groupe (cabinet) : <span className="text-charbon">20€/personne (3 personnes minimum)</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto mt-12 text-center text-sm text-charbon">
            <p>💼 Cours et séances collectives en entreprise ou en structure (yoga ou sophrologie) : <span className="text-terra font-medium">devis sur demande</span>.</p>
          </div>
        </section>

        {/* RENDEZ-VOUS */}
        <section id="rdv" className="bg-cream py-20 px-6">
          <h2 className="text-3xl font-bold text-center text-terra mb-8">Prendre rendez-vous</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-charbon mb-6 text-sm">Choisissez simplement votre créneau selon vos disponibilités pour les rendez-vous au cabinet :</p>
            <a href="https://www.resalib.fr/praticien/126130-louise-durieu-sophrologue-la-garenne-colombes" target="_blank" rel="noopener noreferrer"
              className="bg-sage text-white px-6 py-3 rounded-full hover:bg-terra transition text-sm">
              Réserver un créneau via Résalib
            </a>
            <p className="mt-10 text-charbon text-sm">Pour les rendez-vous en visio ou à domicile, merci de me contacter par téléphone ou par mail afin de définir le créneau qui vous convient.</p>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-white py-20 px-6">
          <h2 className="text-3xl font-bold text-center text-terra mb-8">Contact</h2>
          <div className="max-w-xl mx-auto text-center text-charbon mb-10">
            <p className="text-md mb-2">Vous avez une question, vous souhaitez réserver ou simplement en savoir plus ?</p>
            <p className="text-sm text-sage">Je vous réponds avec plaisir dans les plus brefs délais 🌿</p>
          </div>
          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} action="/"
            className="max-w-xl mx-auto bg-cream rounded-lg shadow p-6 space-y-4">
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden"><label>Ne pas remplir : <input name="bot-field" /></label></p>
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
            <button type="submit" className="bg-terra text-white px-6 py-2 rounded hover:bg-sage transition text-sm">Envoyer le message</button>
          </form>
          <div className="flex justify-center items-center gap-4 mt-4 w-full">
            <a href="https://www.instagram.com/louise_solyo_yoga_sophro/" target="_blank" rel="noopener noreferrer" aria-label="Instagram SoLyo">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 opacity-70 hover:opacity-100 transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/louise-durieu-0925301a3/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Louise Durieu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 opacity-70 hover:opacity-100 transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
          <div className="mt-10 text-center text-sm text-charbon space-y-1">
            <p>📧 <a href="mailto:louise@solyo.fr" className="hover:text-sage underline">louise@solyo.fr</a></p>
            <p>📞 <a href="tel:+33661366809" className="hover:text-sage underline">06 61 36 68 09</a></p>
            <p>📍 <a href="https://www.google.com/maps/place/26+Rue+de+Chateaudun,+92250+La+Garenne-Colombes" target="_blank" rel="noopener noreferrer" className="hover:text-sage underline">26, rue de Châteaudun 92250 La Garenne-Colombes</a></p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-cream border-t border-olive/30 py-6 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-charbon">
            <p>© {new Date().getFullYear()} SoLyo – Louise Durieu. Tous droits réservés.</p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/louise_solyo_yoga_sophro/" target="_blank" rel="noopener noreferrer" aria-label="Instagram SoLyo">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-70 hover:opacity-100 transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/louise-durieu-0925301a3/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Louise Durieu">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-70 hover:opacity-100 transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://www.syndicat-sophrologues-independant.fr/" target="_blank" rel="noopener noreferrer">
                <img src="/img/logo-syndicat.jpg" alt="Syndicat des sophrologues indépendants" className="h-10 w-auto opacity-80 hover:opacity-100 transition" />
              </a>
              <a href="https://sophrologie.expert/sophrologie/hauts-de-seine/la-garenne-colombes-92250/maternite-et-parentalite/solyo-louise-durieu" target="_blank" rel="noopener noreferrer">
                <img src="/img/logo-annuaire.png" alt="Annuaire du syndicat" className="h-10 w-auto opacity-80 hover:opacity-100 transition" />
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="/mentions-legales" className="hover:text-sage underline">Mentions légales</a>
              <a href="#contact" className="hover:text-sage underline">Contact</a>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}

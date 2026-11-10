// src/pages/Massage.jsx
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";

export default function Massage() {
  return (
    <div className="min-h-screen bg-cream text-charbon font-sans scroll-smooth">
      <Helmet>
        <title>Massage prénatal à La Garenne-Colombes – Louise Durieu | SoLyo</title>
        <meta name="description" content="Massage bien-être prénatal, postnatal et bébé à La Garenne-Colombes. Louise Durieu, sophrologue et praticienne en massage prénatal. Offre découverte dès octobre 2026." />
        <link rel="canonical" href="https://www.solyo.fr/massage" />
      </Helmet>

      <Navbar />

      <main className="pt-32 pb-20">

        {/* HERO */}
        <section className="px-6 pb-16">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-5">
              
              <h1 className="text-3xl md:text-4xl font-bold text-charbon leading-snug">
                Massage bien-être prénatal, postnatal et bébé
              </h1>
              <p className="text-lg text-terra font-semibold">
                Un moment de douceur totale, rien que pour vous — et votre bébé.
              </p>
              <p className="text-sm text-charbon leading-relaxed">
                Futures mamans, jeunes mamans, bébés… chaque soin est adapté à votre corps, à votre étape et à vos besoins du moment. En cabinet à <strong>La Garenne-Colombes</strong>, dans un espace doux, chaleureux et sécurisant.
              </p>

              

              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <a href="https://www.resalib.fr/praticien/126130-louise-durieu-sophrologue-la-garenne-colombes"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-block bg-terra hover:bg-sage text-white px-6 py-3 rounded-full text-sm transition text-center">
                  Prendre rendez-vous
                </a>
                <Link to="/carte-cadeau"
                  className="inline-block border border-terra text-terra hover:bg-terra hover:text-white px-6 py-3 rounded-full text-sm transition text-center">
                  Offrir une carte cadeau
                </Link>
              </div>
            </div>

            <img src="/img/massage-prenatal.webp" alt="Massage bien-être prénatal"
              className="rounded-2xl shadow-md w-full h-80 object-cover" />
          </div>
        </section>
{/* BIENFAITS */}
<section className="bg-white py-16 px-6">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold text-terra mb-4 text-center">Les bienfaits du massage prénatal</h2>
    <p className="text-center text-charbon text-sm mb-10 max-w-2xl mx-auto">
      Le massage prénatal est bien plus qu'un moment de détente — c'est un véritable soin adapté aux besoins spécifiques du corps de la femme enceinte.
    </p>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
      {[
        { emoji: "😌", titre: "Détente physique et émotionnelle", texte: "Relâcher les tensions accumulées, retrouver un vrai lâcher-prise et se reconnecter à son corps en toute douceur." },
        { emoji: "😴", titre: "Meilleur sommeil", texte: "Favoriser un sommeil plus profond et réparateur, souvent perturbé pendant la grossesse." },
        { emoji: "🔙", titre: "Soulagement des douleurs", texte: "Apaiser les tensions lombaires et dorsales liées aux changements posturaux, le poids du ventre et la cambrure du dos." },
        { emoji: "🦵", titre: "Circulation et jambes légères", texte: "Améliorer la circulation sanguine et lymphatique, limiter la rétention d'eau et soulager les sensations de jambes lourdes." },
        { emoji: "🧘", titre: "Bonnes postures", texte: "Aider la future maman à trouver des postures de confort adaptées à l'évolution de son corps." },
        { emoji: "👶", titre: "Lien avec bébé", texte: "Un moment privilégié pour se relier à son bébé, dans la douceur et la présence — un instant rien que pour vous deux." },
      ].map((item, i) => (
        <div key={i} className="bg-cream rounded-xl p-5 flex flex-col gap-2">
          <span className="text-2xl">{item.emoji}</span>
          <h3 className="text-sm font-semibold text-charbon">{item.titre}</h3>
          <p className="text-xs text-sage leading-relaxed">{item.texte}</p>
        </div>
      ))}
    </div>
    <p className="text-center text-xs text-sage mt-8 italic">
      Le massage prénatal est généralement recommandé à partir du 2ème trimestre. En cas de grossesse pathologique ou de contre-indication médicale, consultez votre médecin ou sage-femme avant la séance.
    </p>
  </div>
</section>
        {/* LES 3 MASSAGES */}
        <section className="bg-sage/10 py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-terra mb-4 text-center">Les soins proposés</h2>
            <p className="text-center text-charbon text-sm mb-10 max-w-2xl mx-auto">
              Trois soins pensés pour accompagner la maternité à chaque étape — du ventre rond jusqu'aux premiers mois avec bébé.
            </p>

            <div className="grid gap-6 md:grid-cols-3">

              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col border-t-4 border-terra">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">🤰</span>
                  <span className="bg-terra text-white text-xs font-semibold px-2 py-1 rounded-full">Disponible dès octobre</span>
                </div>
                <h3 className="text-lg font-semibold text-charbon mb-3">Massage prénatal</h3>
                <p className="text-sage text-sm flex-grow leading-relaxed">
                  Un massage doux et enveloppant, spécialement adapté au corps de la femme enceinte. Il soulage les tensions du dos, des jambes et du bassin, améliore la circulation et favorise un profond état de relaxation. Un moment rien que pour vous deux.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-terra font-bold text-sm">75 € / 1h</p>
                  <p className="text-xs text-sage">À partir du 2ème trimestre</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col border-t-4 border-sage">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">🌸</span>
                  <span className="bg-sage/20 text-sage text-xs font-semibold px-2 py-1 rounded-full">À venir — début 2027</span>
                </div>
                <h3 className="text-lg font-semibold text-charbon mb-3">Massage postnatal</h3>
                <p className="text-sage text-sm flex-grow leading-relaxed">
                  Après l'accouchement, votre corps a besoin de récupérer et de se recentrer. Ce soin accompagne la jeune maman dans sa reconstruction physique et émotionnelle — pour retrouver son corps, son énergie et sa confiance.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-charbon/50 font-bold text-sm">Tarif à venir</p>
                  <p className="text-xs text-sage">Disponible début 2027</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col border-t-4 border-olive">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">👶</span>
                  <span className="bg-terra text-white text-xs font-semibold px-2 py-1 rounded-full">Disponible dès octobre</span>
                </div>
                <h3 className="text-lg font-semibold text-charbon mb-3">Massage bébé</h3>
                <p className="text-sage text-sm flex-grow leading-relaxed">
                  Un soin doux et sécurisant pour votre tout-petit, favorisant l'éveil, le lien d'attachement et le bien-être. Un moment de complicité unique entre vous et votre bébé, guidé par une praticienne formée.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-terra font-bold text-sm">Atelier parent-bébé, tarif sur demande</p>
                  <p className="text-xs text-sage">De la naissance à 2 ou 3 ans</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* POURQUOI LOUISE */}
        <section className="py-16 px-6 bg-white">
  <div className="max-w-3xl mx-auto flex flex-col gap-5">
    <h2 className="text-2xl md:text-3xl font-bold text-charbon">Un accompagnement global de la maternité</h2>
    <p className="text-sm text-charbon leading-relaxed">
      En tant que <strong>sophrologue spécialisée en grossesse et maternité</strong> et professeure de <strong>yoga prénatal et postnatal</strong> depuis des années, je vous propose un accompagnement complet avec ce <strong>massage prénatal bien-être</strong> — corps et esprit — tout au long de votre parcours de maternité.
    </p>
    <p className="text-sm text-charbon leading-relaxed">
      Le massage peut se combiner avec des séances de <strong>sophrologie</strong> ou de <strong>yoga prénatal</strong> pour un accompagnement encore plus complet et personnalisé.
    </p>
    <ul className="space-y-2 text-sm text-charbon">
      {[
        "Praticienne formée au massage prénatal, postnatal et bébé",
        "Sophrologue certifiée RNCP spécialisée en grossesse",
        "Cabinet chaleureux à La Garenne-Colombes",
        "Accompagnement sur-mesure à chaque séance",
      ].map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="text-terra mt-0.5">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
    <div className="flex flex-col sm:flex-row gap-3 mt-2">
      <Link to="/sophrologie"
        className="inline-block border border-sage text-sage hover:bg-sage hover:text-white px-6 py-3 rounded-full text-sm transition text-center">
        Découvrir la sophrologie →
      </Link>
      <Link to="/yoga"
        className="inline-block border border-sage text-sage hover:bg-sage hover:text-white px-6 py-3 rounded-full text-sm transition text-center">
        Découvrir le yoga prénatal →
      </Link>
    </div>
  </div>
</section>

        {/* CARTE CADEAU */}
        <section className="bg-sage/10 py-16 px-6">
          <div className="max-w-2xl mx-auto text-center flex flex-col gap-5">
            <span className="text-4xl">🎁</span>
            <h2 className="text-2xl font-bold text-charbon">Offrir un massage prénatal</h2>
            <p className="text-sm text-charbon leading-relaxed">
              Une idée cadeau douce et originale pour une future maman — à offrir pour une baby shower, une liste de naissance, ou simplement pour lui faire plaisir.
            </p>
            <Link to="/carte-cadeau"
              className="inline-block bg-terra hover:bg-sage text-white px-8 py-3 rounded-full text-sm transition mx-auto">
              Demander une carte cadeau
            </Link>
            <p className="text-xs text-charbon/60">Je vous recontacte pour finaliser votre commande.</p>
          </div>
        </section>

        {/* CONTACT */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-terra mb-4">Une question ?</h2>
            <p className="text-sm text-charbon mb-6">N'hésitez pas à me contacter avant de prendre rendez-vous — je serai ravie d'échanger avec vous.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="mailto:louise@solyo.fr"
                className="inline-block bg-sage hover:bg-olive text-white px-6 py-3 rounded-full text-sm transition text-center">
                louise@solyo.fr
              </a>
              <a href="tel:+33661366809"
                className="inline-block border border-sage text-sage hover:bg-sage hover:text-white px-6 py-3 rounded-full text-sm transition text-center">
                06 61 36 68 09
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-cream border-t border-olive/30 py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-charbon">
          <p>© {new Date().getFullYear()} SoLyo – Louise Durieu. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <Link to="/mentions-legales" className="hover:text-sage underline">Mentions légales</Link>
            <Link to="/#contact" className="hover:text-sage underline">Contact</Link>
            <Link to="/" className="hover:text-sage underline">Accueil</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}

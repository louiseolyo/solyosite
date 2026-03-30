// src/pages/SophrologieEntreprise.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";

export default function SophrologieEntreprise() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream text-charbon font-sans scroll-smooth">
      <Helmet>
        <title>Sophrologie en entreprise – Bien-être au travail & QVCT | SoLyo Louise Durieu</title>
        <meta name="description" content="Sophrologie en entreprise en Île-de-France. Ateliers QVCT, gestion du stress, prévention burn-out, cohésion d'équipe. Séances individuelles et collectives. Louise Durieu, sophrologue certifiée RNCP. Devis gratuit." />
        <link rel="canonical" href="https://www.solyo.fr/sophrologie/entreprises" />
      </Helmet>

      <Navbar />

      <main className="pt-32 pb-20">

        {/* HERO */}
        <section className="px-6 pb-16">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-5">
              <span className="inline-block bg-terra/10 text-terra text-xs font-semibold px-3 py-1 rounded-full w-fit">
                Entreprises · Collectivités · Associations
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-charbon leading-snug">
                Sophrologie en entreprise
              </h1>
              <p className="text-lg text-terra font-semibold">
                Offrez à vos équipes un espace de ressourcement, de lâcher-prise et de mieux-être au travail.
              </p>
              <p className="text-sm text-charbon leading-relaxed">
                Sophrologue certifiée RNCP, j'interviens en <strong>Île-de-France</strong> (et ponctuellement partout en France) dans vos locaux, en présentiel ou en visio, sans matériel particulier — juste des chaises et une salle isolée.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#contact-entreprise"
                  className="inline-block bg-terra hover:bg-sage text-white px-6 py-3 rounded-full text-sm transition text-center">
                  Demander un devis
                </a>
                <a href="#offres"
                  className="inline-block border border-terra text-terra hover:bg-terra hover:text-white px-6 py-3 rounded-full text-sm transition text-center">
                  Voir les offres
                </a>
              </div>
            </div>
            <img src="/img/sophrologie-entreprise-femme.webp" alt="Sophrologie en entreprise"
              className="rounded-2xl shadow-md w-full h-80 object-cover" />
          </div>
        </section>

        {/* POURQUOI LA SOPHROLOGIE EN ENTREPRISE */}
        <section className="bg-sage/10 py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-terra mb-4 text-center">Pourquoi la sophrologie en entreprise ?</h2>
            <p className="text-center text-charbon text-sm mb-10 max-w-3xl mx-auto">
              Dans le cadre de la pression du monde du travail actuel, la sophrologie répond à la législation contre les risques psycho-sociaux (RPS). Elle se pratique en postures de travail, en vêtements du quotidien, sans équipement particulier.
            </p>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-lg font-semibold text-charbon mb-4">Mes domaines d'intervention</h3>
                <ul className="space-y-2 text-sm text-charbon">
                  {[
                    "Gestion du stress et des émotions",
                    "Prise de recul et clarté mentale",
                    "Pauses & remobilisation de l'énergie (micro-sieste, sommeil…)",
                    "Équilibre vie professionnelle / vie personnelle",
                    "Confiance en soi (prise de parole, de décisions…)",
                    "Capacité de concentration (open-space, télétravail…)",
                    "Développement de la créativité",
                    "Préparation aux examens et échéances importantes",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-terra mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-sage mt-4 italic">Autres thématiques possibles sur demande, avec définition commune des objectifs au préalable.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-charbon mb-4">Bénéfices pour votre organisation</h3>
                <ul className="space-y-2 text-sm text-charbon">
                  {[
                    "Engagement et motivation des salariés",
                    "Meilleure qualité de vie au travail (QVCT)",
                    "Productivité et concentration accrues",
                    "Cohésion d'équipe et communication",
                    "Diminution du burn-out et du bore-out",
                    "Diminution du turn-over",
                    "Application de la législation en matière de RPS",
                    "Diminution des coûts liés au mal-être au travail",
                    "Adaptation aux changements et aux imprévus",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-sage mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* OFFRES */}
        <section id="offres" className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-terra mb-10 text-center">Mes offres</h2>

            <div className="grid gap-6 md:grid-cols-2">

              {/* Séances récurrentes */}
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-3 border-l-4 border-sage">
                <h3 className="text-lg font-semibold text-charbon">Séances de groupe récurrentes</h3>
                <ul className="text-sm text-charbon space-y-1">
                  <li>• Entre 45 min et 1h par séance</li>
                  <li>• Plusieurs groupes à la suite (tarif dégressif)</li>
                  <li>• Hebdomadaire ou bihebdomadaire</li>
                </ul>
                <div className="mt-auto pt-3 border-t border-gray-100">
                  <p className="text-terra font-bold">Entre 180 et 250 € HT</p>
                  <p className="text-xs text-sage">selon le lieu et la fréquence · 160-180 € HT en visio</p>
                </div>
              </div>

              {/* Atelier QVCT */}
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-3 border-l-4 border-terra">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-charbon">Atelier QVCT, Santé ou Bien-être ponctuel</h3>
                  <span className="bg-terra/10 text-terra text-xs px-2 py-0.5 rounded-full whitespace-nowrap">Idéal SQVT</span>
                </div>
                <ul className="text-sm text-charbon space-y-1">
                  <li>• 1h par atelier</li>
                  <li>• Plusieurs groupes enchaînés possibles</li>
                  <li>• Tarif dégressif si plusieurs groupes</li>
                </ul>
                <div className="mt-auto pt-3 border-t border-gray-100">
                  <p className="text-terra font-bold">400 € HT / atelier</p>
                  <p className="text-xs text-sage">350 € HT en visio</p>
                </div>
              </div>

              {/* Journée thématique */}
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-3 border-l-4 border-olive">
                <h3 className="text-lg font-semibold text-charbon">Journée thématique complète</h3>
                <ul className="text-sm text-charbon space-y-1">
                  <li>• Team Building, changement, lancement, réouverture…</li>
                  <li>• Plusieurs groupes en sophrologie et/ou yoga</li>
                  <li>• Nombre de personnes et groupes à définir ensemble</li>
                </ul>
                <div className="mt-auto pt-3 border-t border-gray-100">
                  <p className="text-terra font-bold">~ 2 000 € HT la journée</p>
                  <p className="text-xs text-sage">à affiner selon le lieu, les horaires, le nombre de groupes</p>
                </div>
              </div>

              {/* Séances individuelles */}
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-3 border-l-4 border-charbon/20">
                <h3 className="text-lg font-semibold text-charbon">Séances individuelles</h3>
                <p className="text-sm text-charbon">Pour salariés, dirigeants, RH… Un accompagnement personnalisé sur-mesure selon vos objectifs.</p>
                <ul className="text-sm text-charbon space-y-1">
                  <li>• En présentiel dans vos locaux ou au cabinet</li>
                  <li>• En visio</li>
                </ul>
                <div className="mt-auto pt-3 border-t border-gray-100">
                  <p className="text-terra font-bold">Tarif dégressif</p>
                  <p className="text-xs text-sage">selon le nombre de séances et l'objectif</p>
                </div>
              </div>

            </div>

            {/* Journée de formation */}
            <div className="mt-6 bg-sage/10 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-charbon mb-2">Journée de formation</h3>
              <p className="text-sm text-charbon mb-2">Formation sur-mesure à la sophrologie pour vos équipes RH, managers ou collaborateurs.</p>
              <p className="text-terra font-bold">Tarif sur demande</p>
            </div>

            <p className="text-center text-xs text-sage mt-6 italic">
              Tous les tarifs sont exprimés HT. Devis personnalisé établi après échange sur vos besoins et contraintes.
            </p>
          </div>
        </section>

        {/* MON PARCOURS */}
        <section className="bg-sage py-16 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <img src="/img/sophrologie-entreprise-homme.webp" alt="Sophrologie relaxation en entreprise"
              className="rounded-2xl shadow-md w-full h-80 object-cover" />
            <div className="flex flex-col gap-5 text-white">
              <h2 className="text-2xl md:text-3xl font-bold">Un parcours ancré dans le monde de l'entreprise</h2>
              <p className="text-sm leading-relaxed text-white/90">
                Après <strong className="text-white">15 ans de salariat</strong> en comptabilité, finances et juridique en cabinet d'expertise comptable puis en entreprises (BTP, IT…), je me suis reconvertie suite à un épuisement moral professionnel.
              </p>
              <p className="text-sm leading-relaxed text-white/90">
                J'ai aujourd'hui à cœur d'offrir un mieux-être aux salariés <strong className="text-white">mais aussi aux dirigeants</strong> du monde de l'entreprise. Je connais de l'intérieur les pressions, les rythmes et les enjeux du milieu professionnel.
              </p>
              <p className="text-sm leading-relaxed text-white/90">
                Sophrologue certifiée RNCP (Académie de Sophrologie de Paris), formatrice et jurée de certification.
              </p>
              <div>
                <p className="text-sm font-semibold text-white mb-2">Quelques références :</p>
                <p className="text-sm text-white/80">Résidence Nohée · Sensa Studio · Ismeria · Olympe · GymSpot Corporate · EPCM</p>
              </div>
            </div>
          </div>
        </section>

        {/* LIEUX D'INTERVENTION */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl font-bold text-charbon mb-6">Mes lieux d'intervention</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-charbon">
              <div className="flex items-center gap-2">
                <span className="text-terra text-xl">🏢</span>
                <span>Cabinet à La Garenne-Colombes (92)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-terra text-xl">📍</span>
                <span>En entreprises en Île-de-France (et ponctuellement partout en France)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-terra text-xl">💻</span>
                <span>En visio</span>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT ENTREPRISE */}
        <section id="contact-entreprise" className="bg-sage/10 py-16 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-terra mb-4">Discutons de votre projet</h2>
            <p className="text-charbon text-sm mb-8 leading-relaxed">
              Chaque intervention est construite sur-mesure selon vos besoins, votre secteur et vos équipes. Contactez-moi pour échanger et recevoir un devis personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="mailto:louise@solyo.fr"
                className="inline-block bg-terra hover:bg-sage text-white px-6 py-3 rounded-full text-sm transition text-center">
                ✉️ louise@solyo.fr
              </a>
              <a href="tel:+33661366809"
                className="inline-block border border-terra text-terra hover:bg-terra hover:text-white px-6 py-3 rounded-full text-sm transition text-center">
                📞 06 61 36 68 09
              </a>
            </div>
            <p className="text-xs text-sage italic">
              Je vous réponds sous 48h et propose un premier échange téléphonique gratuit pour définir ensemble vos besoins.
            </p>
          </div>
        </section>

      </main>

      {/* FOOTER */}
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

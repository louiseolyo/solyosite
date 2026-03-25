// src/pages/CarteCadeau.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function CarteCadeau() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    pour: "",
    de: "",
    offre: "",
    message: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const offres = [
    { id: "1massage", label: "1 massage prénatal 1h", prix: "70 €", detail: "Offre ouverture cabinet" },
    { id: "2massages", label: "2 massages prénataux 1h", prix: "135 €", detail: "Au lieu de 140 €" },
    { id: "3massages", label: "3 massages prénataux 1h", prix: "200 €", detail: "Au lieu de 210 €" },
  ];

  function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "carte-cadeau", ...formData }),
      });
      setSubmitted(true);
    } catch (err) {
      alert("Désolée, l'envoi a échoué. Réessayez dans un instant.");
    }
  }

  return (
    <div className="min-h-screen bg-cream text-charbon font-sans">
      <Helmet>
        <title>Carte cadeau massage prénatal – SoLyo | Louise Durieu</title>
        <meta name="description" content="Offrez un massage bien-être prénatal à La Garenne-Colombes. Carte cadeau disponible dès maintenant, séances à partir de juin 2026." />
        <link rel="canonical" href="https://www.solyo.fr/carte-cadeau" />
      </Helmet>

      {/* Navigation */}
      <header className="fixed w-full bg-cream shadow z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 lg:py-6 flex items-center relative">
          <Link to="/" className="absolute left-4 top-1/2 -translate-y-1/2">
            <img src="/img/logo-fonce.webp" alt="SoLyo - Louise Durieu" className="h-14 lg:h-24 w-auto opacity-90" />
          </Link>
          <button className="lg:hidden text-sage ml-auto" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          <nav className="hidden lg:flex ml-auto items-center gap-6 text-sm lg:text-base">
            <Link to="/sophrologie" className="hover:text-sage">Sophrologie</Link>
            <Link to="/yoga" className="hover:text-sage">Yoga</Link>
            <Link to="/#about" className="hover:text-sage">Qui suis-je ?</Link>
            <Link to="/#temoignages" className="hover:text-sage">Témoignages</Link>
            <Link to="/#tarifs" className="hover:text-sage">Tarifs</Link>
            <Link to="/#rdv" className="hover:text-sage">Rendez-vous</Link>
            <Link to="/#contact" className="hover:text-sage">Contact</Link>
            <Link to="/blog" className="hover:text-sage">Blog</Link>
          </nav>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-cream border-t px-4 pb-4">
            <nav className="flex flex-col space-y-2 text-sm text-sage">
              <Link to="/sophrologie" onClick={() => setMenuOpen(false)}>Sophrologie</Link>
              <Link to="/yoga" onClick={() => setMenuOpen(false)}>Yoga</Link>
              <Link to="/" onClick={() => setMenuOpen(false)}>Qui suis-je ?</Link>
              <Link to="/" onClick={() => setMenuOpen(false)}>Témoignages</Link>
              <Link to="/" onClick={() => setMenuOpen(false)}>Tarifs</Link>
              <Link to="/" onClick={() => setMenuOpen(false)}>Rendez-vous</Link>
              <Link to="/" onClick={() => setMenuOpen(false)}>Contact</Link>
              <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
            </nav>
          </div>
        )}
      </header>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">

          {/* En-tête */}
          <div className="text-center mb-10">
            <span className="inline-block bg-terra/10 text-terra text-xs font-semibold px-3 py-1 rounded-full mb-4">
              🌿 Offre ouverture cabinet — valable pour toute carte achetée avant le 30 juin 2026
            </span>
            <h1 className="text-3xl font-bold text-charbon mb-3">Offrir un massage prénatal</h1>
            <p className="text-sage text-sm leading-relaxed">
              Faites plaisir à une future maman avec un massage bien-être prénatal à La Garenne-Colombes.
              Les séances débutent en juin 2026. Remplissez le formulaire ci-dessous et je vous recontacte rapidement.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <span className="text-4xl mb-4 block">🎁</span>
              <h2 className="text-xl font-semibold text-terra mb-3">Demande envoyée !</h2>
              <p className="text-charbon text-sm leading-relaxed mb-6">
                Merci pour votre demande de carte cadeau. Je vous recontacte dans les plus brefs délais pour finaliser votre commande et vous envoyer la carte.
              </p>
              <Link to="/" className="inline-block bg-sage hover:bg-olive text-white px-6 py-3 rounded-full text-sm transition">
                Retour à l'accueil
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md p-8">

              {/* Sélection offre */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-charbon mb-4">Choisissez votre offre *</p>
                <div className="grid gap-3">
                  {offres.map((offre) => (
                    <label key={offre.id}
                      className={`flex items-center justify-between border-2 rounded-xl p-4 cursor-pointer transition ${
                        formData.offre === offre.id ? "border-terra bg-terra/5" : "border-gray-200 hover:border-sage"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="offre"
                          value={offre.id}
                          checked={formData.offre === offre.id}
                          onChange={(e) => setFormData({ ...formData, offre: e.target.value })}
                          className="accent-terra"
                        />
                        <div>
                          <p className="text-sm font-semibold text-charbon">{offre.label}</p>
                          <p className="text-xs text-sage">{offre.detail}</p>
                        </div>
                      </div>
                      <span className="text-terra font-bold text-sm">{offre.prix}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Formulaire */}
              <form
                name="carte-cadeau"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="carte-cadeau" />
                <input type="hidden" name="offre" value={formData.offre} />

                <div>
                  <label className="block text-sm font-medium text-charbon mb-1">
                    Carte cadeau pour *
                  </label>
                  <input
                    type="text"
                    name="pour"
                    placeholder="Prénom et nom de la personne à qui vous offrez"
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-sage"
                    value={formData.pour}
                    onChange={(e) => setFormData({ ...formData, pour: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charbon mb-1">
                    De la part de *
                  </label>
                  <input
                    type="text"
                    name="de"
                    placeholder="Votre prénom et nom"
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-sage"
                    value={formData.de}
                    onChange={(e) => setFormData({ ...formData, de: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charbon mb-1">
                    Votre email pour vous recontacter *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="votreadresse@mail.com"
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-sage"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charbon mb-1">
                    Message à inclure sur la carte (optionnel)
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Un petit mot personnalisé à transmettre…"
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-sage"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <p className="text-xs text-charbon/60">
                  Après réception de votre demande, je vous recontacte pour les modalités de paiement et l'envoi de la carte cadeau.
                </p>

                <button
                  type="submit"
                  disabled={!formData.offre}
                  className="w-full bg-terra hover:bg-sage text-white px-6 py-3 rounded-full text-sm transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Envoyer ma demande de carte cadeau 🎁
                </button>
              </form>
            </div>
          )}

          <div className="text-center mt-8">
            <Link to="/" className="text-sage underline hover:text-olive text-sm">← Retour à l'accueil</Link>
          </div>
        </div>
      </main>
    </div>
  );
}

// src/pages/CarteCadeau.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";

export default function CarteCadeau() {
  const [formData, setFormData] = useState({
    pour: "",
    de: "",
    offre: "",
    message: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const offres = [
    { id: "1massage", label: "1 massage prénatal 1h", prix: "75 €" },
    { id: "2massages", label: "2 massages prénataux 1h", prix: "140 €", detail: "Au lieu de 150 €" },
    { id: "3massages", label: "3 massages prénataux 1h", prix: "210 €", detail: "Au lieu de 225 €" },
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
        <meta name="description" content="Offrez un massage prénatal bien-être à La Garenne-Colombes. Idée cadeau grossesse, cadeau naissance ou liste de naissance. Séances disponibles dès juin 2026." />
        <link rel="canonical" href="https://www.solyo.fr/carte-cadeau" />
      </Helmet>

      {/* Navigation */}
      <Navbar />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">

          {/* En-tête */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-charbon mb-3">Offrir un massage prénatal</h1>
            <p className="text-sage text-sm leading-relaxed">
              Faites plaisir à une future maman avec un massage bien-être prénatal à La Garenne-Colombes.
              Remplissez le formulaire ci-dessous et je vous recontacte rapidement.
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

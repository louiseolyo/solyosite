export default function MentionsLegales() {
  return (
    <section id="mentions" className="bg-white py-16 px-6">
  <div className="max-w-4xl mx-auto prose prose-sm md:prose-base text-charbon">
    <h2 className="text-3xl font-bold text-sage text-center mb-10">Mentions légales</h2>

    <h3 className="text-xl font-semibold mt-8 mb-2">Éditeur du site</h3>
    <p>
      <strong>Louise Durieu – SoLyo</strong><br/>
      Adresse : 14, avenue du Général de Gaulle 92250 La Garenne-Colombes<br/>
      Téléphone : 0661366809<br/>
      Email : louise@solyo.fr<br/>
      SIRET : 938 377 363 00024<br/>
      Code APE : 8551Z
    </p>

    <h3 className="text-xl font-semibold mt-8 mb-2">Hébergement</h3>
    <p>
      [Nom de l’hébergeur] – [Forme sociale si connue]<br/>
      Adresse : [Adresse de l’hébergeur]<br/>
      Téléphone : [Téléphone de l’hébergeur]<br/>
      Site : [URL de l’hébergeur]
    </p>

    <h3 className="text-xl font-semibold mt-8 mb-2">Propriété intellectuelle</h3>
    <p>
      L’ensemble du contenu du site (textes, images, graphismes, logo, structure) est la propriété
      exclusive de Louise Durieu – SoLyo, sauf mentions contraires, et est protégé par la législation
      en vigueur. Toute reproduction, diffusion ou adaptation, même partielle, est interdite sans
      autorisation écrite préalable.
    </p>

    <h3 className="text-xl font-semibold mt-8 mb-2">Données personnelles</h3>
    <p>
      Les informations collectées via le formulaire de contact et/ou la prise de rendez-vous sont
      utilisées uniquement pour répondre aux demandes et gérer les prestations. Conformément au RGPD,
      vous disposez d’un droit d’accès, de rectification et de suppression de vos données : écrivez-nous
      à <strong>louise@solyo.fr</strong>.
    </p>

    <h3 className="text-xl font-semibold mt-8 mb-2">Cookies</h3>
    <p>
      Le site peut utiliser des cookies de mesure d’audience et de confort de navigation. Vous pouvez
      configurer votre navigateur pour les accepter ou les refuser.
    </p>

    <h3 className="text-xl font-semibold mt-8 mb-2">Responsabilité</h3>
    <p>
      Malgré le soin apporté au contenu, des erreurs peuvent subsister. L’éditeur ne saurait être tenu
      responsable de l’utilisation qui en est faite par l’utilisateur.
    </p>

    <p className="text-xs text-gray-500 mt-10">
      Dernière mise à jour : [08/2025]
    </p>
  </div>
</section>
  );
}
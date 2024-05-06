import React from "react";

const Presentation = () => {
  return (
    <div className="max-w-lg mx-auto my-12 bg-white rounded-xl font-opensans text-justify shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <h2 className="max-sm:text-xl text-2xl font-bold text-dark-goldenrod mb-4">
            TAF Equipment & Logistics
          </h2>
          <p className="text-penn-blue mb-6">
            La Logistique simplifiée couplée à des équipements performants !
          </p>
          <p className="mb-4">
            <span className="font-opensansbold text-dark-goldenrod">
              Bienvenue chez TAF Equipment & Logistics
            </span>
            , votre partenaire dévoué pour toutes vos nécessités de maintenance
            d&apos;engins, de logistique, de transport, et bien plus encore.
            Nous sommes bien plus qu&apos;une entreprise - nous sommes une
            solution complète pour vos opérations, offrant une gamme variée de
            services spécialisés pour répondre à vos besoins les plus exigeants.
          </p>
          <h2 className="max-sm:text-xl text-2xl font-bold text-dark-goldenrod mb-4">
            Nos Services:
          </h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">
              <span className="text-penn-blue font-opensansbold">
                Vente d&apos;engins :
              </span>{" "}
              Notre service de vente d&apos;engins propose une gamme diversifiée
              d&apos;équipements spécialisés pour répondre à vos besoins
              industriels.
            </li>
            <li className="mb-2">
              <span className="text-penn-blue font-opensansbold">
                Maintenance d&apos;engins :
              </span>{" "}
              Notre équipe dédiée de techniciens qualifiés est là pour
              s&apos;assurer que vos engins fonctionnent toujours à leur
              meilleur niveau de performance, minimisant leur temps d&apos;arrêt
              et maximisant leur productivité.
            </li>
            <li className="mb-2">
              <span className="text-penn-blue font-opensansbold">
                Location d&apos;engins :{" "}
              </span>{" "}
              Besoin d&apos;équipement spécialisé pour vos projets ? Nous
              offrons une vaste sélection d&apos;engins de qualité supérieure
              pour répondre à vos exigences.
            </li>
            <li className="mb-2">
              <span className="text-penn-blue font-opensansbold">Conseil</span>{" "}
              Notre service de conseil vous offre l&apos;expertise nécessaire
              pour optimiser vos opérations commerciales et logistiques. Nos
              consultants expérimentés travailleront en étroite collaboration
              avec vous pour comprendre vos défis et vos objectifs, puis
              élaborer des stratégies sur mesure pour y répondre.
            </li>
            <li className="mb-2">
              <span className="text-penn-blue font-opensansbold">
                Commerce Général :
              </span>{" "}
              Que vous recherchiez des produits spécifiques ou que vous
              cherchiez à élargir votre portefeuille, notre réseau et notre
              connaissance du marché vous assurent les meilleures opportunités
              commerciales.
            </li>
            <li className="mb-2">
              <span className="text-penn-blue font-opensansbold">
                Prestations de Services:{" "}
              </span>{" "}
              Au-delà de nos services principaux, nous offrons une gamme
              complète de prestations pour répondre à tous vos besoins
              opérationnels, de la gestion des stocks à la consultation en
              logistique.
            </li>
            <li className="mb-2">
              <span className="text-penn-blue font-opensansbold">
                Import-Export :
              </span>{" "}
              Simplifiez vos opérations internationales avec notre expertise en
              Import-Export, garantissant des transactions fluides et sans
              tracasseries.
            </li>
            <li className="mb-2">
              <span className="text-penn-blue font-opensansbold">
                Logistique :
              </span>{" "}
              Des solutions personnalisées pour optimiser vos chaînes
              d&apos;approvisionnement et garantir une efficacité maximale à
              chaque étape.
            </li>
            <li className="mb-2">
              <span className="text-penn-blue font-opensansbold">
                Transport :
              </span>{" "}
              Avec notre flotte moderne et notre équipe expérimentée, nous
              assurons le transport sécurisé et ponctuel de vos marchandises, où
              que vous soyez.
            </li>
          </ul>

          <h2 className="max-sm:text-xl text-2xl font-bold text-dark-goldenrod mb-4">
            Notre Engagement pour l&apos;Excellence :
          </h2>

          <p className="text-black mb-6">
            Chez{" "}
            <span className="text-dark-goldenrod font-opensansbold">
              TAF Equipment & Logistics
            </span>
            , notre passion pour l&apos;excellence se reflète dans chaque aspect
            de notre entreprise. Nous nous engageons à fournir des services de
            la plus haute qualité, en mettant l&apos;accent sur
            l&apos;innovation, la fiabilité et la satisfaction du client.
          </p>
          <p className="font-opensansbold text-black mb-6">
            Contactez-nous dès aujourd&apos;hui pour découvrir comment{" "}
            <span className="text-dark-goldenrod">
              TAF Equipment & Logistics
            </span>{" "}
            peut transformer vos opérations et vous aider à atteindre de
            nouveaux sommets de succès.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Presentation;

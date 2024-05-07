import React from "react";
import fleet from "../data/fleet";

const FleetPresentation = () => {
  return (
    <div className="bg-black text-white text-center mx-auto py-12">
      <h1 className="text-cerulean font-righteous xl:text-2xl md:text-xl mb-4">
        Parcourez Notre Impressionante Flotte !
      </h1>

      <p className="font-opensans max-sm:text-sm px-8">
        Peu importe votre besoin, nous avons des engins et véhicules adaptés.
        <br />
        Il suffit de nous contacter, pour tous vos besoins d&apos;achat, de
        maintenance ou encore de location d&apos;engins.
      </p>

      <div className="p-12 grid gap-4 xl:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1">
        {fleet.map((item, index) => (
          <div
            key={index}
            className="flex flex-col border-dark-goldenrod border-1 rounded-md overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-[50%] h-[50%] object-cover mx-auto"
            />
            <div className="w-full p-4 dark:text-gray-50">
              <h3 className="mb-2 font-righteous text-dark-goldenrod">
                {item.name}
              </h3>
              <p className="text-justify mb-2 font-opensans text-md max-sm:text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FleetPresentation;

import React from "react";

const NosServicesItemCard = ({ icon, service, description }) => {
  return (
    <div className="shadow-2xl border-2 border-dark-goldenrod rounded-md overflow-hidden font-opensans py-4 px-3 hover:border-indigo-dye">
      <img
        src={icon}
        alt={service}
        className="w-8 mx-auto block text-cerulean hover:scale-110 hover:text-cerulean"
      />
      <div className="w-full p-4 dark:text-gray-50">
        <h3 className="drop-shadow-2xl text-lg md:text-xl mb-2 md:mb-3 font-righteous text-center text-penn-blue hover:text-dark-goldenrod hover:underline">
          {service}
        </h3>
        <p className="text-justify mb-2 font-light text-penn-blue">
          {description}
        </p>
      </div>
    </div>
  );
};

export default NosServicesItemCard;

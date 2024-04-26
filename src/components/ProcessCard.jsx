import React from "react";

const ProcessCard = ({ stepNumber, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-2xl h-96 w-80">
      <div className="flex items-center justify-center mx-auto bg-dark-goldenrod w-12 h-12 rounded-full mb-4">
        <span className="text-xl font-bold text-gray-800">{stepNumber}</span>
      </div>
      <h3 className="text-xl font-righteous text-penn-blue mb-2">{title}</h3>
      <p className="text-gray-800 font-opensans text-justify max-sm:text-md">
        {description}
      </p>
    </div>
  );
};

export default ProcessCard;

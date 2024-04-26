import React from "react";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white py-6 px-8 h-60 rounded-lg shadow-md">
      <h3 className="text-2xl font-righteous text-dark-goldenrod mb-2">
        {title}
      </h3>
      <p className="text-gray-600 font-opensans text-justify">{description}</p>
    </div>
  );
};

export default ServiceCard;

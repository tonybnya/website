import React from "react";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-righteous text-dark-goldenrod mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-justify">{description}</p>
    </div>
  );
};

export default ServiceCard;

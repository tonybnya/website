import React from "react";

const ContactCard = ({ title, data1, data2 }) => {
  return (
    <div className="h-32 w-6 flex flex-col items-center justify-center rounded-md bg-penn-blue basis-1/4 max-sm:w-80 max-sm:py-4 md:h-40 md:w-80 shadow-2xl">
      <h3 className="font-righteous text-dark-goldenrod mb-2">{title}</h3>
      <span className="font-montserrat text-lg">{data1}</span>
      <span className="font-montserrat text-lg">{data2}</span>
    </div>
  );
};

export default ContactCard;

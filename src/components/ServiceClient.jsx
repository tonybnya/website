import React from "react";
import whatsapp from "/assets/img/whatsapp.png";
import phone from "/assets/img/phone.png";

const ServiceClient = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-penn-blue h-32 text-2xl text-white max-sm:text-sm">
      <h1 className="font-montserrat p-auto mb-2">
        Notre Service Client est disponible{" "}
        <span className="font-montserratbold">24/7</span>
      </h1>
      <div className="flex flex-row gap-2 items-center">
        <img className="block w-6 h-6" src={phone} alt="phone icon" />
        <img className="block w-6 h-6" src={whatsapp} alt="whatsapp icon" />
        <h2 className="font-montserrat">+237 698 68 45 98</h2>
      </div>
    </div>
  );
};

export default ServiceClient;

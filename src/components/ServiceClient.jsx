import React from "react";
import whatsappIcon from "/assets/img/WhatsAppButtonGreenSmall.png";

const ServiceClient = () => {
  const openWhatsAppChat = () => {
    const phoneNumber = "+237698684598";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center border-t bg-gradient-to-r from-dark-goldenrod via-penn-blue to-dark-goldenrod h-32 text-xl text-white max-sm:text-sm">
      <h1 className="font-montserrat p-auto mb-2">
        Notre Service Client est disponible{" "}
        <span className="font-montserratbold text-red-500">24/7</span> : +237
        698 68 45 98
      </h1>
      <div
        className="flex flex-row items-center cursor-pointer"
        onClick={openWhatsAppChat}
      >
        <a aria-label="Chat on WhatsApp">
          <img alt="Chat on WhatsApp" className="" src={whatsappIcon} />
        </a>
      </div>
    </div>
  );
};

export default ServiceClient;

import React from "react";

const ContactData = () => {
  return (
    <div className="flex flex-row text-white gap-4 mx-auto text-center p-12 text-xl max-sm:flex-col max-sm:items-center">
      <div className="h-32 w-6 flex flex-col items-center justify-center rounded-md bg-penn-blue basis-1/4 max-sm:w-80 max-sm:py-4">
        <h3 className="font-righteous text-dark-goldenrod mb-2">Nos Bureaux</h3>
        <span className="font-opensans">Bonaberi Sodiko</span>
        <span className="font-opensans">Douala, Cameroun</span>
      </div>
      <div className="h-32 w-6 flex flex-col items-center justify-center rounded-md bg-penn-blue basis-1/4 max-sm:w-80 max-sm:py-4">
        <h3 className="font-righteous text-dark-goldenrod mb-2">
          Nos Contacts
        </h3>
        <span className="font-opensans">+237 698 68 45 98</span>
        <span className="font-opensans">+237 657 68 45 98</span>
      </div>
      <div className="h-32 w-6 flex flex-col items-center justify-center rounded-md bg-penn-blue basis-1/4 max-sm:w-80 max-sm:py-4">
        <h3 className="font-righteous text-dark-goldenrod mb-2">Nos Emails</h3>
        <span className="font-opensans">fouelefacktalabong@gmail.com</span>
        <span className="font-opensans">info@teamtaf.com</span>
      </div>
      <div className="h-32 w-6 flex flex-col items-center justify-center rounded-md bg-penn-blue basis-1/4 max-sm:w-80 max-sm:py-4">
        <h3 className="font-righteous text-dark-goldenrod mb-2">
          Nos Horaires
        </h3>
        <span className="font-opensans">Lundi-Vendredi : 08:00 - 18:00</span>
        <span className="font-opensans">Samedi : 08:00 - 14:00</span>
      </div>
    </div>
  );
};

export default ContactData;

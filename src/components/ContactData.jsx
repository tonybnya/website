import React from "react";
import ContactCard from "./ContactCard";
import details from "../data/contact";

const ContactData = () => {
  return (
    <div className="flex text-white gap-4 mx-auto text-center p-12 text-xl max-sm:flex-col max-sm:items-center md:grid md:place-items-center md:grid-cols-2 xl:flex">
      {details.map((item, index) => (
        <ContactCard
          key={index}
          title={item.title}
          data1={item.data1}
          data2={item.data2}
        />
      ))}
    </div>
  );
};

export default ContactData;

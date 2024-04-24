import React from "react";
import services from "../data/services";
import HomeServiceCard from "./HomeServiceCard";

const NosServices = () => {
  return (
    <div className="flex flex-col md:flex-col items-center justify-center my-20 mx-20 max-sm:w-[85%] max-sm:mx-auto">
      <h1 className="text-center font-montserratbold mb-6 text-4xl text-penn-blue underline">
        Nos Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((item, index) => (
          <HomeServiceCard
            key={index}
            icon={item.icon}
            service={item.service}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default NosServices;

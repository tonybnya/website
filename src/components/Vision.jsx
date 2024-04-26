import React from "react";
import lamp from "/assets/img/lamp.jpg";
import details from "../data/details";

const Vision = () => {
  return (
    <div className="flex flex-col gap-4 text-penn-blue text-center m-12 max-sm:flex-col">
      <img
        src={lamp}
        alt="vision image"
        className="w-full border-4 border-penn-blue rounded-md max-sm:w-full"
      />
      <div className="flex flex-col">
        {details.map((item, index) => (
          <div key={index} className="flex gap-4">
            <button className="p-1 h-8 bg-dark-goldenrod text-white text-lg rounded-md">
              {item.icon}
            </button>
            <div className="">
              <h1 className="text-left font-righteous text-2xl mb-2">
                {item.title}
              </h1>
              <p className="text-justify mb-4">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vision;

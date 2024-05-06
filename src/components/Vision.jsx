import React from "react";
import lamp from "/assets/img/lamp.jpg";
import details from "../data/details";

const Vision = () => {
  return (
    <div className="flex flex-col gap-4 text-penn-blue text-center m-12 max-sm:flex-col max-sm:w-full max-sm:mx-auto">
      <img
        src={lamp}
        alt="vision image"
        className="w-full border-4 border-penn-blue rounded-md max-sm:w-full"
      />
      <div className="flex flex-col max-sm:mt-10">
        {details.map((item, index) => (
          <div key={index} className="flex gap-4 max-sm:flex-col max-sm:mb-8">
            <button className="p-1 h-8 bg-dark-goldenrod text-white text-lg rounded-md max-sm:rounded-md max-sm:w-8 max-sm:mx-auto">
              {item.icon}
            </button>
            <div className="">
              <h1 className="text-left font-righteous text-2xl mb-2 max-sm:text-center">
                {item.title}
              </h1>
              <p className="text-justify font-opensans mb-4 xl:text-xl">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vision;

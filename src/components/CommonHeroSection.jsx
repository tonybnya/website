import React from "react";

const CommonHeroSection = ({ title, imgUrl }) => {
  return (
    <div
      className="relative h-96 flex items-center justify-center"
      style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 bg-penn-blue bg-opacity-60"></div>
      <h1 className="text-white font-righteous text-4xl font-bold z-10">
        {title}
      </h1>
    </div>
  );
};

export default CommonHeroSection;

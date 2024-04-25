import React from "react";
import woman from "/assets/img/woman.png";
import choix from "../data/choix";
import NousChoisirItem from "./NousChoisirItem";

const NousChoisir = () => {
  return (
    <div className="flex flex-col w-[80%] mx-auto mb-12">
      <h1 className="text-center drop-shadow-2xl font-righteous mb-12 text-4xl max-sm:text-2xl text-penn-blue underline">
        Pourquoi Nous Choisir ?
      </h1>
      <div className="flex gap-4 flex-row items-center mx-auto max-sm:flex-col max-[1439px]:flex-col">
        <img
          src={woman}
          alt="delivery woman"
          className="w-1/2 border-4 rounded-md border-dark-goldenrod max-sm:w-full max-sm:mb-6 drop-shadow-2xl"
        />
        <div className="flex flex-col">
          {choix.map((item, index) => (
            <NousChoisirItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NousChoisir;

import React from "react";

const NousChoisirItem = ({ icon, title, description }) => {
  return (
    <div className="flex gap-4 p-2 max-sm:flex-col max-sm:text-center max-sm:mb-6 max-[1439px]:flex-col">
      <img
        src={icon}
        alt={title}
        className="w-6 flex-grow max-sm:mx-auto max-sm:w-4 max-[1439px]:w-6 max-[1439px]:mx-auto max-[1439px]:mt-6"
      />
      <div className="flex flex-col">
        <h3 className="font-montserratbold text-dark-goldenrod text-2xl max-sm:text-lg max-[1439px]:text-center max-[1439px]:text-2xl">
          {title}
        </h3>
        <p className="text-justify text-lg w-[80%] max-sm:mx-auto max-sm:w-[90%] max-[1439px]:mx-auto max-[1439px]:text-xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default NousChoisirItem;

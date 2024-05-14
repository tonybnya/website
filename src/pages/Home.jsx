import React from "react";
import HeroHome from "../components/HeroHome";
import NosServices from "../components/NosServices";
import NousChoisir from "../components/NousChoisir";
import ServiceClient from "../components/ServiceClient";
import Partners from "../components/Partners";

const Home = () => {
  return (
    <>
      <div className="relative">
        <HeroHome />
      </div>
      <ServiceClient />
      <NosServices />
      <NousChoisir />
      <Partners />
    </>
  );
};

export default Home;

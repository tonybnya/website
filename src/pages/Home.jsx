import React from "react";
import HeroHome from "../components/HeroHome";
import NosServices from "../components/NosServices";
import NousChoisir from "../components/NousChoisir";
import ServiceClient from "../components/ServiceClient";

const Home = () => {
  return (
    <>
      <HeroHome />
      <ServiceClient />
      <NosServices />
      <NousChoisir />
    </>
  );
};

export default Home;

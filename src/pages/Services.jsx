import React from "react";
import CommonHeroSection from "../components/CommonHeroSection";
import bgServices from "/assets/img/services-home.jpg";
import ServiceClient from "../components/ServiceClient";

const Services = () => {
  return (
    <>
      <CommonHeroSection title="Nos Services" imgUrl={bgServices} />
      <ServiceClient />
    </>
  );
};

export default Services;


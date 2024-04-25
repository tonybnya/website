import React from "react";
import CommonHeroSection from "../components/CommonHeroSection";
import bgAbout from "/assets/img/about-home.png";
import ServiceClient from "../components/ServiceClient";

const About = () => {
  return (
    <>
      <CommonHeroSection title="À Propos de Nous" imgUrl={bgAbout} />
      <ServiceClient />
    </>
  );
};

export default About;


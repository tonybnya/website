import React from "react";
import CommonHeroSection from "../components/CommonHeroSection";
import bgAbout from "/assets/img/about-hero.png";
import ServiceClient from "../components/ServiceClient";
import Presentation from "../components/Presentation";
import Vision from "../components/Vision";

const About = () => {
  return (
    <>
      <CommonHeroSection title="À Propos de Nous" imgUrl={bgAbout} />
      <ServiceClient />
      <div className="flex xl:flex-row max-sm:flex-col md:flex-col px-12">
        <Presentation />
        <Vision />
      </div>
    </>
  );
};

export default About;

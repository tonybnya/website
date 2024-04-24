import React from "react";
import CommonHeroSection from "../components/CommonHeroSection";
import bgAbout from "/assets/img/about-home.png";

const About = () => {
  return (
    <>
      <CommonHeroSection title="À Propos de Nous" imgUrl={bgAbout} />
    </>
  );
};

export default About;


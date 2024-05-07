import React from "react";
import bgFleet from "/assets/img/fleet-hero.jpg";
import CommonHeroSection from "../components/CommonHeroSection";
import ServiceClient from "../components/ServiceClient";
import FleetPresentation from "../components/FleetPresentation";

const Fleet = () => {
  return (
    <>
      <CommonHeroSection title="Notre Flotte" imgUrl={bgFleet} />
      <ServiceClient />
      <FleetPresentation />
    </>
  );
};

export default Fleet;

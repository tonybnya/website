import React from "react";
import CommonHeroSection from "../components/CommonHeroSection";
import bgContact from "/assets/img/contact-home.jpg";
import ContactData from "../components/ContactData";
import ContactForm from "../components/ContactForm";
import ServiceClient from "../components/ServiceClient";

const Contact = () => {
  return (
    <>
      <CommonHeroSection title="Nous Contacter" imgUrl={bgContact} />
      <ServiceClient />
      <ContactData />
      <ContactForm />
    </>
  );
};

export default Contact;


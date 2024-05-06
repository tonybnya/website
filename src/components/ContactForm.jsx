import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h5k4qmh",
        "template_ydtvhlw",
        e.target,
        "IdLjORO2JBDxuuwPj",
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        alert("Message envoyé !");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Une erreur est survenue lors de l'envoi du message.");
      });
  };

  return (
    <div className="flex flex-col mb-10 mx-auto">
      <h1 className="text-penn-blue text-center text-4xl font-righteous underline">
        Nous écrire
      </h1>

      <p className="my-10 text-center font-opensans xl:text-xl md:text-md max-sm:text-sm">
        Un besoin particulier ? <br />
        Écrivez-nous afin d’avoir un service sur-mesure.
      </p>

      <div className="flex justify-center items-center">
        <form
          className="flex flex-col w-full md:w-7/12 text-black font-opensans max-sm:mx-8"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={formData.name}
            onChange={handleChange}
            className="p-2 bg-transparent border-2 border-dark-goldenrod rounded-md focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="my-2 p-2 bg-transparent border-2 border-dark-goldenrod rounded-md focus:outline-none"
          />

          <textarea
            type="text"
            name="message"
            placeholder="Votre message..."
            value={formData.message}
            onChange={handleChange}
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 border-dark-goldenrod rounded-md focus:outline-none"
          />

          <button
            type="submit"
            className="font-opensansbold bg-penn-blue hover:bg-indigo-dye inline-flex items-center justify-center px-5 py-3 w-1/4 mx-auto text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

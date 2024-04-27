import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <h1 className="text-penn-blue text-center text-4xl mb-12 font-righteous underline">
        Nous écrire
      </h1>

      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/pamqgyva"
          method="POST"
          className="flex flex-col w-full md:w-7/12 text-black font-opensans max-sm:mx-8"
        >
          <input
            type="text"
            name="name"
            placeholder="Nom"
            className="p-2 bg-transparent border-2 border-dark-goldenrod rounded-md focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 border-dark-goldenrod rounded-md focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Votre message..."
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

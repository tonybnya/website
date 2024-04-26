import React from "react";
import { Link } from "react-router-dom";
import error from "/assets/img/error.png";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center my-[10vh]">
      <img src={error} alt="error 404 image" className="w-1/4" />
      <h2 className="font-opensans mt-4 text-red-500">
        Erreur - Cette page n&apos;existe pas !
      </h2>
      <Link
        to="/"
        className="mt-12 bg-penn-blue text-white font-montserratbold px-6 py-4 rounded-md hover:bg-dark-goldenrod"
      >
        <span>Retournez sur la page d&apos;accueil</span>
      </Link>
    </div>
  );
};

export default ErrorPage;


import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-gradient-to-tr from-dark-goldenrod via-penn-blue to-dark-goldenrod flex justify-center gap-40 xl:p-12 md:p-12 max-sm:p-8 max-sm:flex-col bg-penn-blue border-b border-slate-900 text-gray-400">
        <div className="font-opensans">
          <div>
            <h2 className="text-gray-200">TAF Equipment & Logistics</h2>
            <hr className="text-gray-50 my-2 xl:w-[300px] md:w-[250px] max-sm:w-[250px]" />
          </div>

          <div className="mt-4">
            <h4 className="text-dark-goldenrod">Siège Douala</h4>
            <h4>Bonaberi, Sodiko</h4>
            <h4>Douala</h4>
            <h4>Cameroun</h4>
          </div>

          <div className="mt-4">
            <h3 className="text-dark-goldenrod">Heures d&apos;ouverture :</h3>
            <h4>Lundi-Vendredi : 08:00 - 18:00</h4>
            <h4>Samedi : 08:00 - 14:00</h4>
          </div>

          <div className="mt-4">
            <h3 className="text-dark-goldenrod">Contact</h3>
            <h4>Email 1 : teamtaf237@gmail.com</h4>
            <h4>Email 2 : info@teamtaf.com</h4>
            <h4>Tél. 1 : +237 698 68 45 98</h4>
            <h4>Tél. 2 : +237 657 68 45 98</h4>
          </div>
        </div>

        <div className="font-opensans max-sm:mt-[-80px]">
          <h2 className="text-gray-200">Navigation</h2>
          <hr className="text-gray-50 my-2 xl:w-[300px] md:w-[250px] max-sm:w-[250px]" />
          <ul className="flex flex-col justify-start mt-3 text-sm font-medium text-gray-400 sm:mt-0 max-sm:block max-sm:flex max-sm:justify-center">
            <li className="my-2">
              <Link to="/" className="hover:underline uppercase">
                Accueil
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/about" className="hover:underline uppercase">
                A Propos
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/services" className="hover:underline uppercase">
                Services
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/contact" className="hover:underline uppercase">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t bottom-0 mb-0 bg-penn-blue font-opensans p-4">
        <p className="text-center text-gray-400">
          Copyright © 2024{" "}
          <Link to="/" className="hover:underline text-dark-goldenrod">
            TAF Equipment & Logistics
          </Link>
          . Tous Droits Réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

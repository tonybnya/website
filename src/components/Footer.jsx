import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="shadow bottom-0 mb-0 bg-penn-blue font-opensans">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between xs:flex xs:flex-col xs:justify-center">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link to="/" className="hover:underline">
            TAF
          </Link>
          . Tous Droits Réservés.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="/about" className="hover:underline me-4 md:me-6">
              A Propos
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:underline me-4 md:me-6">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;


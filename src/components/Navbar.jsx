import React from "react";
import { Link } from "react-router-dom";
import logo from "/assets/logo/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-20" alt="TAF Logo" />
          <span className="self-center text-2xl font-righteous whitespace-nowrap text-dark-goldenrod">
            TAF
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-dark-goldenrod rounded-lg md:hidden hover:bg-penn-blue focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium font-righteous uppercase flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 rounded text-penn-blue"
                aria-current="page"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 rounded text-penn-blue"
              >
                A propos
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block py-2 px-3 rounded text-penn-blue"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 rounded text-penn-blue"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


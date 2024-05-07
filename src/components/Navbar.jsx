import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/logo/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gradient-to-l from-penn-blue via-dark-goldenrod to-penn-blue border-b">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-20" alt="TAF Logo" />
        </Link>
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-dark-goldenrod focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open hamburger menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            {menuOpen ? (
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            ) : (
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            )}
          </svg>
        </button>
        <div
          className={`${menuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium font-righteous uppercase flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 rounded text-white hover:underline max-sm:hover:bg-indigo-dye max-sm:hover:no-underline"
                aria-current="page"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 rounded text-white hover:underline max-sm:hover:bg-indigo-dye max-sm:hover:no-underline"
              >
                À propos
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block py-2 px-3 rounded text-white hover:underline max-sm:hover:bg-indigo-dye max-sm:hover:no-underline"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 rounded text-white hover:underline max-sm:hover:bg-indigo-dye max-sm:hover:no-underline"
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

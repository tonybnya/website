import React from "react";
import { Link } from "react-router-dom";

import img1 from "/assets/img/carousel-1.jpg";
import img2 from "/assets/img/carousel-2.jpg";
import img3 from "/assets/img/carousel-3.jpg";
import img4 from "/assets/img/carousel-4.png";
import img5 from "/assets/img/carousel-5.png";

import HomeCarousel from "./HomeCarousel";

const HeroHome = () => {
  const slides = [img1, img2, img3, img4, img5];

  return (
    <>
      <section className="bg-dark-goldenrod flex items-center">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 max-sm:flex max-sm:flex-col max-sm:items-center">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-5xl font-extrabold font-montserratbold tracking-tight leading-none text-penn-blue max-[1439px]:text-center max-sm:text-center max-sm:text-2xl">
              TAF Equipment & Logistics
            </h1>
            <h3 className="font-montserrat mb-6 text-penn-blue max-sm:text-sm max-sm:text-center max-[1439px]:text-center">
              Logistics Simplified. Equipment Empowered.
            </h3>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white font-opensans text-justify">
              De la gestion des stocks à la livraison internationale, les
              entreprises et partenaires sollicitant des services du secteur de
              l&apos;quipement et de la logistique comptent sur{" "}
              <span className="text-penn-blue font-bold">
                TAF Equipment & Logistics
              </span>{" "}
              pour simplifier leur chaîne d&apos;approvisionnement. Que vous
              souhaitiez acquérir des engins lourds ou des marchandises
              délicates, nous offrons une solution complète. La logistique
              simplifiée et l&apos;équipement au service de la performance.
            </p>
            <div className="max-sm:text-center max-[1439px]:text-center">
              <Link
                to="/services"
                className="bg-penn-blue hover:bg-indigo-dye inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
              >
                Nos Services
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link
                to="/contact"
                className="hover:bg-indigo-dye inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg focus:ring-4 focus:ring-gray-100 text-white"
              >
                Nous Contacter
              </Link>
            </div>
          </div>

          <div className="relative w-full lg:col-span-5 lg:flex max-sm:mt-6 max-w-lg mx-auto lg:max-w-none lg:mx-0 mt-6 lg:mt-0">
            <div className="max-w-lg">
              <HomeCarousel slides={slides} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroHome;

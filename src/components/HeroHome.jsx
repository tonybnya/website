import React from "react";
import { Link } from "react-router-dom";

import img1 from "/assets/img/carousel-1.jpg";
import img2 from "/assets/img/carousel-2.jpg";
import img3 from "/assets/img/carousel-3.webp";
import img4 from "/assets/img/carousel-4.jpg";
import img5 from "/assets/img/carousel-5.jpg";
import img6 from "/assets/img/carousel-6.jpg";

import video from "/assets/video/video-home.mp4";

import HomeCarousel from "./HomeCarousel";

const HeroHome = () => {
  const slides = [img1, img2, img3, img4, img5, img6];

  return (
    <>
      <section className="bg-penn-blue flex items-center">
        <video
          src={video}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-50"
        />
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 max-sm:flex max-sm:flex-col max-sm:items-center relative z-10">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] max-w-2xl mb-4 text-5xl font-extrabold font-montserratbold tracking-tight leading-none text-dark-goldenrod max-[1439px]:text-center max-sm:text-center max-sm:text-2xl">
              TAF Equipment & Logistics
            </h1>
            <h3 className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] font-montserrat mb-6 text-dark-goldenrod max-sm:text-sm max-sm:text-center max-[1439px]:text-center">
              Logistics Simplified. Equipment Empowered.
            </h3>
            <p className="[text-shadow:_0_1px_0_rgb(0_0_0_/_80%)] max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-neutral-50 text-shadow-md font-opensans text-justify">
              De la gestion des stocks à la livraison internationale, les
              entreprises et partenaires sollicitant des services du secteur de
              l&apos;équipement et de la logistique comptent sur{" "}
              <span className="text-dark-goldenrod font-bold">
                TAF Equipment & Logistics
              </span>{" "}
              pour simplifier leur chaîne d&apos;approvisionnement. Que vous
              souhaitiez acquérir des engins lourds ou des marchandises
              délicates, nous offrons une solution complète. Chez nous la
              logistique est simplifiée et l&apos;équipement est au service de
              la performance.
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
                className="hover:bg-indigo-dye inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-dark-goldenrod rounded-lg focus:ring-4 focus:ring-gray-100 text-white"
              >
                Nous Contacter
              </Link>
            </div>
          </div>

          <div className="relative w-full lg:col-span-5 lg:flex max-sm:mt-6 max-w-lg mx-auto lg:max-w-none lg:mx-0 mt-6 lg:mt-0 z-10">
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

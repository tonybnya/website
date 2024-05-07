import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CommonHeroSection from "../components/CommonHeroSection";
import bgServices from "/assets/img/services-hero.jpg";
import services from "../data/services";
import process from "../data/process";
import ServiceClient from "../components/ServiceClient";
import ServiceCard from "../components/ServiceCard";
import ProcessCard from "../components/ProcessCard";

const Services = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <>
      <CommonHeroSection title="Nos Services" imgUrl={bgServices} />
      <ServiceClient />
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-righteous text-center text-penn-blue mb-8">
          Nos Services
        </h2>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={5000}
          centerMode={false}
          containerClass="carousel-container"
          draggable
          focusOnSelect={false}
          infinite
          itemClass="carousel-item-padding-40-px"
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
              slidesToSlide: 3,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
              slidesToSlide: 2,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              slidesToSlide: 1,
            },
          }}
          showDots={false}
          sliderClass=""
          swipeable
        >
          {services.map((item, index) => (
            <div key={index} className="flex justify-center">
              <ServiceCard
                title={item.service}
                description={item.description}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="px-6 mb-12">
        <h1 className="text-center mb-6 font-righteous text-penn-blue text-3xl max-sm:text-2xl">
          Procédure pour bénéficier de nos services
        </h1>
        <div className="flex flex-row gap-4 items-center max-sm:flex-col max-sm:px-6 md:grid md:grid-cols-2 md:place-items-center xl:grid xl:grid-cols-3">
          {process.map((item, index) => (
            <ProcessCard
              key={index}
              stepNumber={item.stepNumber}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;

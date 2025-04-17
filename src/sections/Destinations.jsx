import React from "react";
import { travelDestinations } from "../index.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Destinations = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div id="destinations" className="h-screen overflow-auto">
      <h1
        data-aos="zoom-in"
        className="text-3xl ml-12 mb-4 mt-12 font-semibold text-l-blue md:text-4xl md:text-center "
      >
        Discover the World’ss
      </h1>
      <h1
        data-aos="zoom-in"
        className="ml-12  -mt-4 text-4xl text-l-blue font-semibold md:text-center"
      >
        {" "}
        Most Wanted Destinations!
      </h1>
      <p className="text-d-blue text-justify ml-12 mt-4 mr-16 font-semibold text-md md:text-center lg:ml-80 lg:mr-80 ">
        "From hidden gems to iconic landmarks, these are the spots everyone’s
        talking about. Start planning your next adventure!"
      </p>
      <p className="text-d-blue mt-6 mb-12 mr-16 ml-12 text-justify text-sm md:text-center md:ml-[15%] md:mr-[15%] md:mt-8 md:mb-8 ">
        Whether you’re seeking the sun-soaked beaches of Bali, the rich history
        of Rome, or the hustle and bustle of Tokyo, Tripzy brings you the most
        sought-after destinations worldwide. Get inspired by our top picks, and
        let us help you plan the perfect getaway. The world is waiting for you!
      </p>
      <div className="bg-blue p-4 flex gap-4 flex-wrap flex-col md:flex-row mt-4 items-center md:p-12 md:gap-8 md:flex-wrap md:justify-center ">
        {travelDestinations.map((item) => (
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="rounded-md bg-white w-60 p-2 m-2 shadow-md flex gap-2 items-center "
          >
            <img src={item.url} className="w-12 h-12"></img>
            <div>
              <p className="text-2xl text-l-blue mr-4">{item.city}</p>
              <p className="text-d-blue">{item.trips}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;

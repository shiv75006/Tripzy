import React from "react";
import Arrow from "../assets/arrow.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Flights = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div id="flights" className="bg-flight h-screen bg-cover bg-center  ">
      <h1 data-aos="fade-right" className="font-semibold text-d-blue  text-4xl py-12 ml-12 md:text-6xl md:mr-[45%]">
        Find the Best Flights Effortlessly
      </h1>
      <p data-aos="fade-right" className="-mt-8 text-d-blue ml-12 mr-44 font-semibold md:mr-[50%] md:text-lg">
        Discover the best flight deals tailored to your schedule and budget with
        Tripzy’s AI-powered search
      </p>
      <p data-aos="fade-left" className="ml-12 mr-28 text-d-blue text-xs  md:text-base md:mr-[45%]">
        Tripzy takes the hassle out of finding flights. Our AI scours multiple
        airlines and travel platforms to bring you the most convenient and
        affordable options for your journey. Whether you’re flying solo or
        booking for a group, Tripzy ensures you get the best deals with
        real-time updates and personalized recommendations.
      </p>
    <a href="/flightdetails">
    <button  data-aos="fade-right" className="flex flex-row p-2 gap-4 items-start border rounded-full ml-12 mt-8 hover:bg-d-blue shadow-md">
        <p className="text-white ">Find My Flight</p>
        <img className="w-6" src={Arrow}></img>
      </button>
    </a>
    </div>
  );
};

export default Flights;

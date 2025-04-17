import React from "react";
import Wing from "../assets/planewing.png";
import Bag from "../assets/backpack.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Link } from "react-router-dom";

const Trip = () => {

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div id="trip" >
      <div className="flex flex-col gap-2 md:flex-row m-12 md:ml-[15%] md:mr-[15%] lg:ml-[20%] lg:mr-[20%] ">
        <div data-aos="fade-right" className="md:mt-12" >
          <h1 className="text-4xl text-l-blue font-semibold ">
            Plan Your Perfect Itinerary with AI
          </h1>
          <p className="text-justify mr-8">
            Say goodbye to travel planning stress! Let Tripzy’s AI chatbot craft
            the perfect itinerary tailored just for you. Because planning should
            be as fun as the trip itself!” With Tripzy’s AI, every detail is
            tailored to make your experience unforgettable
          </p>
         <Link to={'/itinerary'}>
         <button className="mt-4 mb-4 bg-blue w-32 p-2 text-white rounded-full">
            Create
          </button>
         </Link>
         </div>
         <img data-aos="flip-right" className="w-60 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 " src={Wing}></img>
      </div>



      <hr className="mt-8 "></hr>
      <div className="flex flex-col gap-2 md:flex-row m-12 md:ml-[15%] md:mr-[15%] lg:ml-[20%] lg:mr-[20%] mb-28">
      <img data-aos="flip-left" src={Bag} className="w-60 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300  mt-8"></img>
        <div data-aos="fade-left" className="mt-12 ml-4">
          <h1 className="text-4xl text-l-blue font-semibold mt-4  ">
            Pack Like a Pro with AI Assistance
          </h1>
          <p className=" mr-8 text-justify">
            Say goodbye to overpacking or forgetting essentials. With Tripzy’s
            smart AI chatbot, packing for your trip is stress-free. Whether
            you’re heading to a tropical beach, a snowy mountain, or a bustling
            city, our AI considers your destination, weather, and planned
            activities to create a packing list that’s perfectly tailored for
            your adventure.
          </p>
         <Link to={'/packing-assistant'}>
         <button className="mt-4 mb-4 bg-blue text-white  p-2 rounded-full w-32">
            Let's Pack
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default Trip;

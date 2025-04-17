import React from 'react'
import Himg from '../assets/hotel.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Hotel = () => {

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div id='hotel' className='bg-d-brown'>
        <div className='md:flex gap-2 lg:ml-[10%] lg:mr-[10%]'>
            <img data-aos="zoom-in" data-aos-duration="3000" className='w-60 ml-12 py-12 md:w-64 lg:w-96  ' src={Himg}></img>
            <div className='m-2 md:mt-24'>
                <h1 data-aos="fade-left" className='ml-12 text-3xl text-l-brown font-semibold lg:text-5xl'>Find the <br></br>
                <span className='text-5xl lg:text-7xl'>Perfect Stay</span></h1>
                <p data-aos="fade-left" className='ml-12 mt-4 text-brown font-semibold '>
                    From budget-friendly hotels to luxury resorts, Tripzy helps you find and book accommodations that match your style
                   </p>

                   <p data-aos="fade-left" className='m-12 text-brown text-justify'>Whether you’re looking for a cozy stay near the beach or a chic hotel in the city center, Tripzy’s AI has you covered. With curated options based on your destination, budget, and preferences, finding the perfect place to stay has never been easier.</p>
                <button data-aos="fade-left" className='ml-12 mb-12 border p-2 text-brown rounded-full hover:bg-l-brown shadow:md'>Browse Hotels Now</button>
            </div>
        </div>
    </div>
  )
}

export default Hotel
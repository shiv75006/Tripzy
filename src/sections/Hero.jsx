import React from 'react'
import Hbg from '../assets/hero.png'
import Navbar from '../components/Navbar'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div id='hero' className="bg-hero-pattern h-screen bg-cover  "  >
        <div className='p-4'>
          <div  data-aos="fade-down">
          <Navbar></Navbar>
          </div>
            <h1  data-aos="fade-up" style={{fontFamily : "Fascinate"}} className='text-white text-6xl tracking-[1rem] text-center mt-64 md:text-8xl md:mt-96 hover:animate-bounce ' >TRIPZY AI</h1>
            <hr className='rounded-full w-[70%] ml-[15%]'></hr>
            <p  data-aos="zoom-in" data-aos-duration="3000" className='text-white text-[12px] text-center md:text-sm' >
            Pack Your Dreams, We’ll Handle the Rest
            </p>
            <div className='flex justify-center items-center'>
          <Link to={'/signin'}>
          <button className='bg-nav-bg/25 shadow-sm rounded-full px-6 py-2 m-4 text-white '>
                Sign In 
            </button></Link>
            </div>
            <Link to={'/signup'} className='flex justify-center items-center mt-2'>
            <button  className='text-xs text-white text-center -mt-4'>
                Register
            </button>
            </Link>
        </div>
        
    </div>
  )
}

export default Hero
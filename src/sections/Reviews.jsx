import React from 'react'
import { consumerReviews } from '../index.js'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import {Link} from 'react-router-dom'

const Reviews = () => {

    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);

  return (
    <div id='reviews'>
      <div className='m-12'>
        <h1 className='text-l-blue text-4xl font-semibold'>What Travelers 
        Are Saying ?</h1>
        <p className='text-l-blue'>Real reviews from real travelers who’ve 
        experienced the magic of Tripzy</p>
      </div>
      <div className='flex justify-center bg-blue w-48 h-12 rounded-2xl ml-12 text-white'>
        <Link className='flex items-center justify-center' to={'/reviewform'}><button >Write a review</button></Link>
      </div>
      <div className='flex flex-col overflow-auto items-center md:flex-row md:justify-center flex-wrap md:ml-[5%] md:mr-[5%]'>
        {consumerReviews.map((item)=>
            <div data-aos="zoom-in" data-aos-duration="2000" className='border p-4 m-2 rounded-2xl shadow-md w-80 h-48'>
                <p className='text-d-blue text-xl font-semibold'>{item.name}, {item.location}</p>
                <p className=''>Rating : {item.rating} Stars</p>
                <p className='mt-4 text-justify '>{item.review}</p>
            </div>
        )}
      </div>
    </div>
  )
}

export default Reviews
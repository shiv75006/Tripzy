import React, { useState } from 'react';
import Banner from '../assets/planner_banner.jpg'
import Footer from '../sections/Footer'

const FlightSearch = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [flights, setFlights] = useState([]);
  const [cityCode,setcityCode] = useState('');


 


  const handleSubmit = async (e) => {
    e.preventDefault();

   

    const url = `https://flights-sky.p.rapidapi.com/flights/search-everywhere?fromEntityId=${origin}&toEntityId=${destination}&type=oneway&year=${year}&month=${month}&currency=INR`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'ae2643afcemshb1a971693477b8ap1a65b9jsn17ab7fbd2418',
        'x-rapidapi-host': 'flights-sky.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result); // Logs the API response for debugging
      setFlights(result?.data?.flightQuotes?.results || []);
      setcityCode(result.data.flightQuotes.content.outboundLeg.originAirport.skyCode)
    } catch (error) {
      console.error('Error fetching flight data:', error);
    }

   
  };

  return (
 

    <div>
   
      <h1 className='ml-8 mt-4 text-l-blue text-2xl font-semibold'>Where are you headed to?</h1>
      <form className='mt-2 flex flex-col md:flex-row  w-[90%] ml-[10%]  gap-2  flex-wrap' onSubmit={handleSubmit}>
        
          
         <div className='flex flex-row h-12' >
        
         <input
            className='md:w-80 border m-2 text-sm rounded-full shadow-md p-2'
            placeholder='From?'
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            required
          />
        
        
        
      
          <input
            className='md:w-80 border p-2 text-sm rounded-full shadow-md m-2'
            placeholder='To?'
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
         
         </div>
      
        
       
        <div className='flex flex-row h-12'>
        <input
           className='border md:w-80 m-2 p-2 text-sm rounded-full shadow-md'
           placeholder='Year'
            type="integer"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
       
        
        
          <input
          className='border md:w-80 p-2 m-2 text-sm rounded-full shadow-md'
           placeholder='Month'
            type="integer"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            required
          />
       
        </div>
        <button className='bg-blue rounded-full w-32 text-sm p-2 ml-2 text-white' type="submit">Search Flights</button>
       
        
      </form>

      <h2 className='ml-8 mt-8 text-l-blue font-semibold text-base underline'>Available Flights</h2>
      <ul className='flex flex-col md:flex-row flex-wrap ml-12 mt-4 text-slate-500 gap-2 md:gap-6 md:ml-[15%]'>
        {flights.length > 0 ? (
          flights.map((flight) => (
            <li className='border p-4 rounded-2xl shadow-md w-80' key={flight.id}>
             
              <p>
                Departure: {flight.content.outboundLeg.localDepartureDateLabel}
              </p>
              <p className='mt-2'>
                From: {flight.content.outboundLeg.originAirport.name} (
                {flight.content.outboundLeg.originAirport.skyCode})
              </p>
              <p>
                To: {flight.content.outboundLeg.destinationAirport.name} (
                {flight.content.outboundLeg.destinationAirport.skyCode})
              </p> 
              <hr className='mt-4'></hr>
             <div className='flex justify-between mt-4'>
           
              <p className='text-slate-500'>{flight.content.direct ? 'Direct Flight' : 'Connecting Flight'}</p>
              <p className='text-blue font-semibold'>Price: {flight.content.price}</p>
             </div>
            </li>
          ))
        ) : (
          <p className='text-sm ml-12 mt-4'>Sorry! No flights available</p>
        )}
      </ul>
      <Footer></Footer>
    </div>
  );
};

export default FlightSearch;
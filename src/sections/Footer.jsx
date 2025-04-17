import React from 'react'
import { quickLinks } from '../index.js'
import { contactInfo } from '../index.js'
const Footer = () => {
  return (
    <div id='footer ' className=' bg-blue mt-12'>
        
      <div className='ml-12'>
      <p className=' text-white font-semibold text-lg mt-6'>Quick Links:</p>
             <div className='flex flex-col md:flex-row md:gap-12'>
               
             {quickLinks.map((item)=>
             <div className=''>
                 <a className='text-white' href={item.link}>{item.name}</a>
             </div>
            )}
             </div>
      </div>

             <div className='ml-12 mt-4'>
                <p className='text-white font-semibold text-xl'>Contact details: </p>
                {contactInfo.map((item)=>
                <div className='text-white flex flex-col  '>
                    <p>
                        {item.email}
                    </p>
                    <p>
                        {item.phone}
                    </p>
                    <p>
                        {item.address}
                    </p>
                </div>
                )}
             </div>
      
    </div>
  )
}

export default Footer
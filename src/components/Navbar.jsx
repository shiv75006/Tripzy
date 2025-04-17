import React from 'react'
import { navLinks } from '../index.js'
import { useState } from 'react';
import Menu from './bars-solid.svg'

const Navbar = () => {

    const [navShow, setnavShow] = useState('false');

    const handlenavShow = () => {
        setnavShow(!navShow);
      }

  return (
    <div className='bg-nav-bg/25 shadow-sm p-2 rounded-xl '>
        <img  src={Menu} width={32} onClick={handlenavShow} className='md:hidden '></img>
        <ul className={`md:flex gap-6 justify-center  text-lg ${navShow ?'visible' :'hidden'}`}>
            {navLinks.map((item) => 
            <li className='hover:text-nav-gray text-white font-medium  ' key={item.id}>
                <a className='m-2 text-sm lg:text-sm cursor-default' href={item.url} >
                {item.title}
                </a>
            </li>)}
        </ul>
    </div>
  )
}

export default Navbar
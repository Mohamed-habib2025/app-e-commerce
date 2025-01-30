import { Navbar, NavbarCollapse, NavbarToggle } from "flowbite-react";
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function AppNavbar() {
  const cart = useSelector(state => state.cart);

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleScroll = () => {
    if (isNavbarOpen) {
      setIsNavbarOpen(false);
    }
  };

  useEffect(() => {
    if (isNavbarOpen) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);

  }, [isNavbarOpen]);

  return (
    <Navbar className='px-4 mr-2 md:py-3 bg-gray-900 text-gray-300 fixed  w-full z-50'>
      <Link to="/" className="text-2xl font-semibold text-white"><span className='text-orange-400'>E-</span>commerce</Link>
      <NavbarToggle onClick={() => setIsNavbarOpen(!isNavbarOpen)} />
      <NavbarCollapse className={isNavbarOpen ? "block" : "hidden"}>
        <Link to="/" className=' hover:text-orange-400 duration-200 font-bold text-lg md:mt-0 mt-2 text-center'>Home</Link>
        <Link to="/about" className=' hover:text-orange-400 duration-200 font-bold text-lg md:mt-0 mt-2 text-center'>About </Link>
        <Link to="/contact" className=' hover:text-orange-400 duration-200 font-bold text-lg md:mt-0 mt-2 text-center'>Contact</Link>
        <div className=' relative md:mt-0 mt-2 text-center'>
          <Link to="/cart" className=' hover:text-orange-400 duration-200 font-bold text-lg '>
            Cart
          </Link>
          {
            cart.length == 0 ? null : <span className=' bg-red-600 h-5 w-5 rounded-full absolute text-center '>{cart.length}</span>
          }
        </div>
      </NavbarCollapse>
      <div className=' lg:block hidden w-[17%] text-end'>
        <button className=' py-2 px-4 w-18 rounded-lg bg-orange-400 text-gray-900 hover:bg-orange-500'>Login</button>
        <button className=' py-2 px-3 w-18 rounded-lg border border-orange-300 ml-2 hover:bg-orange-400 hover:text-gray-900'>Sign Up</button>
      </div>
    </Navbar>
  )
}

export default AppNavbar;

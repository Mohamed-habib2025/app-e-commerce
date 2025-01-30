import React from 'react'
import { Link } from 'react-router-dom';
import footerimg from "../Images/payment-getways.png"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-around">

            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-2xl font-semibold text-white"><span className='text-orange-400'>E-</span>commerce</h2>
              <p className="mt-4 text-gray-400 w-[70%]">
                Leading the way in delivering top quality products to our clients. Your satisfaction is our priority.
              </p>
            </div>

            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>

            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold text-white">Contact Us</h3>
              <p className="mt-4 text-gray-400">123 Street, City, Country</p>
              <p className="mt-2 text-gray-400">Phone: +123 456 789</p>
              <p className="mt-2 text-gray-400">Email: mohamed@example.com</p>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 BrandName. All rights reserved.
            </p>

            <img src={footerimg} alt="" />

            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><FaInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><FaLinkedinIn /></a>
            </div>

          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

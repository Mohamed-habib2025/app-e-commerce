import CustomerFeedback from "./CustomerFeedback";
import imgabout from "../Images/about-banner.png"
import DiscountBanner from './DiscountBanner';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { motion } from "motion/react"
import React, { useEffect } from 'react'

function Aboutus() {

  return (
    <>
      <div className='w-[90%] mx-auto mb-28 '>

        <div className='pt-24'>
          <h2 className=' w-full text-center font-bold text-orange-400 text-3xl '>About US</h2>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=' my-10 flex lg:flex-row flex-col justify-center items-center gap-10'>
            <div>
              <img className='h-[450px]' src={imgabout} alt="" />
            </div>
            <div className='flex flex-col gap-4 lg:w-1/2 w-full md:mb-0 mb-10'>
              <h3 className=' font-semibold text-2xl text-orange-400'>What is e-commerce business?</h3>
              <p className='text-gray-400 text-lg'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries but also the on leap into
                electronic typesetting.
              </p>
              <ul className='text-gray-400 list-disc relative left-4 text-lg'>
                <li>slim body with metal cover</li>
                <li>latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</li>
                <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard</li>
              </ul>
              <Link to='/contact' className=' mt-3 w-32 font-semibold text-center bg-orange-400 px-4 py-2 rounded hover:bg-orange-300'> Contact Us </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <CustomerFeedback />
      <DiscountBanner />
      <Footer />

    </>
  )
}

export default Aboutus;

import React from 'react'
import imgdiscount from "../Images/discount.png"
import { motion } from "motion/react"

function DiscountBanner() {
  return (
    <div className=" bg-blue-200 px-14 w-full shadow-lg h-96 flex items-center justify-center">

      <div className=' flex items-center justify-between md:w-[80%] w-full relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" md:w-1/2 w-full  ">
          <img
            src={imgdiscount}
            alt="Product"
            className="w-80 h-64 mx-auto"
          />
        </motion.div>

        <div className=" text-center md:relative absolute z-20 w-full">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold">
            Get <span className="text-yellow-400">20%</span> Off Discount Coupon
          </motion.h2>
          <p className="text-gray-600 mb-4">by Subscribe our Newsletter</p>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className=" w-full flex justify-center items-center">
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded border-t border-b border-l border-gray-300 lg:w-[65%] w-[70%] focus:outline-none"
            />
            <button className=" h-12 w-40 bg-yellow-300 text-black font-semibold  hover:bg-yellow-400 transition">
              Get the Coupon
            </button>
          </motion.div>
        </div>
      </div>

    </div>
  )
}

export default DiscountBanner;

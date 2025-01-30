import CustomerFeedback from './CustomerFeedback';
import DiscountBanner from './DiscountBanner';
import phone from "../Images/phone.png"
import email from "../Images/email.png"
import Footer from './Footer';
import React from 'react'

function Contact() {
  return (

    <>
    <div className='container mx-auto mb-9 '>
      <div className='relative flex xl:flex-row flex-col pt-24 items-center justify-center gap-4'>
        <div className=" space-y-6 mx-5 w-[90%]">
          <h2 className="text-2xl font-bold text-orange-400">Contact Information</h2>
          <p className="text-orange-100">Fill the form below or write to us. We will help you as soon as possible.</p>

          <div className='flex md:flex-row flex-col justify-center items-center  gap-5'>
            {/* Phone Section */}
            <div className="bg-red-100 p-4 rounded lg:w-96  w-full  flex flex-col items-center justify-center gap-2">
              <img src={phone} alt="" />
              <h3 className="text-xl font-semibold ">
                <span>Phone</span>
              </h3>
              <p className="text-gray-700">+ (323) 9847 3847 383</p>
              <p className="text-gray-700">+ (434) 5466 5467 443</p>
            </div>

            {/* Email Section */}
            <div className="bg-blue-100 p-4 rounded lg:w-96  w-full  flex flex-col items-center justify-center gap-2">
              <img src={email} alt="" />
              <h3 className="text-xl font-semibold ">
                <span>Email</span>
              </h3>
              <p className="text-gray-700">mohamedhabib@gmail.com</p>
              <p className="text-gray-700">mohamedelsayed@gmail.com</p>
            </div>
          </div>

          {/* Address Section */}
          <div className="bg-green-100 p-4 rounded ">
            <h3 className="text-xl font-semibold flex items-center space-x-2">
              <span role="img" aria-label="Address">📍</span>
              <span>Address</span>
            </h3>
            <p className="text-gray-700">4517 Washington Ave. Manchester, Road 2342, Kentucky 39495</p>
            <div className="mt-4">
              {/* Embedded Google Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24145.316622205215!2d-74.00204365857938!3d40.71272805255657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18b3e355%3A0x9e0349b3d8d3f4d4!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1631111111111!5m2!1sen!2sus"
                width="100%"
                height="200"
                className="rounded-lg border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          
        </div>

        {/* Contact Form */}
        <div className="w-[90%] bg-gray-700 px-8 py-4 rounded shadow-md mt-6 md:mt-0">
          <h2 className="text-2xl font-bold text-orange-400">Get In Touch</h2>
          <form className="space-y-4 mt-4 text-gray-400">
            <div>
              <label className="block text-orange-300 font-semibold">First Name*</label>
              <input type="text" className="w-full p-2  bg-orange-100 border-gray-300 rounded h-12 px-4 mt-2" placeholder="Demo Name" />
            </div>
            <div>
              <label className="block text-orange-300 font-semibold">Email Address*</label>
              <input type="email" className="w-full p-2  bg-orange-100 border-gray-300 rounded h-12 px-4 mt-2" placeholder="info@quomodosoft.com" />
            </div>
            <div>
              <label className="block text-orange-300 font-semibold">Subject*</label>
              <input type="text" className="w-full p-2  bg-orange-100 border-gray-300 rounded h-12 px-4 mt-2" placeholder="Your Subject here" />
            </div>
            <div>
              <label className="block text-orange-300  font-semibold">Message*</label>
              <textarea className="w-full p-2 bg-orange-100 border-gray-300 rounded mt-2" rows="4" placeholder="Type your message here"></textarea>
            </div>
            <button type="submit" className="w-full h-14 bg-orange-400 text-white py-2 rounded font-semibold hover:bg-orange-300">Send Now</button>
          </form>
        </div>
      </div>

    </div>

    <CustomerFeedback />
    <DiscountBanner />
    <Footer />

    </>

  )
}

export default Contact;

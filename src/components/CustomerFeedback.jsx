import React, { useState } from 'react';
import { motion } from "motion/react"

const customerReviews = [
  {
    name: 'Ridoy Rock',
    location: 'London, UK',
    rating: 5,
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Sophie Lee',
    location: 'Paris, France',
    rating: 4.5,
    review: 'The service provided was amazing. I am extremely satisfied with the product...',
    image: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
  {
    name: 'John Doe',
    location: 'New York, USA',
    rating: 5,
    review: 'Absolutely fantastic! Highly recommended for anyone looking for quality...',
    image: 'https://randomuser.me/api/portraits/men/12.jpg'
  },
  {
    name: 'Jane Smith',
    location: 'Berlin, Germany',
    rating: 4.8,
    review: 'Very professional and friendly. Will definitely come back for more...',
    image: 'https://randomuser.me/api/portraits/women/34.jpg'
  },
  {
    name: 'James Brown',
    location: 'Sydney, Australia',
    rating: 4.9,
    review: 'Great experience! The team was very helpful and responsive...',
    image: 'https://randomuser.me/api/portraits/men/45.jpg'
  },
  {
    name: 'Emily Davis',
    location: 'Tokyo, Japan',
    rating: 5,
    review: 'Highly recommended! The quality and service are unmatched...',
    image: 'https://randomuser.me/api/portraits/women/56.jpg'
  }
];

function CustomerFeedback() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + 1 < customerReviews.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const displayedReviews = [
    customerReviews[currentIndex],
    customerReviews[(currentIndex + 1) % customerReviews.length],
    customerReviews[(currentIndex + 2) % customerReviews.length],
    customerReviews[(currentIndex + 3) % customerReviews.length]
  ];

  return (
    <div className=" w-[90%] mx-auto my-8 p-5">
      <h2 className="text-3xl text-white font-bold text-center mb-6">Customers Feedback</h2>
      {/* big screen */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className=" hidden sm:grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 lg:gap-2 gap-4">
        {displayedReviews.map((customer, index) => (
          <div key={index} className="px-4 py-5 bg-white rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-xl mr-2">{"★".repeat(Math.floor(customer.rating))}</div>
              <span className="text-gray-600 font-semibold">({customer.rating.toFixed(1)})</span>
            </div>
            <p className="text-gray-600 mb-4 line-clamp-2">{customer.review}</p>
            <div className="flex items-center">
              <img
                src={customer.image}
                alt={customer.name}
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <h3 className="font-bold text-gray-800">{customer.name}</h3>
                <p className="text-gray-500">{customer.location}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      {/* small screen */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="sm:hidden">
        <div className=" p-4 rounded shadow w-80 mx-auto">
          <div key={customerReviews[currentIndex].name} className="px-4 py-5 bg-white rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-xl mr-2">{"★".repeat(Math.floor(customerReviews[currentIndex].rating))}</div>
              <span className="text-gray-600 font-semibold">({customerReviews[currentIndex].rating.toFixed(1)})</span>
            </div>
            <p className="text-gray-600 mb-4 line-clamp-2">{customerReviews[currentIndex].review}</p>
            <div className="flex items-center">
              <img
                src={customerReviews[currentIndex].image}
                alt={customerReviews[currentIndex].name}
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <h3 className="font-bold text-gray-800">{customerReviews[currentIndex].name}</h3>
                <p className="text-gray-500">{customerReviews[currentIndex].location}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex justify-center items-center mt-6 gap-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`w-14 h-14 rounded-full text-white  ${currentIndex === 0 ? 'bg-gray-300' : 'bg-orange-300 hover:bg-orange-400'
            }`}
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex + 3 >= customerReviews.length}
          className={`w-14 h-14 rounded-full  text-white ${currentIndex + 3 >= customerReviews.length ? 'bg-gray-300' : 'bg-orange-300 hover:bg-orange-400'
            }`}
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
}

export default CustomerFeedback

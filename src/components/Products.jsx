import { clearSelectedCategory, fetchCategories, fetchCategory, fetchProducts } from '../rtk/slices/Products-slice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../rtk/slices/Cart-slice';
import React, { useState, useEffect } from 'react';
import CustomerFeedback from './CustomerFeedback';
import { Card, Button } from "flowbite-react";
import DiscountBanner from './DiscountBanner';
import AppNavbar from "./AppNavbar"
import Footer from './Footer';

function Products() {

  const [searchTerm, setSearchTerm] = useState('');
  const products = useSelector((state) => state.products.products);
  const Categories = useSelector((state) => state.products.categories);
  const selectCategories = useSelector((state) => state.products.selectedCategory);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [])

  const navigate = useNavigate();

  const displayedProducts = selectCategories.length > 0 ? selectCategories : products;

  const filteredProducts = displayedProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <AppNavbar />
      <div className=' w-[90%] mx-auto bg-gray-800 '>

        <div className=" w-full pt-20 flex items-center justify-center">
          <input
            type="search"
            className=" lg:w-[35%] md:w-[60%] w-[80%] rounded-3xl bg-transparent transition duration-200 ease-in-out focus:text-neutral-300  "
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon1"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className='flex flex-wrap justify-center items-center gap-3 mx-5 '>
          <button onClick={() => { dispatch(clearSelectedCategory()); dispatch(fetchProducts()) }} className='md:my-4 mt-3 py-2 px-4 rounded-lg bg-orange-400  text-gray-900 hover:bg-orange-500 duration-300'>All</button>
          {
            Categories.map((category) => (
              <button onClick={() => dispatch(fetchCategory(category))} key={category} className='md:my-4 mt-3 py-2 px-4 rounded-lg bg-orange-400 text-gray-900 hover:bg-orange-500 duration-300'>{category}</button>
            ))
          }
        </div>

        <div className=' relative container mx-auto pb-8 pt-2 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 items-center justify-center '>

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Card
                key={product.id}
                className=" max-w-[300px] mx-auto h-96"
              >
                <img
                  onClick={() => navigate(`/product/${product.id}`)}
                  src={product.image}
                  alt={product.model}
                  className='cursor-pointer h-52' />
                <a>
                  <h5 className="text-xl font-semibold tracking-tight line-clamp-2 text-gray-900 dark:text-white">
                    {product.title}
                  </h5>
                </a>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{product.price}$</span>
                  <button className='bg-teal-500 rounded-lg px-4 py-2 text-white hover:bg-teal-700 duration-150' onClick={() => dispatch(addToCart(product))}>Add to cart</button>
                </div>
              </Card>
            ))
          ) : (<p className="text-red-500 text-2xl font-semibold">This product is not available.</p>)}



        </div>
      </div>
      <CustomerFeedback />
      <DiscountBanner />
      <Footer />
    </>

  )
}

export default Products

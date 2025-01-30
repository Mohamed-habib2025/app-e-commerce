import { fetchProductById } from '../rtk/slices/Products-slice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';


function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.productDetails);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="lg:w-[90%] w-[98%] flex lg:flex-row flex-col justify-center items-center gap-5 mx-auto mb-10 pt-24 text-gray-200 ">
      <div className=' bg-white px-2 py-1 rounded-xl '>
        <img src={product.image} alt={product.title} className=" md:w-[400px] w-[350px] h-[300px] mb-5 rounded-xl mx-auto" />
      </div>
      <div className=' w-[80%]'>
        <h1 className="text-xl font-semibold font-serif mb-5"><span className=' text-orange-400'>Name:</span> {product.title}</h1>
        <div className='w-full flex items-center gap-12 my-5'>
          <p className="text-xl font-semibold mb-2"><span className='text-orange-400 text-xl font-serif font-semibold'>Price: </span> ${product.price}</p>
          <p className="text-xl font-semibold mb-2"> <span className='text-orange-400 text-xl font-serif font-semibold'>Category: </span>{product.category}</p>
          <p className="text-xl font-semibold mb-2"> <span className='text-orange-400 text-xl font-serif font-semibold'>Color: </span>{product.color}</p>
        </div>
        <p className="text-2xl mb-5 "><span className='text-orange-400 text-2xl font-semibold font-serif'>Description: </span>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetails;

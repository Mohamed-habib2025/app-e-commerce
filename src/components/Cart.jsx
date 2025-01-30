import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { clear, deletefromCart, lessquantity, morequantity } from '../rtk/slices/Cart-slice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from "flowbite-react";
import Swal from 'sweetalert2'
import React from 'react'

function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((accumelator, product) => {
    accumelator += product.price * product.quantity;
    return accumelator;
  }, 0)



  return (
    <div className='w-[80%] mx-auto relative mb-10 text-center font-bold text-orange-400 text-3xl'>

      <div className="mx-4 pt-20">
        <h1 className=' text-2xl'>My Cart</h1>
        <div className=" w-full flex items-center justify-between">
          <h5 className="my-5 text-lg">Total Price: {totalPrice.toFixed(2)} $</h5>
          <Button
            onClick={() => {
              Swal.fire({
                title: "Are you sure you want to delete all products?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete its!"
              }).then((result) => {
                if (result.isConfirmed) {
                  dispatch(clear())
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                }
              });
            }
            }
            color="failure"
            className=" my-5 p-0 sm:w-[96px] w-[70px]">
            Delete All
          </Button>
        </div>

        <div className="lg:block hidden">
          <Table className=" overflow-hidden bg-gray-900">
            <TableHead >
              <TableHeadCell className="text-gray-900">Product name</TableHeadCell>
              <TableHeadCell className="text-gray-900">Image</TableHeadCell>
              <TableHeadCell className="text-gray-900">Price</TableHeadCell>
              <TableHeadCell className="text-gray-900">Quantity</TableHeadCell>
              <TableHeadCell className="text-center text-gray-900">Actions</TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
              {cart.map((product) => (
                <TableRow key={product.id} className="dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="font-medium text-gray-100 text-2xl">
                    {product.model}
                  </TableCell>
                  <TableCell>
                    <img
                      src={product.image}
                      alt={product.model}
                      className="text-center w-[150px] rounded"
                    />
                  </TableCell>
                  <TableCell className="text-gray-100 text-2xl">{product.price}$</TableCell>
                  <TableCell className="text-gray-100 text-2xl space-x-3  w-[200px]">
                    <button onClick={() => dispatch(morequantity(product))} className=" w-7 font-serif text-2xl hover:bg-slate-700 duration-200">+</button>
                    <span>{product.quantity}</span>
                    <button onClick={() => dispatch(lessquantity(product))} className=" w-7 font-serif text-2xl hover:bg-slate-700 duration-200">-</button>
                  </TableCell>
                  <TableCell className="flex items-center justify-center h-40 gap-2">
                    <Button
                      onClick={() => {
                        Swal.fire({
                          title: "Are you sure?",
                          text: "You won't be able to revert this!",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Yes, delete it!"
                        }).then((result) => {
                          if (result.isConfirmed) {
                            dispatch(deletefromCart(product))
                            Swal.fire({
                              title: "Deleted!",
                              text: "Your file has been deleted.",
                              icon: "success"
                            });
                          }
                        });
                      }
                      }
                      color="failure">
                      Delete
                    </Button>
                    <Button color="blue" onClick={() => navigate(`/product/${product.id}`)}>View</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>


        <div className=" lg:hidden block">
          <div className="grid sm:grid-cols-2  gap-2 items-center justify-center">
            {
              cart.map((product) => (
                <Card
                  key={product.id}
                  className=" max-w-xs lg:w-[380px] h-[430px]"
                >
                  <img
                    src={product.image}
                    alt={product.model}
                    className='h-56 ' />
                  <a>
                    <h5 className="text-xl text-start font-semibold tracking-tight line-clamp-2 text-gray-900 dark:text-white">
                      {product.title}
                    </h5>
                  </a>

                  <div className="flex items-center justify-between">
                    <span className="text-xl text-gray-800 text-start">Quantity: {product.quantity}</span>
                    <div className=" space-x-2 text-black">
                      <button onClick={ () => dispatch(morequantity(product))} className=" border w-7 font-serif text-lg hover:bg-slate-300 duration-200">+</button>
                      <button onClick={() => dispatch(lessquantity(product))} className=" border w-7 font-serif text-lg hover:bg-slate-300 duration-200">-</button>
                    </div>
                  </div>


                  <div className=" w-full flex items-center justify-between pb-4">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.price}$</span>
                    <div className="flex justify-center items-center sm:gap-2 gap-1">
                      <Button
                        onClick={() => {
                          Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!"
                          }).then((result) => {
                            if (result.isConfirmed) {
                              dispatch(deletefromCart(product))
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your product has been deleted.",
                                icon: "success"
                              });
                            }
                          });
                        }
                        }
                        color="failure"
                        className="sm:w-14 p-0">
                        Delete
                      </Button>
                      <Button className="sm:w-14 p-0 " color="blue" onClick={() => navigate(`/product/${product.id}`)}>View</Button>
                    </div>
                  </div>
                </Card>
              ))
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart;



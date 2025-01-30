import { createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2'

const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};


export const cartSlice = createSlice({
  initialState: loadCartFromLocalStorage(),
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const foundedproduct = state.find((product) => product.id === action.payload.id)
      if (foundedproduct) {
        
        Swal.fire({
          title :"This product in your cart." , 
          icon:"info"});

      } else {
        const productClone = { ...action.payload, quantity: 1 }
        state.push(productClone)

        Swal.fire({
          position: "center",
          icon: "success",
          title: " Added To Cart ",
          showConfirmButton: false,
          timer: 1000
        });
      }
      saveCartToLocalStorage(state);
    },
    morequantity: (state, action) => {
      const foundedproduct = state.find((product) => product.id === action.payload.id)
      if (foundedproduct) {
        foundedproduct.quantity += 1;
      }
      saveCartToLocalStorage(state);
    },
    lessquantity: (state, action) => {
      const foundedproduct = state.find((product) => product.id === action.payload.id)
      if (foundedproduct) {
        foundedproduct.quantity == 1 ? null : foundedproduct.quantity -= 1;
      }
      saveCartToLocalStorage(state);
    },
    deletefromCart: (state, action) => {
      const updatedCart = state.filter((product) => product.id !== action.payload.id);
      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    },
    clear: (state) => {
      saveCartToLocalStorage([]);
      return [];
    },
  }
})


export const { addToCart, morequantity, lessquantity, deletefromCart, clear } = cartSlice.actions;

export default cartSlice.reducer;
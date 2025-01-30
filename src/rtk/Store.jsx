import { configureStore } from "@reduxjs/toolkit";
import ProductsSlisce from "./slices/Products-slice"
import cartSlice  from "./slices/Cart-slice";

export const store = configureStore({
  reducer:{
    products: ProductsSlisce,
    cart : cartSlice
  }
})


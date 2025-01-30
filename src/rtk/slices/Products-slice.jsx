import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("ProductsSlisce/fetchProducts ", async () => {
  const res = await fetch('https://fakestoreapi.in/api/products');
  const data = await res.json();
  return data.products;
})
export const fetchCategories = createAsyncThunk("ProductsSlisce/fetchCategories ", async () => {
  const res = await fetch('https://fakestoreapi.in/api/products/category');
  const data = await res.json();
  return data.categories;
})
export const fetchCategory = createAsyncThunk("ProductsSlisce/fetchCategory ", async (cate) => {
  const res = await fetch(`https://fakestoreapi.in/api/products/category?type=${cate}`);
  const data = await res.json();
  return data.products;
})
export const fetchProductById = createAsyncThunk("products/fetchProductById", async (id) => {
  const res = await fetch(`https://fakestoreapi.in/api/products/${id}`);
  const data = await res.json();
  return data.product;
});

const ProductsSlisce = createSlice({
  initialState: {
    products: [],
    categories: [],
    selectedCategory: [],
    productDetails: null
  },
  name: "ProductsSlisce",
  reducers: {
    clearSelectedCategory: (state) => {
      state.selectedCategory = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });

    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.selectedCategory = action.payload;
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.productDetails = action.payload;
    });


  }
})

export const { clearSelectedCategory } = ProductsSlisce.actions;

export default ProductsSlisce.reducer;
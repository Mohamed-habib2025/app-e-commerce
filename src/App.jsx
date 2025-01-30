import { Route, Routes } from "react-router-dom"
import AppNavbar from "./components/AppNavbar"
import Products from "./components/Products"
import Cart from "./components/Cart"
import Aboutus from "./components/Aboutus"
import Contact from "./components/Contact"
import ProductDetails from "./components/ProductDetails"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Login from "./components/Login"


function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);

  return (
    <div >
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Products />} />
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="cart" element={<Cart />} />
        <Route path="about" element={<Aboutus />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>

  )
}

export default App

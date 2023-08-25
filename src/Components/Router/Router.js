import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/home";
import Layout from "../Layout/Layout";
import Footer from "../Footer/Footer";
import Help from '../Help/Help'
import Blog from '../Blog/Blog'
import About from "../About/About";
import { DataProvider } from "../../Context/GlobalContext";
import Shop from "../Shop/Shop";
import { CartProvider } from "react-use-cart";
import Cart from "../Cart/Cart";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Wishlist from "../Wishlist/Wishlist";
import { WishlistProvider } from "react-use-wishlist";

const Router = () => {
  return (
    <>
    <WishlistProvider>
    <CartProvider>
       <DataProvider>
       <BrowserRouter>
       <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="light"
              />
       <Layout/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="help" element={<Help/>} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="card" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
     </DataProvider>
     </CartProvider>
    </WishlistProvider>
    </>
  );
};

export default Router;

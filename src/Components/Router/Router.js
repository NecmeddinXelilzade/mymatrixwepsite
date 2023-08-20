import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/home";
import Layout from "../Layout/Layout";
import Footer from "../Footer/Footer";
import Help from '../Help/Help'
import Blog from '../Blog/Blog'
import Account from "../Account/Account";
import { DataProvider } from "../../Context/GlobalContext";
import Shop from "../Shop/Shop";

const Router = () => {
  return (
    <>
     <DataProvider>
       <BrowserRouter>
       <Layout/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="help" element={<Help/>} />
          <Route path="blog" element={<Blog />} />
          <Route path="Account" element={<Account />} />
          <Route path="shop" element={<Shop />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
     </DataProvider>

    </>
  );
};

export default Router;

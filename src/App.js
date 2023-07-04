import React from "react";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./component/header/Navbar";
import "./App.css";
import Home from "./component/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./component/pages/Products";
import Product from "./component/pages/Product";
import { Provider } from "react-redux";
import Store from "./component/store/Store";
import Cart from "./component/pages/Cart";
import NotFound from "./component/pages/NotFound";
import { ToastContainer } from "react-toastify";
import Register from "./component/pages/Register";
import Login from "./component/pages/Login";
import Footer from "./component/footer/Footer";
import About from "./component/pages/About";
import Contect from "./component/pages/Contect";

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
          <ToastContainer />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contect" element={<Contect/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;

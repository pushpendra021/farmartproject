import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './frontend/navbar';
// import Footer from './frontend/footer';
// import Slider from './frontend/slider';
// import { slidesData } from "./frontend/slidesData";
import Home from "./frontend/Home";
import About from "./frontend/About";
import Product from "./frontend/Product";
import Contact from "./frontend/Contact";
import SingleProduct from "./frontend/SingleProduct";
import Cart from "./frontend/Cart";
import ErrorPage from "./frontend/ErrorPage";
function App() {
  return (

<BrowserRouter>

<Routes>
  <Route path="/" element={<Home></Home>}></Route>
  <Route path="/about" element={<About></About>}></Route>
  <Route path="/product" element={<Product></Product>}></Route>
  <Route path="/contact" element={<Contact></Contact>}></Route>
  {/* show the single product with different images */}
  <Route path="/singleproduct/;id" element={<SingleProduct></SingleProduct>}></Route> 
  <Route path="/cart" element={<Cart></Cart>}></Route> 
  {/* error page if another than the above page than show the error page */}
  <Route path="*" element={<ErrorPage></ErrorPage>}></Route> 
</Routes>

</BrowserRouter>

//    <div>
// <Navbar></Navbar>
// <br></br>
// <br></br>

//   {/* <Slider slides={slidesData} /> */}

// <br></br>

// {/* <Footer></Footer> */}

//    </div>
  );
}

export default App;
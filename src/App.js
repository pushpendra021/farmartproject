import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
// import Navbar from './frontend/navbar';
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
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./frontend/GlobalStyle";
import Header from './frontend/Header';
import Slider from './frontend/Slider';
import { slidesData } from "./frontend/slidesData";
import Footer from './frontend/Footer';

function App() {

  const theme={
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "white",
      black: " #212529",
      helper: "white",
      bg: "#e6ffe6",
      bg1:"#e6ffe6",
      bg2:"#ffffff",
      footer_bg: "green",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };



  return (
        //themeprovider provide the text-color which looklike same in entire project i.e entire component its used
<ThemeProvider theme={theme}>

<Router>

<GlobalStyle></GlobalStyle>
<Header></Header>
<Slider slides={slidesData} />
<br></br>
<br></br>

<Routes>

 {/* Globalstyle work as a external css,globalstyle is a like bootstarp */}

  <Route path="/" element={<Home></Home>}></Route>
  <Route path="/about" element={<About></About>}></Route>
  <Route path="/product" element={<Product></Product>}></Route>
  <Route path="/contact" element={<Contact></Contact>}></Route>


  {/* show the single product with different images */}
  <Route path="/singleproduct/:id" element={<SingleProduct></SingleProduct>}></Route> 
  <Route path="/cart" element={<Cart></Cart>}></Route> 



  {/* error page if another than the above page than show the error page */}
  <Route path="*" element={<ErrorPage></ErrorPage>}></Route> 
</Routes>
<Footer></Footer>
</Router>

</ThemeProvider>
  );
}

export default App;
import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useSelector } from 'react-redux';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Foods from './Components/Foods/Foods';
import About from './Components/About US/About';

function App() {

  const products=useSelector((state)=>state.allProducts.products)
  console.log(products);
  return (
    <BrowserRouter>
    <Header></Header>
   <Routes>
     <Route  path="/" element={<Home />} />
     <Route path="/Foods" element={<Foods />} />
     <Route path="/about" element={<About />} />
   </Routes>
   <Footer></Footer>
   </BrowserRouter>
  );
}

export default App;

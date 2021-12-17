import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useSelector } from 'react-redux';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Foods from './Components/Events/Event';
import About from './Components/About US/About';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Contexts/AuthProvider';
import Events from './Components/Events/Events';

function App() {

  
  return (
    <AuthProvider>
    <BrowserRouter>
    <Header></Header>
   <Routes>
     <Route  path="/" element={<Home />} />
     <Route path="/events" element={<Events />} />
     <Route path="/about" element={<About />} />
     <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<SignUp />} />
   </Routes>
   <Footer></Footer>
   </BrowserRouter>
   </AuthProvider>
  );
}

export default App;

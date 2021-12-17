import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
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
import axios from 'axios';
import { SetProduct } from './app/Actions/ProductActions';
import Myorders from './Components/MyOrder/Myorders';
import Details from './Components/Detaills/Details';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  const dispatch=useDispatch()

  const fetchData= async ()=>{

     const response=await axios.get('http://localhost:9000/matches').catch(err=>console.log(err))
    dispatch(SetProduct(response.data));
  }
  
       useEffect(()=>{
        fetchData()
       },[])

  
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
     <Route path="/order/:email" element={<Myorders />} />
     <Route path="/sports/:id" element={<PrivateRoute>
              <Details/>
            </PrivateRoute>}></Route>
   </Routes>
   <Footer></Footer>
   </BrowserRouter>
   </AuthProvider>
  );
}

export default App;

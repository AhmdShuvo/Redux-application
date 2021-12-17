import { useEffect } from "react";
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { SetProduct } from "../../app/Actions/ProductActions";
import Event from "./Event";
import { Container, Row } from "react-bootstrap";

const Events = () => {
   
        
         const products=useSelector((state)=>state.allProducts.products)
         if(products.lenght===0){
             return <span className="visually-hidden">Loading...</span>
         }
    return (
        <Container>
             <h1>events</h1>
             <Row xs={1} md={3} className="g-4">
           
           { products.map(product=><Event
           product={product}
           key={product._id}
           ></Event>)
                            
           }
           </Row>
        </Container>
    );
};

export default Events;
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Order from './Order';

const Myorders = () => {

    const [orders,setOrders]=useState([])

    const {email}=useParams()

      useEffect(()=>{


      fetch(`http://localhost:9000/order/${email}`).then(res=>res.json()).then(data=>setOrders(data))

      },[email])

      if(!orders){
           return "loading"

      }

        //  const {name}=orders.purchase

    return (

        
        <Container className="my-5">

             <h1>My Orders {orders.length} </h1>
            <Row xs={1} md={2} className="g-4">
           {
               orders.map(order=><Order
               key={order._id}
               order={order}
               ></Order>)
           }
           </Row>
        </Container>
    );
};

export default Myorders;
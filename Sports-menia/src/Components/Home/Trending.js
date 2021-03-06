import React from 'react';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Event from '../Events/Event';

const Trending = () => {
    const products=useSelector((state)=>state.allProducts.products.slice(0,5))
    return (
        <div>
             <Row className="mt-5" xs={1} md={3} className="g-4">
            {
                
                products.map(Product=><Event
                key={Product._id}
                product={Product}
                ></Event>)
            }
            </Row>

            <center className="my-5"><Link to="/events"> <button className="btn-warning p-2 boorder rouded-3 container-fluid text-light ">See More</button> </Link></center>
        </div>
    );
};

export default Trending;
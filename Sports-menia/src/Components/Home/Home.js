import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Trending from './Trending';

const Home = () => {
   
    return (
        <>
        <div className="mb-5" style={{
            position: "relative",
            textAlign: "center",
            color:" white"
          }}>
            <img src="./images/banner.jpg" alt="Banner" width="100%" height="400px"></img>
            <div  className=""><h1  style={{
  position: "absolute",
  bottom: "200px",
  right:" 460px",
  fontSize:'48px' }}>Sport mania
  <p> populer Sports website</p>
  </h1>
  
  </div>

        </div>

        <Container>
            <h1>Trending Sports </h1>
            <Trending></Trending>
        </Container>
        </>
    );
};

export default Home;
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Review from '../Review/Review';
import Trending from './Trending';

const Home = () => {
   
    return (
        <>
        <div className="mb-5 animate__animated animate__backInLeft" style={{
            position: "relative",
            textAlign: "center",
            color:" white"
          }}>
            <img src="./images/banner.jpg" alt="Banner" width="100%" height="400px"></img>
            <center><div  className="animate__animated animate__backInLeft  animate__delay-1s"><h1  style={{
  position: "absolute",
  bottom: "200px",
  right:" 60px",
  fontSize:'48px',
  color:'goldenrod' }}>Sport mania
  <p> populer Sports website</p>
  </h1>
  
  </div></center>

        </div>

        <Container>
            <h1>Trending Sports </h1>
            <Trending></Trending>

            <h3>user ratings</h3>
            <Review></Review>
        </Container>
        </>
    );
};

export default Home;
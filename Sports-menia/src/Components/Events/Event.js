
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Event = ({product}) => {
    const {strSport,strSportThumb ,strSportDescription,_id}=product;
    return (
        <Col>
        <Card  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <Card.Img variant="top" src={`${strSportThumb}`}/>
          <Card.Body>
            <center><Card.Title className="text-info">{strSport}</Card.Title></center>
            <Card.Text>
             {strSportDescription.slice(0,500)}
            </Card.Text>
          </Card.Body>
           <Link to ={`/sports/${_id}`}><Button>Add to Favorites</Button></Link>
        </Card>
      </Col>
    );
};

export default Event;
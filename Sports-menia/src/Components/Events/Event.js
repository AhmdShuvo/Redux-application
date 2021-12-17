
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Event = ({product}) => {
    const {strSport,strSportThumb ,strSportDescription}=product;
    console.log(product);
    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={`${strSportThumb}`}/>
          <Card.Body>
            <center><Card.Title className="text-info">{strSport}</Card.Title></center>
            <Card.Text>
             {strSportDescription.slice(0,500)}
            </Card.Text>
          </Card.Body>
           <Button>Add to Favorites</Button>
        </Card>
      </Col>
    );
};

export default Event;
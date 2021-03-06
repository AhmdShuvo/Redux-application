import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Order = ({order}) => {


    const handleDelete=e=>{

     const confirmation=  window.confirm(`Are You sure want to delete ${order.purchase.name} from You order ?`)

       if( confirmation){
        fetch(`https://radiant-sands-17727.herokuapp.com/order/${order._id}`,{
            
            method:'DELETE',
            headers: { "content-type" :'application/json'}
        }).then(res=>res.json()).then(data=>{
        });
       }

        alert("Order Deleted")
       window.location.reload()
                  
    }

    const {strSport,strSportThumb ,strSportDescription,_id}= order.purchase
    return (
                    
        <Container>          
        <Card className="shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Img variant="top" src={strSportThumb}/>
        <Card.Body>
          <Card.Title>{strSport}</Card.Title>
          <Card.Text>
            {strSportDescription}
          </Card.Text>
          <div className="border border-info p-3 ">
          </div>
        </Card.Body>
         <Button onClick={handleDelete} className="btn-danger p-2 fs-3">Delete order</Button>
      </Card>
     
      </Container>
    );
};

export default Order;
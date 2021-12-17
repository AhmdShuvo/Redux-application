import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SELECTED_PRODUCT } from '../../app/Actions/ProductActions';
import useAuth from '../../Hooks/useAuth';


const Details = () => {

    const {user}=useAuth()

    const [userInfo,setInfo]=useState({})
      

        
                //    Get Values from user /// 
     const handleChange=e=>{
        const field= e.target.name
        const value=e.target.value
     const newUserInfo={...userInfo}
     newUserInfo[field]=value;
     setInfo(newUserInfo)
            
   

     }


    //  handle Order Function ///
     
    

    const {id}=useParams()
    const product=useSelector((state)=>state.product)
    const dispatch=useDispatch()
    const FetchData=async()=>{

    const response= await axios.get(`http://localhost:9000/sport/${id}`).catch(err=>console.log(err))
    dispatch(SELECTED_PRODUCT(response.data))
    console.log(product);
    };
    useEffect(()=>{
      FetchData()
    },[id])

    const handleOrder=e=>{

        const purchase=product;

        let userData={name:`${user.displayName}`,email:`${user.email}`,address:`${userInfo.address}`,phone:`${userInfo.phone}`}

        userData.purchase=purchase
        userData.status="pending"
                  
 //   POST REQUEST //
    fetch(`https://radiant-sands-17727.herokuapp.com/orders`,{
       method:'POST',
       headers:{ "content-type": 'application/json'},
              body:JSON.stringify(userData)

     })


     alert("Order Added successfully")
    e.preventDefault()
}
    const {strSport,strSportThumb ,strSportDescription,_id}=product;
    return (
        <Container>
            <h1>anme</h1>
            <img src={strSportThumb} alt="" />
            <h4>{strSport}</h4>
            <p>{strSportDescription}</p>

            <h4>Please Provide some Information</h4>

                <div>
                <form onSubmit={handleOrder}>    <label>User Name</label>
                <Form.Control onBlur={handleChange}  name="name" type="text" placeholder="username" defaultValue={user.displayName} disabled />
                     <br />
                    <label>User Email</label>
                <Form.Control onBlur={handleChange} name="email" type="email" placeholder="email" defaultValue={user.email} disabled  />
                     <br />
                    <label> Address </label>
                <Form.Control onBlur={handleChange} name="address" type="text" placeholder="User Address" required />
                     <br />
                    <label>Phone Number</label>
                <Form.Control onBlur={handleChange} name="phone" type="Number" placeholder="Phone" required />
                     <br />
                      <center><Button type="submit" className="btn-warning text-light p-3 fs-5 border rounded-3">Place Order </Button></center></form>
                </div>
        </Container>
    );
};

export default Details;
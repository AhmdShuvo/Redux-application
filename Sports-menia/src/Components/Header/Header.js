import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
   
    const {user,LogOUt}=useAuth()
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">Sport-menia</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavLink className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to="/"> Home</NavLink>
      {user.email &&<NavLink  className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to={`order/${user.email}`}>My Favorites</NavLink>}
      <NavLink className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to="/events">Events</NavLink>
      {user.email?<NavLink onClick={LogOUt} className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to="/Login"> Logout</NavLink>:<NavLink className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to="/Login">Login</NavLink>}
      
    
     
    </Nav>
    {user.displayName && <h1 className="text-light">{user.displayName}</h1>}
  </Navbar.Collapse>
 
  </Container>
</Navbar>
    );
};

export default Header;
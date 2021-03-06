import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: white;
    &:hover { color: #ddd; }
    font-size: 0.9em;
  }
  .navbar-brand {
    font-size: 1.4em;
    color: white;
    margin-left:0.3em;
    &:hover { color: #ddd; }
  }
`;
export const NavigationBar = () => (
         <Styles style={{ background: "#40454B", width:'100%' }}>
           <Navbar
             style={{ backgroundColor: "#40454B", width:'100%'  }}
             expand="lg"
           >
             <Navbar.Brand href="/">
               <span className="navbarBrand" >App</span>titude
             </Navbar.Brand>

             <Nav style={{ marginRight: "1.1em" }} className="ml-auto">
               <Nav.Item>
                 <Nav.Link href="http://www.acmvit.in" target="_blank">
                   About Us
                 </Nav.Link>
               </Nav.Item>
             </Nav>
           </Navbar>
         </Styles>
       );
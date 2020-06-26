import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: white;
    &:hover { color: #ddd; }
    font-size: 1.1em;
  }
  .navbar-brand {
    font-size: 1.4em;
    color: white;
    margin-left:1.2em;
    &:hover { color: #ddd; }
  }
`;
export const NavigationBar = () => (
         <Styles>
           <Navbar
             style={{ backgroundColor: "#40454B" }}
             expand="lg"
           >
             <Navbar.Brand href="/">
               <span style={{ color: "#7289D9" }}>App</span>titude
             </Navbar.Brand>

             <Nav style={{ marginRight: "2em" }} className="ml-auto">
               <Nav.Item>
                 <Nav.Link href="http://www.acmvit.in" target="_blank">
                   About Us
                 </Nav.Link>
               </Nav.Item>
             </Nav>
           </Navbar>
         </Styles>
       );
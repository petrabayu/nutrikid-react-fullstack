import "../../App.css";
import { useState } from 'react';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

function NavbarPage() {

  const [textColors, setTextColors] = useState(['', '', '']);

  const handleTextClick = (index) => {
    const updatedColors = textColors.map((color, i) => (i === index ? 'black' : ''));
    setTextColors(updatedColors);
  };
  
    return (
      <>
        <Navbar collapseOnSelect expand="lg" id="navbar">
          <Container>
         <Navbar.Brand
            onClick={() => handleTextClick(-1)}
            className='navbar-brand'><Link to="/"><img className="logo" src="/nutrikid-logo/nutrikid-with-text-landscape-blue-png.png" alt="logo" /></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto nav-item">
                <Nav.Link as={NavLink} to="program"
                onClick={() => handleTextClick(0)}
                style={{ color: textColors[0]}}
                id='nav-link'>Program</Nav.Link>
                <Nav.Link as={NavLink} to="konsultasi"
                onClick={() => handleTextClick(1)}
                style={{ color: textColors[1]}}
                id='nav-link'>Konsultasi</Nav.Link>
                <Nav.Link as={NavLink} to="artikel"
                onClick={() => handleTextClick(2)}
                style={{ color: textColors[2]}}
                id='nav-link'>Artikel</Nav.Link>
              </Nav>
              <Nav>
                <div id="container">
                  <div className="buttonbox">
                    <div className="login"><Link to="login">Login</Link></div>
                    <div className="signup"><Link to="signup">Sign Up</Link></div>
                  </div>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default NavbarPage;
  
import "../../App.css";
import { useState } from 'react';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarPage() {

  const [textColors, setTextColors] = useState(['', '', '']);

  const handleTextClick = (index) => {
    const updatedColors = textColors.map((color, i) => (i === index ? 'black' : ''));
    setTextColors(updatedColors);
  };
  
    return (
      <>
        <Navbar collapseOnSelect expand="lg" className='navbar navigation bar'>
          <Container>
            <Navbar.Brand 
            onClick={() => handleTextClick(-1)}
            href="#" className='navbar-brand'><img className="logo" src="/nutrikid-logo/nutrikid-with-text-landscape-blue-png.png" alt="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto nav-item"
              >
                <Nav.Link
                onClick={() => handleTextClick(0)}
                style={{ color: textColors[0]}}
                id='nav-link' href="#program">Program</Nav.Link>
                <Nav.Link
                onClick={() => handleTextClick(1)}
                style={{ color: textColors[1]}}
                id='nav-link' href="#konsultasi">Konsultasi</Nav.Link>
                <Nav.Link
                onClick={() => handleTextClick(2)}
                style={{ color: textColors[2]}}
                id='nav-link' href="#artikel">Artikel</Nav.Link>
              </Nav>
              <Nav>
                <div id="container">
                  <div className="buttonbox">
                    <div className="login"><a href="login.html">Login</a></div>
                    <div className="signup"><a href="signup.html">Sign Up</a></div>
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
  
import "../../App.css";
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import Cookies from "js-cookie";
import axios from "axios";
// import { jwtDecode } from "jwt-decode";


function NavbarPage() {
  const [textColors, setTextColors] = useState(["", "", ""]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstname, setFirstname] = useState("");

  const handleTextClick = (index) => {
    const updatedColors = textColors.map((color, i) =>
      i === index ? "black" : ""
    );
    setTextColors(updatedColors);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/users/");
        const userData = response.data;

        setIsLoggedIn(true);
        setFirstname(userData.data.firstname);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setIsLoggedIn(false);
      }
    };

    const token = Cookies.get("token");
    // const decoded = jwtDecode(token);
    // const userId = decoded.id;
    // const userId = "6566992b2ac19e4e05e6b723";
    // console.log(decoded.id);

    if (token) {
      fetchUserData();
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("userData");
    window.location.reload();
    setIsLoggedIn(false);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" id="navbar">
        <Container>
          <Navbar.Brand
            onClick={() => handleTextClick(-1)}
            href="/"
            className="navbar-brand"
          >
            <img
              className="logo"
              src="/nutrikid-logo/nutrikid-with-text-landscape-blue-png.png"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav-item">
              <Nav.Link
                onClick={() => handleTextClick(0)}
                style={{ color: textColors[0] }}
                id="nav-link"
                href="program"
              >
                Program
              </Nav.Link>
              <Nav.Link
                onClick={() => handleTextClick(1)}
                style={{ color: textColors[1] }}
                id="nav-link"
                href="konsultasi"
              >
                Konsultasi
              </Nav.Link>
              <Nav.Link
                onClick={() => handleTextClick(2)}
                style={{ color: textColors[2] }}
                id="nav-link"
                href="artikel"
              >
                Artikel
              </Nav.Link>
            </Nav>
            <Nav>
              <div id="container">
                <div className="buttonbox">
                  {isLoggedIn ? (
                    <>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          {/* {`Hi, ${firstname}`} */}
                          {"Welcome Parents"}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>User Settings</Dropdown.Item>
                          <Dropdown.Item onClick={handleLogout}>
                            Logout
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </>
                  ) : (
                    <>
                      <div className="login">
                        <a href="login">Login</a>
                      </div>
                      <div className="signup">
                        <a href="signup">Sign Up</a>
                      </div>
                    </>
                  )}
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

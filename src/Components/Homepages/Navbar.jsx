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
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("https://nutrikid-express-be-production.up.railway.app/api/users/");
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
            className="navbar-brand"
          ><Link to="/">
            <img
              className="logo"
              src="/nutrikid-logo/nutrikid-with-text-landscape-blue-png.png"
              alt="logo"
            />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav-item">
              <Nav.Link
                as={NavLink} to="program"
                onClick={() => handleTextClick(0)}
                style={{ color: textColors[0] }}
                id="nav-link"
              >
                Program
              </Nav.Link>
              <Nav.Link
                as={NavLink} to="konsultasi"
                onClick={() => handleTextClick(1)}
                style={{ color: textColors[1] }}
                id="nav-link"
              >
                Konsultasi
              </Nav.Link>
              <Nav.Link
              as={NavLink} to="artikel"
                onClick={() => handleTextClick(2)}
                style={{ color: textColors[2] }}
                id="nav-link"
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
                      <Link to="login">Login</Link>
                      </div>
                      <div className="signup">
                      <Link to="login">Sign Up</Link>
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

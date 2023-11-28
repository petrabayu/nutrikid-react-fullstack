import "../../App.css";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cookies from "js-cookie";

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
    // Cek apakah ada token dalam cookies
    const token = Cookies.get("token");

    if (token) {
      // Jika ada token, tampilkan tombol dengan nama pengguna
      setIsLoggedIn(true);
      // Ambil informasi pengguna jika diperlukan (misalnya, nama depan)
      const userFirstName = Cookies.get("firstname"); // Gantilah sesuai dengan informasi yang kamu simpan
      setFirstname(userFirstName);
    } else {
      // Jika tidak ada token, tampilkan tombol login dan sign up
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    // Hapus token dari cookies saat logout
    Cookies.remove("token");
    // Hapus data pengguna dari cookies
    Cookies.remove("userData");
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
                      <div className="username">{`Hi, ${firstname}`}</div>
                      <div className="logout" onClick={handleLogout}>
                        Logout
                      </div>
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

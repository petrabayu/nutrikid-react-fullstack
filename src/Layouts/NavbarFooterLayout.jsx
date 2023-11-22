import Navbar from "../Components/Homepages/Navbar"
import Footer from "../Components/Homepages/Footer"
import { Outlet } from "react-router-dom"

// eslint-disable-next-line react/prop-types
function NavbarFooter() {
    return (
      <>
      <Navbar />
      <Outlet />
      <Footer />
        
      </>
    );
  }
  
  export default NavbarFooter;
  
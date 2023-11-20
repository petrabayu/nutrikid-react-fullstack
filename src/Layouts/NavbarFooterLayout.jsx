import Navbar from "../Components/Homepages/Navbar"
import Footer from "../Components/Homepages/Footer"

function NavbarFooter({children}) {
    return (
      <>
      <Navbar />
      {children}
      <Footer />
        
      </>
    );
  }
  
  export default NavbarFooter;
  
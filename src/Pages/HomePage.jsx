import Banner from "../Components/Homepages/Banner";
import Program from "../Components/Homepages/Program";
import Artikel from "../Components/Homepages/Artikel";
import Testimoni from "../Components/Homepages/Testimoni";

import '../../public/css/homepage.css';


function HomePage() {
    return (
      <>
          <Banner />
          <Program />
          <Artikel />
          <Testimoni />
        
      </>
    );
  }
  
  export default HomePage;
  
import About from "../Components/Consultation/About";
import ConsultationCarousel from "../Components/Consultation/ConsultationCarousel";
import DoctorList from "../Components/Consultation/DoctorList";
import LoginOrRegisterMessage from "../Components/Consultation/LoginOrRegisterMessage.jsx";
import Cookies from "js-cookie";

function Consultation() {
  const token = Cookies.get("token");

  
  return (
    <>
      <div className="container-fluid ">
        <div className="row ">
          {token ? (
            <DoctorList />
          ) : (
            // onLogout={handleLogout}
            <LoginOrRegisterMessage />
          )}
          <div className="m-0 p-0 mb-4">
            <ConsultationCarousel />
            <About />
          </div>
        </div>
      </div>
    </>
  );
}

export default Consultation;

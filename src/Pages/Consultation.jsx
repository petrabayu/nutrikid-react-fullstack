import About from "../Components/Consultation/About";
import ConsultationCarousel from "../Components/Consultation/ConsultationCarousel";
import DoctorCard from "../Components/Consultation/DoctorCard";
import DoctorList from "../Components/Consultation/DoctorList";

function Consultation() {
  return (
    <>
      <div className="container-fluid ">
        <div className="row ">
            <DoctorList />
          
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

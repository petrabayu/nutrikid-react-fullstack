import About from "../Components/Consultation/About";
import ConsultationCarousel from "../Components/Consultation/ConsultationCarousel";
import DoctorCard from "../Components/Consultation/DoctorCard";

function Consultation() {
  return (
    <>
      <div className="container-fluid ">
        <div className="row ">
          <div className="row m-0 mb-4 justify-content-center overflow-auto vh-100">
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
          </div>
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

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import { FaCalendarDays } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";  
import { FaWifi } from "react-icons/fa6";
import Cookies from "js-cookie";
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { setLastVisitedPath } from "../../Routes/visitedPath";

import { fetchOtherProgramsById, fetchProgramDetailsById, rupiah } from '../../Services/programService';
import EventCarousel from '../../Components/Events/EventCarousel';
import ProgramFAQ from '../../Components/Programs/ProgramFAQ';
import { Link } from 'react-router-dom';
import EventModalPayment from '../../Components/Events/EventModalPayment';





function ProgramDetailPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [programDetails, setProgramDetails] = useState([]);
  const [otherPrograms, setOtherPrograms] = useState([]);
  const [module, setmodule] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const navigate = useNavigate()

  const { programId } = useParams();
  const token = Cookies.get("token");

  const handleModalShow = () => {
    setSelectedService("Program")
    token ? setShowModal(true) : setShowModalLogin(true);
  };
  const handleModalClose = () => setShowModal(false);
  const LoginhandleModalClose = () => setShowModalLogin(false);


  useEffect(() => {
    const fetchProgramDetails = async () => {
      try {
        const details = await fetchProgramDetailsById(programId);
        setProgramDetails(details);
        setSpeakers(details.user);
        setmodule(details.module)
      } catch (error) {
        console.error('Error fetching program details:', error);
      }
    };

    const fetchOtherPrograms = async () => {
      try {
        // Fetch other Program (you may need a dedicated service function)
        const otherProgramsData = await fetchOtherProgramsById(programId);
        setOtherPrograms(otherProgramsData);
      } catch (error) {
        console.error('Error fetching other events:', error);
      }
    };


    fetchOtherPrograms();
    fetchProgramDetails();
  }, [programId]);



  const handleProgramClick = (programId) => {
    // Navigate to the event detail page with the specified event ID
    navigate(`/program/${programId}`);
  };
  
  const handleRegisterClick = () => {
    // Navigate to the program page with the specified module ID
    navigate(`/program/${programDetails._id}/${module[0].id}`);
  };

  const handleRegisterProgram = () => {
    // Handle registration logic here
    // You can perform any registration-related actions and then close the modal
    // For now, let's just close the modal
    handleRegisterClick();
    handleModalClose();
  }

  const handleRedirectToLogin = () => {
    // Simpan path terakhir sebelum menuju halaman login
    setLastVisitedPath("/konsultasi");
  };

  return (
    <>
      <section className="d-flex align-items-center mt-5 mb-5 ms-5 me-5 justify-content-between program-detail-banner gap-5">
        <div className='w-75'>
          <h1>{programDetails.title}</h1>
          <p>{programDetails.description_1}</p>
          <h4 style={{color: programDetails.price === 0? "red" : ""}}>{rupiah(programDetails.price)}</h4>
          <button type="button" style={{backgroundColor:"#AB87FF"}} className="btn btn-primary" onClick={handleModalShow}>Daftar Program</button>
          {/* Registration Modal */}
          <Modal show={showModal} onHide={handleModalClose}>
          <EventModalPayment event={programDetails} selectedService={selectedService}/>
                </Modal>
                {/* Force Login Modal */}
          <Modal show={showModalLogin} onHide={LoginhandleModalClose}>
            <Modal.Header closeButton>
              <Modal.Title className='text-center'>Silakan login atau registrasi untuk mendaftar Program</Modal.Title>
            </Modal.Header>
            <div className="my-5 p-5">
              <div className="col-md-6 offset-md-3 text-center ">
                <div className="mt-3">
                  <Link
                    to="/login"
                    className="btn btn-primary mx-2 my-2"
                    onClick={handleRedirectToLogin}
                  >
                    Login
                  </Link>
                  <Link to="/signup" className="btn btn-success mx-2 my-2">
                    Registrasi
                  </Link>
                </div>
              </div>
            </div>
            <Modal.Footer>
             <Button variant="secondary" onClick={LoginhandleModalClose}>
               Close
              </Button>
             </Modal.Footer>
          </Modal>
        </div>
        <div>
        <img className="img-fluid" src={programDetails.image}/>
        </div>
        
      </section>

      <section className="d-flex align-items-center mt-5 mb-5 ms-5 me-5 gap-3 justify-content-between program-detail-desc">
        <div>
          <h3>Tentang Program</h3>
          <p>{programDetails.description_2}</p>
          <p>{programDetails.description_3}</p>
          <p>Metode Penilaian selama Program:</p>
          <ol>
            <li>Kuis dan tugas mingguan</li>
            <li>Berpartisipasi aktif dalam forum diskusi</li>
            <li>Proyek akhir: Membuat perencanaan perawatan sesuai dengan kebutuhan bayi Anda</li>
          </ol>
        </div>
        <div className='d-flex row w-100 text-center gap-5'>
          <h3>Detail Program</h3>
          <div>
            <h5>Durasi Program</h5>
            <FaCalendarDays /><span className='ms-2'>{programDetails.duration}</span>
          </div>
          <div>
            <h5>Jumlah Pendaftar</h5>
            <FaUsers /><span className='ms-2'>30 Orang</span>
          </div>
          <div>
            <h5>Metode Pembelajaran</h5>
            <FaWifi /><span className='ms-2'>Modul Online</span>
          </div>
        </div>
      </section>
      <section className="align-items-center mt-5 mb-5 ms-5 me-5">
        <div>
          <h3>Profil Konselor</h3>
        </div>
        <div className='d-flex align-items-center mt-5 mb-5 me-5 gap-3'>
        {speakers.map((speaker, index) => (
              <Card key={index} style={{ width: '18rem' }} className="text-center">
                <Card.Img variant="top" src={speaker.image} alt={`Speaker ${index + 1}`} />
                <Card.Body>
                  <Card.Title className="speaker-program-fullname">{speaker.fullname}</Card.Title>
                  <Card.Text className="speaker-program-firstname">{speaker.firstname}</Card.Text>
                  <Card.Text className="speaker-program-specialist">{speaker.specialist}</Card.Text>
                </Card.Body>
              </Card>
            ))}
        </div>
      </section>
      <section className="align-items-center mt-5 mb-5 ms-5 me-5">
        <div>
          <h3>Pertanyaan yang sering ditanyakan?</h3>
        </div>
        <div>
          <ProgramFAQ />
        </div>
      </section>
      <section style={{backgroundColor:"#B4E1FF"}} className="align-items-center pt-5 pb-5 px-5">
        <div className="text-center">
          <h1>Program Lainnya</h1>
        </div>
        <div className='w-100 h-100'>
        <EventCarousel events={otherPrograms} onEventClick={handleProgramClick} />
          </div>
      </section>
    </>
  );
}

export default ProgramDetailPage;

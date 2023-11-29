import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import { FaCalendarDays } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";  
import { FaWifi } from "react-icons/fa6";

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { fetchOtherProgramsById, fetchProgramDetailsById } from '../../Services/programService';
import EventCarousel from '../../Components/Events/EventCarousel';
import ProgramFAQ from '../../Components/Programs/ProgramFAQ';





function ProgramDetailPage() {
  const [programDetails, setProgramDetails] = useState([]);
  const [otherPrograms, setOtherPrograms] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate()

  const { programId } = useParams();

  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }


  useEffect(() => {
    const fetchProgramDetails = async () => {
      try {
        const details = await fetchProgramDetailsById(programId);
        setProgramDetails(details);
        setSpeakers(details.user);
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

  const handleRegisterProgram = () => {
    // Handle registration logic here
    // You can perform any registration-related actions and then close the modal
    // For now, let's just close the modal
    handleModalClose();
  }

  const handleProgramClick = (programId) => {
    // Navigate to the event detail page with the specified event ID
    navigate(`/program/${programId}`);
  };
  return (
    <>
      <section className="d-flex align-items-center mt-5 mb-5 ms-5 me-5 justify-content-between">
        <div>
          <h1>{programDetails.title}</h1>
          <p>{programDetails.description_1}</p>
          <p>{rupiah(programDetails.price)}</p>
          <button type="button" style={{backgroundColor:"#AB87FF"}} className="btn btn-primary" onClick={handleModalShow}>Daftar Program</button>
          {/* Registration Modal */}
          <Modal show={showModal} onHide={handleModalClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Registration for {programDetails.title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {/* Add any registration form or information here */}
                    <p>Registration form or details go here...</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleRegisterProgram}>
                      Register
                    </Button>
                  </Modal.Footer>
                </Modal>
        </div>
        <img src="/program/Fam.jpg"/>
      </section>

      <section className="d-flex align-items-center mt-5 mb-5 ms-5 me-5 justify-content-between">
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
                  <Card.Title>{speaker.fullname}</Card.Title>
                  <Card.Text>{speaker.firstname}</Card.Text>
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
      <section className="align-items-center mt-5 mb-5 ms-5 me-5">
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

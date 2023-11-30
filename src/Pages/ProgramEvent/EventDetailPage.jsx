import { FaCalendarDays } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import EventCarousel from "../../Components/Events/EventCarousel";
import { setLastVisitedPath } from "../../Routes/visitedPath";
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { fetchEventDetailsById, fetchOtherEventsById } from '../../Services/eventService';
import { useNavigate, useParams } from "react-router";
import { Modal } from 'react-bootstrap';

import { rupiah } from "../../Services/programService";
import Cookies from "js-cookie";
  
function EventDetailPage() {
  const [eventDetails, setEventDetails] = useState([]);
  const [otherEvents, setOtherEvents] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);

  const navigate = useNavigate()

  const { eventId } = useParams();
  const token = Cookies.get("token");

  const handleModalShow = () => {
    token ? setShowModal(true) : setShowModalLogin(true);
  };
  const handleModalClose = () => setShowModal(false);
  const LoginhandleModalClose = () => setShowModalLogin(false);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const details = await fetchEventDetailsById(eventId);
        setEventDetails(details);
        console.log(details.user.fullname)
        setSpeakers(details.user);
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    const fetchOtherEvents = async () => {
      try {
        // Fetch other events (you may need a dedicated service function)
        const otherEventsData = await fetchOtherEventsById(eventId);
        setOtherEvents(otherEventsData);
      } catch (error) {
        console.error('Error fetching other events:', error);
      }
    };


    fetchOtherEvents();
    fetchEventDetails();
  }, [eventId]);
  console.log(otherEvents)

  const handleRegisterEvent = () => {
    // Handle registration logic here
    // You can perform any registration-related actions and then close the modal
    // For now, let's just close the modal
    handleModalClose();
  }

  const handleEventClick = (eventId) => {
    // Navigate to the event detail page with the specified event ID
    navigate(`/events/${eventId}`);
  };

  const handleRedirectToLogin = () => {
    // Simpan path terakhir sebelum menuju halaman login
    setLastVisitedPath("/konsultasi");
  };

    return (
      <>
        <section className="d-flex eventbanner align-items-center mt-5 mb-5 ms-5 me-5 justify-content-between gap-5">
            <div className="w-75">
              <h1>{eventDetails.title}</h1>
              <p>{eventDetails.description_1}</p>
              <h4 style={{color: eventDetails.price === 0? "red" : ""}}>{rupiah(eventDetails.price)}</h4>
              <p>{/* Any other event details you want to display */}</p>
              <button type="button" className="btn btn-primary" onClick={handleModalShow}>
                Daftar Event
              </button>
               {/* Registration Modal */}
          <Modal show={showModal} onHide={handleModalClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Registration for {eventDetails.title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {/* Add any registration form or information here */}
                    <p>Registration form or details go here...</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                      Close
                    </Button>
                    <Button variant="primary" >
                      Register
                    </Button>
                  </Modal.Footer>
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
             <img className="img-fluid" src={eventDetails.image} alt="Event" />
            </div>

        </section>

        <section className="d-flex align-items-center gap-3 mt-5 mb-5 ms-5 me-5 justify-content-between event-detail-desc">
          <div className="w-75">
            <h3>Tentang Event</h3>
              <p>{eventDetails.description_2}</p>
              <p>{eventDetails.description_3}</p>
            <p>Proses cara mengikuti Webinar/Event:</p>
            <ol>
              <li>Daftar akun di website NutriKid</li>
              <li>Pilih Webinar/Event yang ingin diikuti</li>
              <li>Daftar melalui Page terkait Webinar/Event tersebut</li>
              <li>Setelah itu, tim NutriKid akan langsung mengirimkan detail akses webinar/event melalui email.</li>
            </ol>
          </div>
          <div className="d-flex row w-50 text-center gap-5">
            <h3>Detail Event</h3>
                <div>
                <h5>Tanggal</h5>
                <FaCalendarDays />
                <span className="ms-2">{eventDetails.date}</span>
              </div>
              <div>
                <h5>Waktu</h5>
                <FaRegClock />
                <span className="ms-2">{eventDetails.time}</span>
              </div>
              <div>
                <h5>Platform</h5>
                <FaLocationDot />
                <span className="ms-2">Zoom</span>
              </div>
          </div>
        </section>

        <section className="align-items-center mt-5 mb-5 ms-5 me-5">
          <div>
            <h3>Profil Pemateri</h3>
          </div>
          <div className="d-flex align-items-center mt-5 mb-5 me-5 gap-3">
            {speakers.map((speaker, index) => (
              <Card key={index} style={{ width: '18rem' }} className="text-center">
                <Card.Img variant="top" src={speaker.image} alt={`Speaker ${index + 1}`} />
                <Card.Body>
                  <Card.Title className="speaker-event-fullname">{speaker.fullname}</Card.Title>
                  <Card.Text className="speaker-event-firstname">{speaker.firstname}</Card.Text>
                  <Card.Text className="speaker-event-specialist">{speaker.specialist}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </section>
      <section className="align-items-center pt-5 pb-5 px-5">
        <div className="text-center">
          <h1>Event Lainnya</h1>
        </div>
        <div className='w-75 container-fluid'>
        <EventCarousel events={otherEvents} onEventClick={handleEventClick} />
          </div>
      </section>
      </>
    );
  }
  
  export default EventDetailPage;
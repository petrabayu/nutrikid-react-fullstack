// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchEvents } from '../../Services/eventService';
import { fetchPrograms } from '../../Services/programService';
import EventCarousel from '../../Components/Events/EventCarousel';
import ProgramCard from '../../Components/Programs/ProgramCard';
// import Program from '../../Components/Homepages/Program';

function ProgramDisplayPage() {

  const navigate = useNavigate()
  const dispatch = useDispatch();

 

  const events = useSelector((state) => state.events.events);
  const programs = useSelector((state) => state.programs.programs);

  useEffect(() => {
    dispatch(fetchEvents());
    dispatch(fetchPrograms());
  }, [dispatch]);

  const handleEventDetail = (eventId) => {
    // Navigate to the event detail page with the specified event ID
    navigate(`/events/${eventId}`);
  };

  const handleProgramDetail = (programId) => {
    // Navigate to the event detail page with the specified event ID
    navigate(`/program/${programId}`);
  };

  console.log(programs)

    return (
      <>
        <section className="d-flex align-items-center mt-5  mb-5 ms-5 me-5 gap-3">

          <div>
            <img style={{borderRadius: "160px"}} src="program/Fam.jpg"/>
          </div>
          <div className="text-center">
            <h2>Ayo bergabung ke dalam program-program nutrikid dalam meningkatkan wawasan serta skill untuk menjadi Keluarga yang Sehat</h2>
          </div>
        </section>


        <section className="d-flex align-items-center mt-5 mb-5 ms-5 me-5 gap-5">
          <div>
            <h5>Event Terbaru Kami</h5>
            <p>Bekerja sama dengan partner, kami menyelenggarakan beberapa Program
              untuk meningkatkan wawasan dan perhatian orang tua dalam mencegah 
              masalah-masalah kesehatan Anak.</p>
          </div>
          <div className="w-100">
          <EventCarousel events={events} onEventClick={handleEventDetail} />
        </div>
        </section>

        <section className='mt-5 mb-5 ms-5 me-5 d-flex row gap-5 text-center'> 
          <div>
            <h2>Program-Program penyuluhan dari NutriKid</h2>
          </div>
          <div>
            <ProgramCard programs={programs} onProgramClick={handleProgramDetail} />
          {/* <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col key={idx} onClick={handleProgramDetail}>
                <Card>
                  <Card.Img variant="top" src="/homepage/100days.png" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row> */}
          </div>
        </section>
      </>
    );
  }
  
  export default ProgramDisplayPage;
  
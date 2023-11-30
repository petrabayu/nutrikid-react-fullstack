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
        <section className="container-fluid" style={{backgroundColor:"#B4E1FF"}}>
        <div className="d-flex bannerprogram align-items-center pb-5 pt-5 px-5 gap-3" >
            <div>
              <img className='program-banner' style={{borderRadius: "40%"}} src="program/Fam.jpg"/>
            </div>
            <div className="text-center">
              <h2>Ayo bergabung ke dalam program-program nutrikid dalam meningkatkan wawasan serta skill untuk menjadi Keluarga yang Sehat</h2>
            </div>
        </div>
        
        </section>


        <section style={{backgroundColor:"#B4E1FF"}}>
          <div className="d-flex carouselprogram align-items-center pb-5 pt-5 px-5 gap-3">
            <div className='text-center'>
              <h5>Event Terbaru Kami</h5>
              <p>Bekerja sama dengan partner, kami menyelenggarakan beberapa Program
                untuk meningkatkan wawasan dan perhatian orang tua dalam mencegah 
                masalah-masalah kesehatan Anak.</p>
            </div>
            <div className='w-100'>
              <EventCarousel events={events} onEventClick={handleEventDetail} />
            </div>
          </div>
          
        </section>

        <section className='container-fluid d-flex row text-center justify-content-center mb-5 mt-5 gap-3'> 
          <div>
          <h2>Program-Program Belajar dari NutriKid</h2>
          </div>
          <div className="px-3">
            <ProgramCard programs={programs} onProgramClick={handleProgramDetail} />
            {/* <GroupExample /> */}

          </div>
        </section>
      </>
    );
  }
  
  export default ProgramDisplayPage;
  
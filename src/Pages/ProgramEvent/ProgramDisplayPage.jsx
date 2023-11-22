import Carousel from 'react-bootstrap/Carousel';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { NavLink } from 'react-router-dom';

function ProgramDisplayPage() {
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
          <div className='w-100'>
            <Carousel style={{backgroundColor: "red"}}>
              <Carousel.Item>
              <img src="program/Fam.jpg"/>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img src="program/Fam.jpg"/>
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img style={{borderRadius: "160px"}} src="program/Fam.jpg"/>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </section>

        <section className='mt-5 mb-5 ms-5 me-5 d-flex row gap-5 text-center'> 
          <div>
            <h2>Program-Program penyuluhan dari NutriKid</h2>
          </div>
          <div>
          <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
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
          </Row>
          </div>
        </section>
      </>
    );
  }
  
  export default ProgramDisplayPage;
  
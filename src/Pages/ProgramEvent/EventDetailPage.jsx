import { FaCalendarDays } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';


function EventDetailPage() {
    return (
      <>
        <section className="d-flex align-items-center mt-5 mb-5 ms-5 me-5">
          <div>
            <h1>Webinar KIA (Kesehatan Ibu dan Anak), KB, KRR</h1>
            <p>nutrikid dalam rangka kolaborasi bersama Puskesmas menghadirkan sesi webinar dengan tema “Upaya Kesehatan Masyarakat (UKM)” yang akan mengajak kamu mengeksplorasi aspek-aspek penting didalamnya bersama narasumber Bidan Nanda dan Dr. Alya</p>
            <p>GRATIS!</p>
            <button type="button" class="btn btn-primary">Daftar Event</button>
          </div>
          <img src="../../../public/program/Fam.jpg"/>
        </section>

        <section className="d-flex  align-items-center mt-5 mb-5 ms-5 me-5">
          <div>
            <h3>Tentang Event</h3>
            <p>Webinar informatif ini mengeksplorasi aspek-aspek penting kesehatan ibu dan anak (KIA), keluarga berencana (KB), dan kesehatan reproduksi remaja (KRR). Peserta akan mendapatkan wawasan mengenai topik-topik penting ini, memahami pentingnya hal tersebut dalam kesejahteraan keluarga, dan belajar tentang sumber daya yang tersedia untuk kehidupan keluarga yang sehat.</p>
            <p>Webinar ini bertujuan untuk memberikan para peserta informasi dan sumber daya berharga mengenai kesehatan ibu dan anak, keluarga berencana, dan kesehatan reproduksi remaja, yang semuanya merupakan komponen penting dalam membangun dan memelihara keluarga yang sehat.</p>
            <p>Proses cara mengikuti Webinar/Event:</p>
            <ol>
              <li>Daftar akun di website NutriKid</li>
              <li>Pilih Webinar/Event yang ingin diikuti</li>
              <li>Daftar melalui Page terkait Webinar/Event tersebut</li>
              <li>Setelah itu, tim NutriKid akan langsung mengirimkan detail akses webinar/event melalui email.</li>
            </ol>
          </div>
          <div className='d-flex row w-100 text-center gap-5'>
          <h3>Detail Event</h3>
          <div>
            <h5>Tanggal</h5>
            <FaCalendarDays /><span className='ms-2'>23 September 2023</span>
          </div>
          <div>
            <h5>Waktu</h5>
            <FaRegClock /><span className='ms-2'>9:30 - 11:00 WIB</span>
          </div>
          <div>
            <h5>Tempat/Platform</h5>
            <FaLocationDot /><span className='ms-2'>Zoom</span>
          </div>
        </div>
        </section>
        <section className="align-items-center mt-5 mb-5 ms-5 me-5">
        <div>
          <h3>Profil Pemateri</h3>
        </div>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </section>
      <section className="align-items-center mt-5 mb-5 ms-5 me-5">
        <div className="text-center">
          <h1>Event Lainnya</h1>
        </div>
        <div className='w-100 h-100'>
          <Carousel style={{backgroundColor: "red"}}>
            <Carousel.Item>
            <img src="/program/Fam.jpg"/>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src="/program/Fam.jpg"/>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img style={{borderRadius: "160px"}} src="/program/Fam.jpg"/>
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
      </>
    );
  }
  
  export default EventDetailPage;
  
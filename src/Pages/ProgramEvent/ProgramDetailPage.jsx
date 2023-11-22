import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import { FaCalendarDays } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa6";




function ProgramDetailPage() {
  return (
    <>
      <section className="d-flex align-items-center mt-5 mb-5 ms-5 me-5">
        <div>
          <h1>1000 Hari Pertama : Panduan mengasuh Anak</h1>
          <p>nutrikid dalam rangka kolaborasi bersama Puskesmas menghadirkan sesi webinar dengan tema “Upaya Kesehatan Masyarakat (UKM)” yang akan mengajak kamu mengeksplorasi aspek-aspek penting didalamnya bersama narasumber Bidan Nanda dan Dr. Alya</p>
          <p>Rp500.000</p>
          <button type="button" style={{backgroundColor:"#AB87FF"}} className="btn btn-primary">Daftar Program</button>
        </div>
        <img src="/program/Fam.jpg"/>
      </section>

      <section className="d-flex align-items-center mt-5 mb-5 ms-5 me-5">
        <div>
          <h3>Tentang Program</h3>
          <p>Program ini dirancang untuk memberdayakan orang tua baru dengan pengetahuan dan keterampilan yang diperlukan untuk memberikan perawatan terbaik bagi bayi mereka selama masa penting 1000 hari pertama kehidupan. Topik yang dibahas meliputi nutrisi bayi, menyusui, rutinitas tidur, tahap perkembangan, dan memelihara lingkungan yang aman dan penuh kasih sayang.</p>
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
            <FaCalendarDays /><span className='ms-2'>12 Minggu</span>
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
        <div>
          <h3>Pertanyaan yang sering ditanyakan?</h3>
        </div>
        <div>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
      <section className="align-items-center mt-5 mb-5 ms-5 me-5">
        <div className="text-center">
          <h1>Program Lainnya</h1>
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

export default ProgramDetailPage;

import Carousel from "react-bootstrap/Carousel";
import ImageOne from "./images/consult-2.png";
import ImageTwo from "./images/fast-2.png";
import ImageThree from "./images/many-doctor-2.png";

function ConsultationCarousel() {
  return (
    <>
      <h2
        className="text-center m-0"
        style={{ backgroundColor: "rgba(171,135,255,0.4)", padding: "2rem" }}
      >
        Penuhi Kebutuhan Gizi Anda di Nutrikid
      </h2>
      <Carousel
        data-bs-theme="dark"
        controls={false}
        indicators={false}
        interval={3000}
        touch={true}
        style={{
          backgroundColor: "rgba(171,135,255,0.4)",
          padding: "2rem",
          paddingTop: "0px",
        }}
      >
        <Carousel.Item>
          <img
            className="d-block img-fluid mx-auto nutrikid-responsive-img"
            src={ImageOne}
            alt="First slide"
            style={{ maxHeight: "40vh", width: "auto" }}
          />
          <div className="text-center">
            <h3 className="fw-bold">Sumber Yang Terpercaya</h3>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block img-fluid mx-auto nutrikid-responsive-img"
            src={ImageTwo}
            alt="First slide"
            style={{ maxHeight: "40vh", width: "auto" }}
          />
          <div className="text-center">
            <h3 className="fw-bold">Informasi Disampaikan Dengan Cepat</h3>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block img-fluid mx-auto nutrikid-responsive-img"
            src={ImageThree}
            alt="First slide"
            style={{ maxHeight: "40vh", width: "auto" }}
          />
          <div className="text-center">
            <h3 className="fw-bold">Konsultasi Dengan Para Ahli</h3>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default ConsultationCarousel;

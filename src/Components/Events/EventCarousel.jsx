/* eslint-disable react/prop-types */
// EventCarousel.jsx
import Carousel from "react-bootstrap/Carousel";

const EventCarousel = ({ events, onEventClick }) => {
  return (
    <Carousel
      className="container-fluid"
      style={{ backgroundColor: "#B4E1FF", cursor: "Pointer" }}
      controls={false}
    >
      {events.map((event) => (
        <Carousel.Item
          key={event._id}
          onClick={() => onEventClick(event._id)}
          className="px-5 pt-5 pb-5"
        >
          <div
            className="d-flex px-4 pt-4 pb-4 eventcarousel"
            style={{ backgroundColor: "#FFFFFF", borderRadius: "1.5rem" }}
          >
            <img
              className="img-carousel"
              src={event.image}
              alt={event.title}
              style={{ borderRadius: "1.5rem", objectFit: "cover" }}
            />
            <div className="text-center d-flex row">
              <h4 className="carousel-event-title fw-bold">{event.title}</h4>
              <p className="carousel-event-desc">{event.short_desc}</p>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default EventCarousel;

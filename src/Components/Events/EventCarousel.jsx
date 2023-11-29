/* eslint-disable react/prop-types */
// EventCarousel.jsx
import Carousel from 'react-bootstrap/Carousel';

const EventCarousel = ({ events, onEventClick }) => {
  return (
    <Carousel style={{ backgroundColor: 'red' }}>
      {events.map((event) => (
        <Carousel.Item key={event._id} onClick={() => onEventClick(event._id)}>
          <img src={event.image} alt={event.title} />
          <Carousel.Caption>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default EventCarousel;

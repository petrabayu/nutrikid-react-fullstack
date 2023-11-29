import { useState } from 'react';
import { Table, Modal, Button, Form } from 'react-bootstrap';

const EventTab = () => {
  const [showModal, setShowModal] = useState(false);
  const reader = new FileReader();
  const [imagePreview, setImagePreview] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: '',
    organizer: '',
    description: '',
    price: Number,
    location: '',
    startDate: '',
    endDate: '',
    image:"",
  });

  const [events, setEvents] = useState([
    // Initial events data
    {
      id: 1,
      title: 'Event 1',
      organizer: 'Organizer 1',
      description: 'Description for Event 1',
      price: 'Rp200.000',
      location: 'Event Location 1',
      startDate: '2023-01-01',
      endDate: '2023-01-03',
    },
    {
      id: 2,
      title: 'Event 2',
      organizer: 'Organizer 2',
      description: 'Description for Event 2',
      price: 'Rp500.000',
      location: 'Event Location 2',
      startDate: '2023-02-01',
      endDate: '2023-02-05',
    },
  ]);

  const handleClose = () => {
    setShowModal(false);
    setImagePreview(null);
  };

  const handleShow = () => setShowModal(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    reader.readAsDataURL(file)
    reader.onload = function () {
      setImagePreview(reader.result);
      setNewEvent((prevEvent) => ({ ...prevEvent, image: reader.result }));
    };
    
  };

  const handleAddEvent = async () => {
    // Validation or additional logic can be added here
  
    // Create a new event object with a unique ID
    const newEventObject = {
      id: events.length + 1, // You may want to use a more sophisticated ID generation method
      ...newEvent,
    };
  
    // Update the events state with the new event
    setEvents((prevEvents) => [...prevEvents, newEventObject]);
    console.log('New Event:', newEvent);
  
    // Close the modal
    handleClose();
  
    try {
      // Send the new event data to your local API
      const response = await fetch('http://localhost:5001/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEvent),
      });
  
      if (response.ok) {
        console.log('Event added successfully to the API.');
      } else {
        console.error('Failed to add event to the API.');
      }
    } catch (error) {
      console.error('Error when sending data to the API:', error);
    }
  };

  return (
    <div>
      <Button style={{backgroundColor: "#B4E1FF", color: "#000"}} onClick={handleShow} className="mb-3">
        Add Event
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Organizer</th>
            <th>Description</th>
            <th>Price</th>
            <th>Location</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{event.title}</td>
              <td>{event.organizer}</td>
              <td>{event.description}</td>
              <td>{event.price}</td>
              <td>{event.location}</td>
              <td>{event.startDate}</td>
              <td>{event.endDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter event title"
                name="title"
                value={newEvent.title}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formOrganizer">
              <Form.Label>Organizer</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter organizer"
                name="organizer"
                value={newEvent.organizer}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter event description"
                name="description"
                value={newEvent.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter event price"
                name="price"
                value={newEvent.price}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter event location"
                name="location"
                value={newEvent.location}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formStartDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Select start date"
                name="startDate"
                value={newEvent.startDate}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formEndDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Select end date"
                name="endDate"
                value={newEvent.endDate}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formImage">
              <Form.Label>Event Image</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={handleFileChange} />
              {imagePreview && <img src={imagePreview} alt="Image Preview" style={{ maxWidth: '100%' }} />}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddEvent}>
            Add Event
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EventTab;

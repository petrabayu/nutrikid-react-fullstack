import { useState } from 'react';
import { Table, Modal, Button, Form } from 'react-bootstrap';

const EventTab = () => {
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    organizer: '',
    description: '',
    price: '',
    location: '',
    startDate: '',
    endDate: '',
    image: null,
  });

  const events = [
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
  ];

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewEvent((prevEvent) => ({ ...prevEvent, image: file }));
  };

  const handleAddEvent = () => {
    //validation or additional logic
    console.log('New Event:', newEvent);
    handleClose();
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

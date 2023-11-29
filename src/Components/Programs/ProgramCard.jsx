/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ProgramCard = ({ programs, onProgramClick }) => {
  return (
    <Row xs={1} md={2} className="g-4">
      {programs.map((program) => (
        <Col key={program._id} onClick={() => onProgramClick(program._id)}>
          <Card>
            <Card.Img variant="top" src={program.image} />
            <Card.Body>
              <Card.Title>{program.title}</Card.Title>
              <Card.Text>{program.short_desc}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProgramCard;

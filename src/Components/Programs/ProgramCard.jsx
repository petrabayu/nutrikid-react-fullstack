/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { rupiah } from '../../Services/programService';
import { CardGroup } from 'react-bootstrap';
import { useState } from 'react';


const ProgramCard = ({ programs, onProgramClick }) => {

  return (
    <CardGroup>
      <Row xs={1} md={2} className="g-4">
     
        {programs.map((program) => (
          <Col key={program._id}>
            <Card className='programcard' style={{border: "2px solid #AB87FF",cursor:"pointer"}} onClick={() => onProgramClick(program._id)}>
              <Card.Img style={{height: "40vh", objectFit:"cover"}} src={program.image} />             
              <Card.Body>
                <Card.Title>{program.title}</Card.Title>
                <Card.Text>{program.short_desc}</Card.Text>
              </Card.Body>
              <Card.Footer className="fw-bold" style={{backgroundColor:"#B4E1FF", color: program.price === 0 ? "red" : "black"}} >{rupiah(program.price)}</Card.Footer>
            </Card>
          </Col>
        ))}
      
      </Row>
    </CardGroup>
  );
};

export default ProgramCard;

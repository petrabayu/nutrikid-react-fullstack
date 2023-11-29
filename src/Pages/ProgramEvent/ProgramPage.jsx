import { FaAngleLeft } from "react-icons/fa6";
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { useState, useEffect } from "react";

import { fetchLessonDetailsById } from '../../Services/lessonService';
import { useParams } from "react-router";

function ProgramPage() {
  const [selectedLesson, setSelectedLesson] = useState('Introduction');
  const [searchTerm, setSearchTerm] = useState('');
  const [LessonDetails, setLessonDetails] = useState([]);
  const { moduleId } = useParams();

  useEffect(() => {
    const fetchLessonDetails = async () => {
      try {
        const details = await fetchLessonDetailsById(moduleId);
        setLessonDetails(details);
        // Assuming details is an array of lessons with properties 'title' and 'content'
        setSelectedLesson(details[0]?.title); // Set default selectedLesson to the first lesson title
      } catch (error) {
        console.error('Error fetching program details:', error);
      }
    };

    fetchLessonDetails();
  }, [moduleId]);

  // Filtered lessons based on search term
  const filteredLessonTitles = LessonDetails.map((lesson) => lesson.title)
    .filter((title) => title.toLowerCase().includes(searchTerm.toLowerCase()));

  const selectedLessonContent = LessonDetails.find((lesson) => lesson.title === selectedLesson)?.content;

  return (
    <>
      <nav className="navbar bg-body-tertiary mt-4">
        <div className="container">
          <div>
            <FaAngleLeft /> 1000 Hari Pertama: Panduan Mengasuh Bayi Baru Lahir
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <Container className="mt-4">
        <Row>
          {/* Lesson Content (Center) */}
          <Col md={8}>
            <div style={{ maxHeight: '80vh', overflowY: 'scroll' }}>
              <h1>{selectedLesson}</h1>
              <p>{selectedLessonContent}</p>
            </div>
          </Col>
          {/* List of Lesson Titles (Right Side) */}
          <Col md={4}>
            <ListGroup>
              {filteredLessonTitles.map((title, index) => (
                <ListGroup.Item
                  key={index}
                  action
                  active={selectedLesson === title}
                  onClick={() => setSelectedLesson(title)}
                >
                  {title}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProgramPage;

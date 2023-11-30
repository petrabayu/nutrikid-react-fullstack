import React, { useState, useEffect } from "react";
import { Container, Card, Form, Col, Row, Button } from "react-bootstrap"; // Import Button
import axios from "axios"; // Import axios
import { Link, useParams } from "react-router-dom"; // Import Link, Route, and useParams

const truncate = (str, n) => {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
};

// The function to fetch the data from the API
const fetchData = async () => {
  try {
    // Use axios to make a GET request to the API
    const response = await axios.get("http://localhost:3001/api/posts"); // Replace with your API URL
    // Return the data as JSON
    return response.data;
  } catch (error) {
    // Handle the error
    console.error(error);
  }
};

// The component to display the full content of the article
const FullContent = (props) => {
  // Get the card id from the URL
  const { id } = useParams();

  // Find the card data that matches the id
  const card = props.cards.find((card) => card.id === id);

  // Return the JSX element for the full content
  return (
    <div className="container">
      <h1>{card.title}</h1>
      <img src={card.img} alt={card.title} />
      <p>{card.content}</p>
      <Link to="/">Go back</Link>
    </div>
  );
};

function SearchFilterCardList() {
  // The state variable for the card data
  const [cards, setCards] = useState([]);

  // The state variable for the search query
  const [query, setQuery] = useState("");

  // The state variable for the filtered data
  const [filteredCards, setFilteredCards] = useState([]);

  // The state variable for the search button click
  const [searchClicked, setSearchClicked] = useState(false);

  // Use the useEffect hook to fetch the data when the component mounts
  useEffect(() => {
    fetchData().then((data) => {
      // Set the card data to the state variable
      setCards(data);
      // Set the filtered data to the same as the card data initially
      setFilteredCards(data);
    });
  }, []); // Pass an empty dependency array to run only once

  // The function to handle the input change and update the query
  const handleInputChange = (e) => {
    const keyword = e.target.value;
    setQuery(keyword);
  };

  // The function to handle the button click and update the searchClicked
  const handleButtonClick = () => {
    setSearchClicked(true);
  };

  // The function to filter the data based on the query and the searchClicked
  const filterCards = () => {
    if (query !== "" && searchClicked) {
      // Filter the cards by title or content
      const results = cards.filter((card) => {
        return (
          card.title.toLowerCase().includes(query.toLowerCase()) ||
          card.content.toLowerCase().includes(query.toLowerCase()) ||
          card.category.toLowerCase().includes(query.toLowerCase())
        );
      });

      // Update the state variable with the filtered data
      setFilteredCards(results);
    } else {
      // If the query is empty or the searchClicked is false, show all cards
      setFilteredCards(cards);
    }
  };

  // Invoke the filter function whenever the query or the searchClicked changes
  useEffect(() => {
    filterCards();
  }, [query, searchClicked]); // Pass the query and the searchClicked as dependencies

  return (
    <div className="justify-content-center">
      <Container className="mt-5 d-flex justify-content-center">
        <Row>
          <Col>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Cari artikel"
                className="me-2"
                aria-label="Search"
                value={query}
                onChange={handleInputChange}
                style={{ width: "50vw" }}
              />
              <Button variant="primary" onClick={handleButtonClick}>
                Cari
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <div className="row justify-content-center p-4">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <Link
              key={card._id}
              className=""
              to={`/artikel/${card._id}`}
              style={{ width: "28rem" }}
            >
              <Card className="m-2 mb-4" key={card._id}>
                <Card.Img
                  className="img-fluid"
                  style={{ height: "15em", objectFit: "cover" }}
                  variant="top"
                  src={card.image}
                />
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">
                    {card.category}
                  </Card.Subtitle>
                  <Card.Title className="fw-bold">
                    {truncate(card.title.split(" ").slice(0, 15).join(" "), 60)}
                  </Card.Title>
                  <Card.Text>Ditulis oleh - {card.author.fullname}</Card.Text>
                  <Card.Text>
                    {truncate(
                      card.content
                        .replace(/<[^>]+>/g, "")
                        .split(" ")
                        .slice(0, 50)
                        .join(" "),
                      100
                    )}
                  </Card.Text>

                  {/* <Button variant="success" style={{ margin: "0.5rem" }}>
                    Read full article
                  </Button> */}
                </Card.Body>
              </Card>
            </Link>
          ))
        ) : (
          <p>No results found!</p>
        )}
      </div>
    </div>
  );
}

export default SearchFilterCardList;

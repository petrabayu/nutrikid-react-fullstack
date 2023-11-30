import React, { useState, useEffect } from "react";
import {
  Card,
  Form,
  Button,
  ListGroup,
  Placeholder,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap"; // Import Card, Form, Button, and ListGroup
import { Link, useParams } from "react-router-dom"; // Import Link and useParams
// import axios from "axios"; // Import axios
import { FaArrowLeft, FaPaperPlane } from "react-icons/fa6";
// import { htmlToText } from "html-to-text";
import DOMPurify from "dompurify";
import Cookies from "js-cookie";

// The component to display the full content of the article
const ArticleContent = () => {
  // Get the card id from the URL
  const { id } = useParams();

  // The state variable for the card data
  const [card, setCard] = useState({}); // Initialize with an empty object

  // The state variable for the comments
  const [comments, setComments] = useState([]); // Initialize with an empty array

  // The state variable for the user's input
  const [input, setInput] = useState(""); // Initialize with an empty string
  const token = Cookies.get("token");

  // The function to fetch the data from the API by id
  // const fetchData = async () => {
  //   try {
  //     // Use axios to make a GET request to the API with the id parameter
  //     const response = await axios.get(`http://localhost:3001/api/posts/${id}`); // Replace with your API URL
  //     // Set the card data to the state variable
  //     setCard(response.data);
  //   } catch (error) {
  //     // Handle the error
  //     console.error(error);
  //   }
  // };

  const fetchData = () => {
    // Use fetch to make a GET request to the API with the id parameter
    fetch(
      `https://nutrikid-express-be-production.up.railway.app/api/posts/${id}`
    ) // Replace with your API URL
      .then((response) => response.json()) // Convert the response to JSON format
      .then((data) => {
        // Set the card data to the state variable
        setCard(data);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  };

  // Use the useEffect hook to fetch the data when the component mounts, or when the id parameter changes
  useEffect(() => {
    fetchData();
  }, [id]); // Pass the id as a dependency

  // The function to handle the input change and update the input
  const handleInputChange = (e) => {
    const comment = e.target.value;
    setInput(comment);
  };

  // The function to handle the submit event and add the input to the comments
  const handleSubmit = (e) => {
    // Prevent the page from reloading
    e.preventDefault();
    // Add the input to the comments array
    setComments([...comments, input]);
    // Clear the input
    setInput("");
  };

  // const plainText = htmlToText.fromString(card.content);

  // Return the JSX element for the full content
  return (
    <>
      <div className="container">
        <Link className="my-2" to="/artikel">
          <FaArrowLeft className="m-4 mx-0" style={{ fontSize: "2.5rem" }} />
        </Link>
        <Card className="p-3" style={{ backgroundColor: "white" }}>
          <Card.Header style={{ backgroundColor: "white" }}>
            <Card.Subtitle className="mb-2 text-muted">
              {card.category}
            </Card.Subtitle>
            <Card.Title style={{ fontSize: "2em" }}>{card.title}</Card.Title>
            {/* <p>diupload pada {card.createdAt}</p> */}
            <Card.Subtitle className="mb-2 text-muted">
              {card.author?.fullname}
            </Card.Subtitle>
          </Card.Header>
          <Card.Img variant="top img-fluid" src={card.image} />
          <Card.Body>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(card.content),
              }}
            />
            {/* <Card.Text className="text-justify">{card.content}</Card.Text> */}
            {/* <Card.Text>{plainText}</Card.Text>
          <Card.Text className="text-justify">{card.content.replace(/<[^>]+>/g,'')}</Card.Text> */}
          </Card.Body>
        </Card>
        <Card className="p-3 my-4">
          <Form onSubmit={handleSubmit}>
            <Form.Label>Tinggalkan komentar anda</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your comment"
              value={input}
              onChange={handleInputChange}
              row="5"
            />
            {token ? (
              <Button
                className="mx-0 my-2"
                variant="primary"
                type="submit"
                style={{ margin: "0.5rem" }}
              >
                Kirim <FaPaperPlane />
              </Button>
            ) : (
              <OverlayTrigger
                overlay={
                  <Tooltip id="tooltip-disabled">
                    Login untuk berkomentar{" "}
                  </Tooltip>
                }
                placement="right"
              >
                <span className="d-inline-block">
                  <Button
                    className="mx-0 my-2"
                    variant="primary"
                    type="submit"
                    style={{ margin: "0.5rem" }}
                    disabled
                  >
                    Kirim <FaPaperPlane />
                  </Button>
                </span>
              </OverlayTrigger>
            )}
          </Form>
        </Card>
        <ListGroup className="my-4">
          <h5 className="mx-0 my-2">Komentar</h5>
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <ListGroup.Item key={index}>
                Anonymus said : "{comment}"
              </ListGroup.Item>
            ))
          ) : (
            <p>No comments yet!</p>
          )}
        </ListGroup>
      </div>
    </>
  );
};

export default ArticleContent;

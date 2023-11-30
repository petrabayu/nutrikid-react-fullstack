import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap"; // Import Card and Button
import { Link } from "react-router-dom"; // Import Link

// The component to display the list of articles as cards
const ArticleList = () => {
  // The state variable for the list of articles
  const [articles, setArticles] = useState([]); // Initialize with an empty array

  // The function to fetch the data from the API
  const fetchData = async () => {
    try {
      // Use fetch to make a GET request to the API
      const response = await fetch("http://localhost:3001/api/posts"); // Replace with your API URL
      // Convert the response to JSON format
      const data = await response.json();
      // Update the state variable with the JSON data
      setArticles(data);
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };

  // Use the useEffect hook to fetch the data when the component mounts
  useEffect(() => {
    fetchData();
  }, []); // Pass an empty dependency array

  // Create a new array with the elements that have an index less than five from the articles array
  const oneArticles = articles.filter((article, index) => index < 1); // Use filter
  const fiveArticles = articles.filter((article, index) => index >1 && index < 5); // Use filter

  // Return the JSX element for the list of articles
  return (
    <div className="container justify-content-center">
      <div className="row justify-content-center">
      <div className="row">
        {oneArticles.map((article) => ( // Use fiveArticles instead of articles
            <div className="col" key={article._id}>
              <Link to={`/artikel/${article._id}`}>
                <Card>
                  <Card.Img variant="top" src={article.image} />
                  <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>{article.category}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
      </div>
      <div className="row justify-content-center">
        {fiveArticles.map((article) => ( // Use fiveArticles instead of articles
          <div className="col" key={article._id}>
            <Link to={`/artikel/${article._id}`}>
            <Card>
              <Card.Img variant="top" src={article.image} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.category}</Card.Text>
              </Card.Body>
            </Card>
            </Link>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ArticleList;

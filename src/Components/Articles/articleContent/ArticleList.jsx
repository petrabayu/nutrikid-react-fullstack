import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap"; // Import Card and Button
import { Link } from "react-router-dom"; // Import Link

const truncate = (str, n) => {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
};

// The component to display the list of articles as cards
const ArticleList = () => {
  // The state variable for the list of articles
  const [articles, setArticles] = useState([]); // Initialize with an empty array

  // The function to fetch the data from the API
  const fetchData = async () => {
    try {
      // Use fetch to make a GET request to the API
      const response = await fetch("https://nutrikid-express-be-production.up.railway.app/api/posts"); // Replace with your API URL
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
  const fiveArticles = articles.filter(
    (article, index) => index > 1 && index < 6
  ); // Use filter

  // Return the JSX element for the list of articles
  return (
    <div className="container justify-content-center">
      <div className="row">
        <div className="col">
          {oneArticles.map(
            (
              article // Use fiveArticles instead of articles
            ) => (
              <div className="col" key={article._id}>
                <Link to={`/artikel/${article._id}`}>
                  <Card style={{ height: "45rem" }}>
                    <Card.Img variant="top" src={article.image} />
                    <Card.Body>
                      <Card.Text>{article.category}</Card.Text>
                      <Card.Title
                        className="fw-bold"
                        style={{ fontSize: "2rem" }}
                      >
                        {truncate(
                          article.title.split(" ").slice(0, 15).join(" "),
                          60
                        )}
                      </Card.Title>
                      <Card.Text className="text-justify">
                        {truncate(
                          article.content
                            .replace(/<[^>]+>/g, "")
                            .split(" ")
                            .slice(0, 50)
                            .join(" "),
                          500
                        )}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            )
          )}
        </div>
        <div className="col">
          <div className="row row-cols-2">
            {fiveArticles.map(
              (
                article // Use fiveArticles instead of articles
              ) => (
                <div className="col" key={article._id}>
                  <Link to={`/artikel/${article._id}`}>
                    <Card className="mb-3" style={{ height: "22rem" }}>
                      <Card.Img
                        className="img-fluid"
                        variant="top"
                        style={{ height: "15em", objectFit: "cover" }}
                        src={article.image}
                      />
                      <Card.Body className="py-2">
                        <Card.Text className="m-0">
                          {article.category}
                        </Card.Text>
                        <Card.Title className="fw-bold">
                          {truncate(
                            article.title.split(" ").slice(0, 15).join(" "),
                            50
                          )}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleList;

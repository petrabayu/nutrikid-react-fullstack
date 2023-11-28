import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// A function to truncate a string to a certain length and add "..." at the end
const truncate = (str, n) => {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
};

const ArticleCard = ({ article }) => {
  const [data, setData] = useState({
    title: "",
    userId: "",
    content: "",
    image: " ",
  });

  return (
    <div className="article-card">
      <div className="container mt-2 mb-2">
          <div className="card">
            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src={data.image} className="img-fluid" />
              <a href="#!">
                <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title font-weight-bold">{data.title}</h5>
              <p className="card-subtitle">{data.author}</p>
              <p className="col-2 text-truncate">
                {truncate(data.content.split(" ").slice(0, 20).join(" "), 100)}
              </p>
              <Link
                className="read-more-button"
                to={"/article/" + data.id}
              >
                Read More
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
};


export default ArticleCard;

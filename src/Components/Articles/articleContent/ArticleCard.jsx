// This is the articlecard.jsx component that shows the article card with title, author, and short content
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // import the prop-types library

const ArticleCard = ({ article }) => {
  return (
    <div className="container">
      <section className="mx-auto my-5" style="max-width: 23rem;">
          
        <div className="card">
          <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img src={article.image} className="img-fluid" />
            <a href="#!">
              <div className="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
            </a>
          </div>
          <div className="card-body">
            <h5 className="card-title font-weight-bold"><a>{article.title}</a></h5>
            <p className="mb-2">{article.author}</p>
            <p className="col-2 text-truncate">
              {article.content.substring(0, 100)}
            </p>
            <button> <Link to={`/article/${article.id}`}>Read more</Link></button>
          </div>
        </div>
        
      </section>
    </div>
  );
};

// This is the prop-types validation for the ArticleCard component
ArticleCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArticleCard;

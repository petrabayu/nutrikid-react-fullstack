import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const CardArticle = ({article}) => {

   // Destructure the article object
   const { id, image, author, title, content } = article;

   // Define a function to truncate the content to a short text
   const truncate = (text, limit) => {
     // If the text is longer than the limit, return the substring with an ellipsis
     if (text.length > limit) {
       return text.substring(0, limit) + '...';
     }
     // Otherwise, return the text as it is
     return text;
   };
 
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 mb-4">
          <div className="card">
              <img src={image} alt="cardimage" className="card-img-top"/>
                <div className='card-body'>
                <h5 className="card-title">{title}</h5>
                <h6>Author<span>{author}</span></h6>
                <p className="card-text">{truncate(content, 50)}</p>
                <Link to={`/articles/${id}`} className="btn btn-outline-success btn-sm">Read More</Link>
              </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

CardArticle.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardArticle;
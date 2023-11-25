// This is the articlecontent.jsx component that shows the article by id
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { postComment } from "../redux/reducer/articleslicer";
import PropTypes from "prop-types"; // import the prop-types library
import axios from "axios"; // import the axios library

const ArticleContent = () => {
  const [username, setUsername] = useState(""); // the local state for the username input
  const [comment, setComment] = useState(""); // the local state for the comment input
  const [user, setUser] = useState(null); // the local state for the user object
  const { id } = useParams(); // the id parameter from the URL
  const article = useSelector((state) =>
    state.article.articles.find((article) => article.id === id)
  ); // the article object from the redux store
  const dispatch = useDispatch(); // the redux dispatch function

  // This function handles the change of the comment input
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  // This function handles the submission of the comment form
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    dispatch(postComment({ articleId: id, username, comment })); // dispatch the postComment action with the article id, username, and comment
    setComment(""); // reset the comment input
  };

  // This effect runs once when the component mounts and fetches the user data from the API login
  useEffect(() => {
    // define an async function to fetch the user data
    const fetchUser = async () => {
      try {
        // make a GET request to the API login with the user id
        const response = await axios.get(`/api/login/${id}`);
        // set the user state with the response data
        setUser(response.data);
        // set the username state with the response data username
        setUsername(response.data.username);
      } catch (error) {
        // handle the error
        console.error(error);
      }
    };
    // invoke the fetchUser function
    fetchUser();
  }, [id]);

  return (
    <div className="article-content">
      {article ? (
        <>
          <section id="article-content">
            <h1 className="fw-bold">{article.title}</h1>
            <p>By {article.author}</p>
            <h6 className="time-desctiption">Created on {article.date}</h6>
            <div class="container p-0 my-3 d-flex justify-content-end">
              <a href=""
                ><i class="bi bi-whatsapp mx-2 nutrikid-icon-size"></i
              ></a>
              <a href=""
                ><i class="bi bi-instagram mx-2 nutrikid-icon-size"></i
              ></a>
              <a href=""
                ><i class="bi bi-twitter-x mx-2 nutrikid-icon-size"></i
              ></a>
              <a href=""
                ><i class="bi bi-facebook mx-2 nutrikid-icon-size"></i
              ></a>
            </div>
            <figure class="text-center">
              <img src={article.image} alt="Article image" />
              <figcaption class="text-center fw-semibold nutrikid-caption">
                  {article.title}(Illustrasi oleh: Unsplash)
              </figcaption>
            </figure>
            <p>{article.content}</p>
          </section>

          
          <div className="comment-box">
            <h2>Comments</h2>
            {article.comments.map((comment) => (
              <div key={comment.id} className="comment card text-bg-light mb-3">
                <div className="card-header"><p>{comment.username}</p></div>
                <div className="card-body">
                  <p className="card-text">{comment.comment}</p>
                </div>
              </div>
            ))}
            {user ? (
              <section id="article-comment" class="container nutrikid-container mt-5">
                <form onSubmit={handleCommentSubmit}>
                  <div class="form-floating">
                    <p>Welcome, {username}</p>
                    <textarea
                      class="form-control"
                      type="text"
                      value={comment}
                      onChange={handleCommentChange}
                      placeholder="Enter your comment"
                      id="floatingTextarea"
                    />
                    <div class="d-flex flex-row-reverse">
                      <button type="submit" class="btn btn-primary my-3">Submit</button>
                    </div>
                  </div>
                </form>
              </section>
              
            ) : (
              <p>Please log in to comment</p>
            )}
          </div>
        </>
      ) : (
        <h4 className="m-5 d-flex justify-content-center">Article not found</h4>
      )}
    </div>
  );
};

// This is the prop-types validation for the ArticleContent component
ArticleContent.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired, // add this line to validate the image prop
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }),
};

export default ArticleContent;

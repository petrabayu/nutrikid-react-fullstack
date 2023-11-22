import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchComments, likeComment } from '../../../redux/reducer/commentslicer';

const CommentsContent = () => {
  // Use useDispatch hook to dispatch actions
  const dispatch = useDispatch();

  // Use useSelector hook to select the comments, status, and error from the state
  const {comments} = useSelector((state) => state.comments.comments);
  const status = useSelector((state) => state.article.comments.status);
  const error = useSelector((state) => state.article.comments.error);

  // Use useEffect hook to dispatch the fetchComments thunk when the component mounts
  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  // Define a function to handle the liking of a comment
  const handleLike = (id) => {
    // Dispatch the likeComment thunk with the comment id
    dispatch(likeComment(id));
  };

  return (
    <div className="px-3"> 
      <h6>Comments:</h6>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>{error}</p>}
      {status === 'succeeded' && (
    <ul>
    {{article,comments}.map((comment) => (
      <li key={comment.id}>
        <div className="card-body">
          <div className="d-flex flex-start align-items-center">
            <img className="rounded-circle shadow-1-strong me-3"
              src={comment.profilePicture} alt="avatar" width={60}
              height={60} />
            <div>
              <h6 className="fw-bold text-primary mb-1">{comment.username}</h6>
              <p className="text-muted small mb-0">
                Shared publicly - {comment.dateTime}
              </p>
            </div>
          </div>

          <p className="mt-3 mb-4 pb-2">
          {comment.comment}
          </p>

          <div className="small d-flex justify-content-start">
            <a href="#!" className="d-flex align-items-center me-3">
              <i className="far fa-thumbs-up me-2"></i>
              <p className="mb-0">{comment.likes}</p>
              <button onClick={() => handleLike(comment.id)}>Like</button>
            </a>
          </div>
        </div>
      </li>
    ))}
    </ul>
  )}
  </div>
  );
};

CommentsContent.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      profilePicture: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      dateTime: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired
    })
  ).isRequired,
  status: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default CommentsContent;
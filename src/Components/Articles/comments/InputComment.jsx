import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { postComment } from '../../../redux/reducer/commentslicer';

function InputComment() {
  // Use useState hook to manage the comment text
  const [comment, setComment] = useState('');

  // Use useDispatch hook to dispatch actions
  const dispatch = useDispatch();

  // Use useSelector hook to select the profile picture and the username from the login data
  const username = useSelector((state) => state.username);
  const profilePicture = useSelector((state) => state.profilePicture);


  // Define a function to handle the change of the comment input
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  // Define a function to handle the submission of the form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the comment is not empty
    if (comment.trim()) {
      // Generate a unique id for the comment
      const id = Math.random().toString(36).substr(2, 9);
      // Generate the current date and time for the comment
      const dateTime = new Date().toLocaleString();
      // Create a comment object with the id, profile picture, username, date time, comment text, and likes
      const commentData = { id, profilePicture, username, dateTime, comment, likes: 0 };
      // Dispatch the postComment thunk with the comment data
      dispatch(postComment(commentData));
      // Reset the comment text
      setComment('');
    }
  };

  // Define a function to handle the cancellation of the form
  const handleCancel = (e) => {
    e.preventDefault();
    // Reset the comment text
    setComment('');
  };

  return (
  <form onSubmit={handleSubmit}> 
    <div className="card-header py-3 border-0">
        <div className="d-flex flex-start w-100">
            <img className="rounded-circle shadow-1-strong me-3"
            src={profilePicture} alt="avatar" width={40}
            height={40} />
            <span>{username}</span>
            <div className="form-outline w-100">
            <label htmlFor="comment">Enter your comment:</label>
                <textarea
                  className="form-control"
                  type="text"
                  id="comment"
                  name="comment"
                  value={comment}
                  onChange={handleCommentChange}
                  placeholder='Comment Here..'
                />
          </div>
        </div>
        <div className="d-flex floet-end w-100 mt-2 pt-1">
            <button type="submit" className="btn btn-primary btn-sm mx-2">Post</button>
            <button type="button" className="btn btn-outline-primary btn-sm" onClick={handleCancel}>Cancel</button>
        </div>
    </div>   
    </form> 
  );
};

InputComment.propTypes = {
  profilePicture: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};


export default InputComment;
// commentslicer.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define a thunk to fetch the comments from the API
export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async () => {
    // Make a GET request to the API endpoint
    const response = await axios.get('https://api.comments.com/comments');
    // Return the data from the response
    return response.data;
  }
);

// Define a thunk to post a comment to the API
export const postComment = createAsyncThunk(
  'comments/postComment',
  async (comment) => {
    // Make a POST request to the API endpoint with the comment data
    const response = await axios.post('https://api.comments.com/comments', comment);
    // Return the data from the response
    return response.data;
  }
);

// Define a thunk to like a comment on the API
export const likeComment = createAsyncThunk(
  'comments/likeComment',
  async (id) => {
    // Make a PATCH request to the API endpoint with the comment id
    const response = await axios.patch(`https://api.comments.com/comments/${id}/like`);
    // Return the data from the response
    return response.data;
  }
);

// Define the initial state of the comments slice
const initialState = {
  comments: [],
  status: 'idle',
  error: null
};

// Create a slice for comments with extra reducers
const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  extraReducers: {
    // Handle the pending state of the fetchComments thunk
    [fetchComments.pending]: (state, action) => {
      state.status = 'loading';
    },
    // Handle the fulfilled state of the fetchComments thunk
    [fetchComments.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      // Add the comments from the payload to the state
      state.comments = state.comments.concat(action.payload);
    },
    // Handle the rejected state of the fetchComments thunk
    [fetchComments.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    // Handle the pending state of the postComment thunk
    [postComment.pending]: (state, action) => {
      state.status = 'loading';
    },
    // Handle the fulfilled state of the postComment thunk
    [postComment.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      // Add the comment from the payload to the state
      state.comments.push(action.payload);
    },
    // Handle the rejected state of the postComment thunk
    [postComment.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    // Handle the pending state of the likeComment thunk
    [likeComment.pending]: (state, action) => {
      state.status = 'loading';
    },
    // Handle the fulfilled state of the likeComment thunk
    [likeComment.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      // Find the comment with the same id as the payload and update its likes
      const comment = state.comments.find((comment) => comment.id === action.payload.id);
      if (comment) {
        comment.likes = action.payload.likes;
      }
    },
    // Handle the rejected state of the likeComment thunk
    [likeComment.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
});

// Export the reducer
export default commentsSlice.reducer;

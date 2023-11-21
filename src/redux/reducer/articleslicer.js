import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define a thunk action to post an article to the API
export const postArticle = createAsyncThunk(
    'article/postArticle',
    async (article) => {
      const response = await axios.post('https://api.article.com/articles', article);
      return response.data;
    }
  );

// Define a thunk action to fetch articles from the API
export const fetchArticles = createAsyncThunk(
    'article/fetchArticles',
    async () => {
      const response = await axios.get('https://api.article.com/articles');
      return response.data;
    }
  );

// Define the initial state of the article slice
const initialState = {
    articles: [], // An array of articles
    status: 'idle', // The status of the async actions
    error: null, // The error message if any
  };

// Define the article slice using createSlice
const articleSlicer = createSlice({
    name: 'article',
    initialState,
    reducers: {
      // You can define some synchronous reducers here if needed
    },
    extraReducers: {
      // Handle the pending state of the async actions
      [postArticle.pending]: (state, action) => {
        state.status = 'loading';
      },
      [fetchArticles.pending]: (state, action) => {
        state.status = 'loading';
      },
      // Handle the fulfilled state of the async actions
      [postArticle.fulfilled]: (state, action) => {
        state.status = 'succeeded';
        // Add the new article to the articles array
        state.articles.push(action.payload);
      },
      [fetchArticles.fulfilled]: (state, action) => {
        state.status = 'succeeded';
        // Replace the articles array with the fetched data
        state.articles = action.payload;
      },
      // Handle the rejected state of the async actions
      [postArticle.rejected]: (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      },
      [fetchArticles.rejected]: (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      },
    },
  });

// Export the article slice reducer
export default articleSlicer.reducer;

// Export the article slice actions
// const { postArticle, fetchArticles } = articleSlicer.actions;

// Export the article slice selectors
export const selectAllArticles = (state) => state.article.articles;
export const selectArticleById = (state, articleId) =>
  state.article.articles.find((article) => article.id === articleId);

// This is the articleSlice.js file that defines the initial state, reducers, and actions for the article feature
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// This is the initial state of the article feature
const initialState = {
  articles: [], // an array of article objects
  status: "idle", // the status of the fetchArticles async action
  error: null, // the error message if any
  search: "", // the search query entered by the user
};

// This is the async action that fetches the articles from the API
export const fetchArticles = createAsyncThunk(
  "article/fetchArticles",
  async () => {
    const response = await axios.get("/api/article");
    return response.data;
  }
);

// This is the async action that posts a comment to the API and updates the article
export const postComment = createAsyncThunk(
  "article/postComment",
  async ({ articleId, username, comment }) => {
    const response = await axios.post(`/api/article/${articleId}/comment`, {
      username,
      comment,
    });
    return response.data;
  }
);

// This is the async action that adds an article to the API and updates the articles
export const addArticle = createAsyncThunk(
  "article/addArticle",
  async ({ title, author, theme, content }) => {
    const response = await axios.post("/api/article", {
      title,
      author,
      theme,
      content,
    });
    return response.data;
  }
);

// This is the slice that contains the reducers and actions for the article feature
const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    // This is the reducer that handles the searchArticles action
    searchArticles(state, action) {
      state.search = action.payload; // update the search state with the action payload
    },
  },
  extraReducers: {
    // This is the reducer that handles the pending state of the fetchArticles async action
    [fetchArticles.pending]: (state, action) => {
      state.status = "loading"; // update the status state to loading
    },
    // This is the reducer that handles the fulfilled state of the fetchArticles async action
    [fetchArticles.fulfilled]: (state, action) => {
      state.status = "succeeded"; // update the status state to succeeded
      state.articles = action.payload; // update the articles state with the action payload
    },
    // This is the reducer that handles the rejected state of the fetchArticles async action
    [fetchArticles.rejected]: (state, action) => {
      state.status = "failed"; // update the status state to failed
      state.error = action.error.message; // update the error state with the action error message
    },
    // This is the reducer that handles the pending state of the postComment async action
    [postComment.pending]: (state, action) => {
      // do nothing
    },
    // This is the reducer that handles the fulfilled state of the postComment async action
    [postComment.fulfilled]: (state, action) => {
      // find the index of the article that matches the action payload id
      const index = state.articles.findIndex(
        (article) => article.id === action.payload.id
      );
      // update the article at that index with the action payload
      state.articles[index] = action.payload;
    },
    // This is the reducer that handles the rejected state of the postComment async action
    [postComment.rejected]: (state, action) => {
      // do nothing
    },
    // This is the reducer that handles the pending state of the addArticle async action
    [addArticle.pending]: (state, action) => {
      // do nothing
    },
    // This is the reducer that handles the fulfilled state of the addArticle async action
    [addArticle.fulfilled]: (state, action) => {
      // append the action payload to the articles state
      state.articles.push(action.payload);
    },
    // This is the reducer that handles the rejected state of the addArticle async action
    [addArticle.rejected]: (state, action) => {
      // do nothing
    },
  },
});

// export the reducer and the actions from the slice
export const { searchArticles } = articleSlice.actions;
export default articleSlice.reducer;

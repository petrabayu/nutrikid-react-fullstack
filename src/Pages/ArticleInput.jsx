// This is the articleinput.jsx component that shows the article input fields
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addArticle } from "../redux/reducer/articleslicer";
import PropTypes from "prop-types"; // import the prop-types library

const ArticleInput = () => {
  const [title, setTitle] = useState(""); // the local state for the title input
  const [author, setAuthor] = useState(""); // the local state for the author input
  const [theme, setTheme] = useState(""); // the local state for the theme input
  const [content, setContent] = useState(""); // the local state for the content input
  const [image, setImage] = useState(""); // the local state for the image input
  const dispatch = useDispatch(); // the redux dispatch function

  // This function handles the change of the title input
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // This function handles the change of the author input
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  // This function handles the change of the theme input
  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  // This function handles the change of the content input
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  // This function handles the change of the image input
  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  // This function handles the submission of the article input form
  const handleArticleSubmit = (e) => {
    e.preventDefault();
    dispatch(addArticle({ title, author, theme, content, image })); // dispatch the addArticle action with the title, author, theme, content, and image
    setTitle(""); // reset the title input
    setAuthor(""); // reset the author input
    setTheme(""); // reset the theme input
    setContent(""); // reset the content input
    setImage(""); // reset the image input
  };

  return (
    <div className="article-input d-flex justify-content-center">
     <div className="row p-5">
      <h4>Create Article</h4>
        <form className="form-article row" onSubmit={handleArticleSubmit}>
          <div className="mb-3">
            <label for="title" className="form-label">Title</label>
            <input
              className="form-control"
              type="text"
              value={title}
              onChange={handleTitleChange}
              id="title"
              placeholder="Enter the title"
            />
          </div>
          <div className="mb-3">
            <label for="author" className="form-label">Author</label>
            <input
              class="form-control"
              type="text"
              value={author}
              onChange={handleAuthorChange}
              id="author"
              placeholder="Enter the author"
            />
          </div>
          <div className="mb-3">
            <label for="category" className="form-label">Category</label>
            <select className="form-select" id="category" value={theme} onChange={handleThemeChange}>
              <option value="">Choose a category</option>
              <option value="Nutrition">Nutrition</option>
              <option value="Parenting & Nursery">Parenting & Nursery</option>
              <option value="Family Health">Family Health</option>
              <option value="Lifestyle">Lifestyle</option>
            </select>
          </div>
          <div className="mb-3">
            <label for="image" className="form-label">Image</label>
            <input
              id="image"
              className="form-control"
              type="text"
              value={image}
              onChange={handleImageChange}
              placeholder="Enter the image URL"
            />
          </div>
          <div className="mb-3">
            <label for="content" className="form-label">Content</label>
            <textarea
              id="content"
              className="form-control"
              value={content}
              onChange={handleContentChange}
              placeholder="Write your content here"
              rows={3}
            />
          </div>
          <div className="mb-3">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Submit your article?</label>
          </div>
          <button className="btn btn-primary" type="submit">Add</button>
        </form>
     </div>
    </div>
  );
};

// This is the prop-types validation for the ArticleInput component
ArticleInput.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  theme: PropTypes.oneOf([
    "Nutrition",
    "Parenting & Nursery",
    "Family Health",
    "Lifestyle",
  ]).isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ArticleInput;

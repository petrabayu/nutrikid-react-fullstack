// This is the searcharticle.jsx component that shows the search bar and article cards
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles, searchArticles } from "../redux/reducer/articleslicer";
import ArticleCard from "../Components/Articles/articleContent/ArticleCard";
import PropTypes from "prop-types"; // import the prop-types library

const ArticleSearch = () => {
  const [search, setSearch] = useState(""); // the local state for the search input
  const articles = useSelector((state) => state.article.articles); // the articles from the redux store
  const status = useSelector((state) => state.article.status); // the status of the fetchArticles async action
  const error = useSelector((state) => state.article.error); // the error message if any
  const dispatch = useDispatch(); // the redux dispatch function

  // This function handles the change of the search input
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // This function handles the submission of the search form
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchArticles(search)); // dispatch the searchArticles action with the search query
  };

  // This effect runs once when the component mounts and dispatches the fetchArticles action
  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <div className="search-article mt-5">
      <div className="input-group d-flex justify-content-center">
        <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-auto" data-mdb-input-init>
          <input
            id="search-focus"
            className="form-control"
            type="search"
            value={search}
            onChange={handleChange}
            placeholder="Search article"
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-info" onClick={handleSubmit} type="submit" data-mdb-ripple-init><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        </div>
        </form>
      </div>
      
      <div className="article-list mt-5 d-flex justify-content-center">
        {status === "loading" && <p>Loading...</p>}
        {status === "succeeded" &&
          articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        {status === "failed" && <p>{error}</p>}
      </div>
    </div>
  );
};

// This is the prop-types validation for the SearchArticle component
ArticleSearch.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          username: PropTypes.string.isRequired,
          comment: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  status: PropTypes.oneOf(["idle", "loading", "succeeded", "failed"]).isRequired,
  error: PropTypes.string,
};

export default ArticleSearch;

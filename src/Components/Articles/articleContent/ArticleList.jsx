import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  };

function ArticleList() {
  const url = "http://localhost:3001/api/posts";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return axios.get(url).then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="article-list">
      <center>
        {data.map((dataObj, index) => { 
          return (
            <div className="article-card" key={dataObj._id}>
            <div className="container mt-2 mb-2">
                <div className="card">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src={dataObj.image} className="img-fluid" />
                    <a href="#!">
                        <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                    </a>
                    </div>
                    <div className="card-body">
                    <h5 className="card-title font-weight-bold">{dataObj.title}</h5>
                    <p className="card-subtitle">{dataObj.author.firstname}</p>
                    <p className="col-2 text-truncate">
                        {truncate(dataObj.content.replace(/<[^>]+>/g,'').split(" ").slice(0, 20).join(" "), 100)}
                    </p>
                    <Link
                        className="read-more-button"
                        method =" GET"
                        to={"http://localhost:3001/api/posts" + dataObj._id}
                    >
                    Read More
                    </Link>
                    </div>
                </div>
            </div>
            </div>
          );
        })}
      </center>
    </div>
  );
}

export default ArticleList;
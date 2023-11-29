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
    <div className="row row-cols-2 justify-content-center m-3">
        {data.map((dataObj, index) => { 
          return (
            <div className="col mt-5" key={dataObj._id}>
                <div className="card ">
                    <img src={dataObj.image} className="card-img-top img-fluid" />
                    <div className="card-body">
                    <p className="card-subtitle">{dataObj.category}</p>
                    <h5 className="card-title font-weight-bold" style={{ fontSize: "2em" }} >{dataObj.title}</h5>
                    <p className="card-subtitle">{dataObj.author.fullname}</p>
                    <p className="card-text text-truncate">
                        {truncate(dataObj.content.replace(/<[^>]+>/g,'').split(" ").slice(0, 50).join(" "), 500)}
                    </p>
                    <Link
                        className="read-more-button"
                        method =" GET"
                        to={"http://localhost:3001/api/posts/" + dataObj._id}
                    >
                    Read More
                    </Link>
                    </div>
                </div>
            </div>
          );
        })}
    </div>
  );
}

export default ArticleList;
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticles, selectArticleById } from './articleSlice';
import PropTypes from 'prop-types';

const ArticleContent = ({match}) => {
  // Use the useDispatch hook to access the redux store
  const dispatch = useDispatch();

  // Use the useSelector hook to access the redux state
  const article = useSelector((state) =>
    selectArticleById(state, parseInt(match.params.id))
  );
  const status = useSelector((state) => state.article.status);
  const error = useSelector((state) => state.article.error);

  // Use the useEffect hook to dispatch the fetchArticles action when the component mounts
  useEffect(() => {
    // Only fetch the articles if they are not already fetched
    if (status === 'idle') {
      dispatch(fetchArticles());
    }
  }, [status, dispatch]);

  return (
    <div id="article-content">
      
        <article className="container nutrikid-container">
          <h1 className="fw-bold">{article.title}
          </h1>
          <div className="time-desctiption"><h6>{article.date}</h6></div>
          <div className="container p-0 my-3 d-flex justify-content-end">
            <a href=""
              ><i className="bi bi-whatsapp mx-2 nutrikid-icon-size"></i
            ></a>
            <a href=""
              ><i className="bi bi-instagram mx-2 nutrikid-icon-size"></i
            ></a>
            <a href=""
              ><i className="bi bi-twitter-x mx-2 nutrikid-icon-size"></i
            ></a>
            <a href=""
              ><i className="bi bi-facebook mx-2 nutrikid-icon-size"></i
            ></a>
          </div>
          <figure className="text-center">
            <img src={article.image} alt={article.title} className="img-fluid" />
            <figcaption className="text-center fw-semibold nutrikid-caption">
              (Illustrasi oleh: Unsplash)
            </figcaption>
          </figure>
          <p>
            Kehamilan adalah salah satu fase paling penting dalam kehidupan
            seorang perempuan. Selama periode ini, penting untuk merawat tubuh
            dan pikiran agar bayi dapat tumbuh dengan sehat. Salah satu cara
            yang sangat efektif untuk mencapai ini adalah melalui praktik yoga.
            Senam yoga untuk ibu hamil adalah metode olahraga dan relaksasi yang
            menggabungkan gerakan tubuh dengan latihan pernapasan dan meditasi.
            Berikut adalah beberapa manfaat penting dari senam yoga untuk ibu
            hamil:
          </p>
          <p>
            <strong> 1. Meningkatkan Fleksibilitas dan Kekuatan </strong><br />
            Praktik yoga membantu ibu hamil meningkatkan fleksibilitas tubuh.
            Peregangan dan gerakan dalam yoga membantu mengurangi ketegangan
            otot, meningkatkan sirkulasi darah, dan memelihara kekuatan
            otot-otot yang penting selama kehamilan.
          </p>
        </article> 
    </div>
  )
}

export default ArticleContent
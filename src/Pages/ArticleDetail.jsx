import React from 'react'
import ArticleContent from '../Components/Articles/articleContent/ArticleContent'
import Comments from '../Components/Articles/comments/Comments'

function ArticleDetail() {
  return (
    <div id="articleContainer">
      <a href="/mainpage-article.html"></a>
        <div className="container nutrikid-container d-flex my-2">
            <a className="fs-4" href="#"
            ><i
                className="nutrikid-icon-size bi bi-arrow-left p-0"
            ></i
            ></a>
        </div>
        <ArticleContent/>
        <Comments/>
    </div>
  )
}

export default ArticleDetail
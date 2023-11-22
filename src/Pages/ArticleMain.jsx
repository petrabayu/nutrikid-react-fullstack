import React from 'react'
import SearchArticle from '../Components/Articles/searchArticle/SearchArticle'
import CardArticle from '../Components/Articles/cardArticle/CardArticle'

function ArticleMain() {
  return (
    <>
    <SearchArticle/>
    <section id="gallery">
        <div class="container">
            <div class="row">
                <CardArticle/>
                <CardArticle/>
                <CardArticle/>
                <CardArticle/>
            </div>
        </div>
    </section>
    </>
  )
}

export default ArticleMain
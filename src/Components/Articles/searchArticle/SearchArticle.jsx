import React from 'react'

function SearchArticle() {
  return (
    <div class="search">
      <span
        class="bi bi-search form-control-feedback nutrikid-icon-size"
      ></span>
      <input type="text" id="textBox" placeholder="Cari Artikel" />
    </div>
  )
}

export default SearchArticle
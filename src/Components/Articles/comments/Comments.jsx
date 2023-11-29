import React from 'react'
import CommentsContent from './CommentsContent'
import InputComment from './InputComment'

function Comments() {
  return (
    <div className="container my-5 py-5">
    <div className="row d-flex justify-content-center">
      <div className="col-md-12 col-lg-10 col-xl-8">
        <div className="card">
            <InputComment/>
            <CommentsContent/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Comments
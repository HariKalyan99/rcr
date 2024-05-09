import React from 'react'

const Blogs = ({blog}) => {
  return (
        <div class="col">
          <div class="card shadow-sm">
            <div class="card-body">
              <h4 class="card-text">{blog.title}</h4>
              <p class="card-text">{blog.body}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  {blog.tags.map((tag, ind) => <button key={ind} type="button" class="btn btn-sm btn-outline-secondary">{tag}</button>)}
                </div>
                <small class="text-body-secondary">UserId: {blog.userId}</small>
                <small class="text-body-secondary">Reactions: {blog.reactions}</small>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Blogs
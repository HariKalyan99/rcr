import React from 'react'
import Blogs from './Blogs'

const Viewblogs = ({blogsList}) => {
  return (
    <div class="album py-5 bg-body-tertiary">
          <div class="container-fluid">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {blogsList.map((blog,ind) => <Blogs key={blog.id} blog={blog} />)}
            </div>
          </div>
        </div>
  )
}

export default Viewblogs
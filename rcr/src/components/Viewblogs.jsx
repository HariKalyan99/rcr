import React, { useContext, useState } from "react";
import Blogs from "./Blogs";
import { BlogStore } from "../store/BlogStore";
// import Editblogs from './Editblogs';

const Viewblogs = () => {

  const { blogsList } = useContext(BlogStore)
  
  return (
    <div class="album py-5 bg-body-tertiary">
      <div class="container-fluid">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {blogsList.map((blog, ind) => (
            <Blogs

              key={blog.id}
              blog={blog}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Viewblogs;

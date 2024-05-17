import React, { useContext, useState } from "react";
import Editblogs from "./Editblogs";
import { BlogStore } from "../store/BlogStore";

const Blogs = ({ blog }) => {
  const { deleteBlog } = useContext(BlogStore);
  const [openEdit, setOpenEdit] = useState(false);
  return (
    <div class="col">
      {openEdit && (
        <div>
          <Editblogs
            blog={blog}
            openEdit={openEdit}
            setOpenEdit={setOpenEdit}
          />
        </div>
      )}
      <div class="card shadow-sm">
        <div class="card-body">
          <h4 class="card-text">{blog.title}</h4>
          <p class="card-text">{blog.body}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              {blog.tags.map((tag, ind) => (
                <button
                  key={ind}
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  {tag}
                </button>
              ))}
            </div>
            <small class="text-body-secondary">UserId: {blog.userId}</small>
            <small class="text-body-secondary">
              Reactions: {blog.reactions}
            </small>
          </div>
          <button
            onClick={() => deleteBlog(blog["_id"])}
            type="button"
            className="btn btn-danger"
          >
            Delete
          </button>
          <button
            onClick={() => setOpenEdit(!openEdit)}
            type="button"
            className="btn btn-danger"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

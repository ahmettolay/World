import React, { useState } from "react";
import BlogCreate from "../Blogs/BlogCreate";
import BlogList from "../Blogs/BlogList";
import "./blog.css";
const Blog = () => {
  const [createBlog, setCreateBlog] = useState(false);
  const handleCreateBlog = () => {
    setCreateBlog(true);
  };
  const handleCancel = () => {
    setCreateBlog(false);
  };
  return (
    <div className="BlogCard">
      {createBlog ? (
        <BlogCreate onCancel={handleCancel} />
      ) : (
        <>
          <BlogList />
          <div>
            <button className="blog-olustur" onClick={handleCreateBlog}>
              Blog Olustur
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default Blog;

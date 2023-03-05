import { useState, useContext } from "react";
import BlogEdit from "./BlogEdit";
import BlogContext from "../context/blogs";
import "../index.css";
import "./Card/BlogCard.css";

function BlogShow({ blog }) {
  const { deleteBlogById } = useContext(BlogContext);
  const [showEdit, setShowEdit] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleDeleteClick = () => {
    deleteBlogById(blog.id);
  };
  const handleEditClick = () => {
    setShowEdit((p) => !p);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };
  
  let content = (
    <div className="container">
      <div className="square">
        <img src={blog.img} alt={blog.title} className="mask" />
        <h1 className="h1">{blog.title}</h1>
        {showMore ? (
          <p className="blogBody">{blog.body}</p>
        ) : (
          <p className="blogBody">{blog.body.slice(0, 100)}</p>
        )}
        {!showMore && (
          <button className="show-more-btn" onClick={toggleShowMore}>
            More
          </button>
        )}
        {showMore && (
          <button className="button" onClick={toggleShowMore}>
            Less
          </button>
        )}
        <p>{blog.blogCreateDate}</p>
        <button className="edit-btn" onClick={handleEditClick}>
          <img src="" alt="" />
          Edit
        </button>
        <button className="delete-btn" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );

  if (showEdit) {
    content = <BlogEdit onSubmit={handleSubmit} blog={blog} />;
  }

  return <div className="deneme">{content}</div>;
}

export default BlogShow;

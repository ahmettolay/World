import { useState, useContext } from "react";
import BlogEdit from "./BlogEdit";
import BlogContext from "../../context/blogs";
import "../Blogs/blogShow.css";

function BlogShow({ blog }) {
  const { deleteBlogById } = useContext(BlogContext);
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    deleteBlogById(blog.id);npm
  };
  const handleEditClick = () => {
    setShowEdit((p) => !p);
  };

  const  handleSubmit = () => {
    setShowEdit(false);
  };
  let content = (
    <div >
      <div className="square">
        <img src={blog.img} alt={blog.title} />
        <h3>{blog.title}</h3>
        <p className="blogBody">{blog.body}</p>
        <button className="show-more-btn">More</button>
        <p>{blog.blogCreateDate}</p>
        <button className="btn" onClick={handleEditClick}>
          Edit
        </button>
        <button className="btn" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );

  if (showEdit) {
    content = <BlogEdit onSubmit={handleSubmit} blog={blog} />;
  }

  return <div className="blogShow-container">{content}</div>;
}
export default BlogShow;

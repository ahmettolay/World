import { useContext } from "react";
import BlogContext from "../../context/blogs";
import "../Blogs/blogShow.css";
import { Link } from "react-router-dom";
function BlogShow({ blog }) {
  const { deleteBlogById } = useContext(BlogContext);
  const handleDeleteClick = () => {
    deleteBlogById(blog.id);
  };
  let content = (
    <div>
      <div className="bs-blog-wrapper">
        <div className="bs-blog-card">
          <div className="bs-card-img">
            <img src={blog.img} alt={blog.title} />
            <h1>{blog.title}</h1>
          </div>
          <div>
            {" "}
            <p className="bs-card-text">{blog.body}</p>
          </div>
          <div className="bs-read-more">
            <Link to={`/components/Blogs/BlogRead:${blog.id}`}>Read More</Link>
          </div>
          <div className="bs-card-details">
            <p>{blog.blogCreateDate}</p>
          </div>
          <button className="btn bs-edit-btn">
            <Link to={`/components/Blogs/BlogEdit:${blog.id}`}>Edit</Link>
          </button>
          <button className="btn bs-delete-btn" onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
  return <div className="blogShow-wrapper">{content}</div>;
}
export default BlogShow;

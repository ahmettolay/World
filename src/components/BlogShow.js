import { useState, useContext } from "react";
import BlogEdit from "./BlogEdit";
import BlogContext from "../context/blogs";
import '../index.css'


function BlogShow({ blog }) {
  const { deleteBlogById } = useContext(BlogContext);
  const [showEdit, setShowEdit] = useState(false);
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
   
      
        <div className="blogShow-container">
          <img src={blog.img} alt={blog.title} />
          <h3>{blog.title}</h3>
          <p>{blog.body}</p>
          <p>{blog.blogCreateDate}</p>
          <button className="btn"  onClick={handleEditClick}>
            <img src="" alt="" />
            Edit
          </button>
          <button className="btn"  onClick={handleDeleteClick}>
            Delete
          </button>
      </div>
    
  
  );

  if (showEdit) {
    content = <BlogEdit onSubmit={handleSubmit} blog={blog} />;
  }

  return <div className="deneme">{content}</div>
    
    
   
}
export default BlogShow;

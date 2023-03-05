import { useState, useContext } from "react";
import BlogEdit from "./BlogEdit";
import BlogContext from "../context/blogs";
import '../index.css'
import './Card/BlogCard.css'


function BlogShow({ blog }) {
  const { deleteBlogById } = useContext(BlogContext);
  const [showEdit, setShowEdit] = useState(false);
  console.log(blog);
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
          <img src={blog.img} alt={blog.title} className="mask"/>
          <h1 className="h1">{blog.title}</h1>
          <p>{blog.body}</p>
          <p>{blog.blogCreateDate}</p>
          <button className="button"  onClick={handleEditClick}>
            <img src="" alt="" />
            Edit
          </button>
          <button className="button"  onClick={handleDeleteClick}>
            Delete
          </button>
      </div>
      </div>
    
  
  );

  if (showEdit) {
    content = <BlogEdit onSubmit={handleSubmit} blog={blog} />;
  }

  return <div className="deneme">{content}</div>
    
    
   
}
export default BlogShow;

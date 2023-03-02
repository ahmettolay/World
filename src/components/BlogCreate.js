import { useState, useContext } from "react";
import BlogContext from "../context/blogs";

const BlogCreate = () => {
  const { createBlog } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBlog(title);
    setTitle("");
  };
  return (
    <div className="blog-create">
      <h3>Blog Ekle</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Oluştur</button>
      </form>
    </div>
  );
};
export default BlogCreate;

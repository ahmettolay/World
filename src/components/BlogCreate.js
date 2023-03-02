import { useState, useContext } from "react";
import BlogContext from "../context/blogs";

const BlogCreate = () => {
  const { createBlog } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeBody = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBlog(title,body);
    setTitle("");
    setBody("")
  };
 
 
  
  return (
    <div className="blog-create">
      <h3>Blog Ekle</h3>
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input className="input-title" value={title} onChange={handleChangeTitle} />
        <label>Body: </label>
        <input className="input-body" value={body}  onChange={handleChangeBody}/>
        <button className="button">Oluştur</button>
      </form>
       
    </div>
  );
};
export default BlogCreate;

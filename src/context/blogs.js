import { createContext, useState } from "react";
import axios from "axios";
const BlogContext = createContext();

function Provider({ children }) {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get("http://localhost:3001:/blogs");

    setBlogs(response.data);
    console.log(blogs);
  };
  const createBlog = async (title) => {
    const response = await axios.post("http://localhost:3001/blogs", {
      title,
    });

    const updatedBlogs = [...blogs, response.data];
    setBlogs(updatedBlogs);
  };
  const valueToShare = {
    blogs,
    createBlog,
    fetchBlogs,
  };
  return (
    <BlogContext.Provider value={valueToShare}>{children}</BlogContext.Provider>
  );
}
export { Provider };
export default BlogContext;

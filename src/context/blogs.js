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

  const deleteBlogById = async (id) => {
    await axios.delete(`http://localhost:3001/blogs/${id}`);
    const updatedBlogs = blogs.filter((blog) => {
      return blog.id !== id;
    });
    setBlogs(updatedBlogs);
  };

  const editBlogById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/blogs/${id}`, {
      title: newTitle,
    });
    const updatedBlogs = blogs.map((blog) => {
      if (blog.id === id) {
        return { ...blog, ...response.data };
      }
      return blog;
    });
    setBlogs(updatedBlogs);
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
    deleteBlogById,
    fetchBlogs,
    editBlogById,
  };
  return (
    <BlogContext.Provider value={valueToShare}>{children}</BlogContext.Provider>
  );
}
export { Provider };
export default BlogContext;

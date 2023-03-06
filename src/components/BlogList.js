import { useContext, useEffect, useState } from "react";
import BlogContext from "../context/blogs";
import BlogShow from "./BlogShow";
import "../blogList.css"

const BlogList = () => {
  const { blogs } = useContext(BlogContext);
  const [filterBlogs, setFilterBlogs] = useState(blogs);
  const [searchBlog, setSearchBlog] = useState("");

  useEffect(() => {
    setFilterBlogs(filteredBlogs);
  }, [blogs, searchBlog]);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchBlog.toLowerCase().trim())
  );
  const  renderedBlogs = filterBlogs.map((blog) => {
    return <BlogShow key={blog.id} blog={blog} />;
  });
  return (
    <>
    <div className="flexbox">
      <div className="search" >
        <div>
       <input  type="text" onChange={(e) => setSearchBlog(e.target.value)}  placeholder="Blog Ara..." required/>
        </div>
      </div>
    </div>
    {renderedBlogs}
    </>
   );
};

export default BlogList;

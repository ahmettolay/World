import { useContext, useEffect, useState } from "react";
import BlogContext from "../../context/blogs";
import BlogShow from "./BlogShow";
import "../Blogs/blogList.css";

const BlogList = () => {
  const { blogs } = useContext(BlogContext);
  const [filterBlogs, setFilterBlogs] = useState(blogs);
  const [searchBlog, setSearchBlog] = useState("");

  useEffect(() => {
    setFilterBlogs(filteredBlogs);
  }, [blogs, searchBlog]);

  const filteredBlogs = blogs.filter((blog) => blog.title.toLowerCase().includes(searchBlog.toLowerCase().trim()));

  return (
    <>
      <div className="flexbox">
        <div className="search">
          <div>
            <input type="text" onChange={(e) => setSearchBlog(e.target.value)} placeholder="Blog Ara..." required />
          </div>
        </div>
      </div>
      {filterBlogs && filterBlogs.map((blog) => <BlogShow key={blog.id} blog={blog} />)}
    </>
  );
};

export default BlogList;

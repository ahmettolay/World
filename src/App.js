import { useEffect, useContext } from "react";
import BlogContext from "./context/blogs";
import HomePage from "./components/Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./components/Pages/Info";
import Educations from "./components/Pages/Educations";
import Blog from "./components/Pages/Blog";
import Layout from "./components/Layout/Layout";
import BlogEdit from "./components/Blogs/BlogEdit";
import BlogRead from "./components/Blogs/BlogRead";
import NotFound from "./components/Pages/NotFound";
const App = () => {
  const { fetchBlogs, blogs } = useContext(BlogContext);
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<Info />} />
            <Route path="education" element={<Educations />} />
            <Route path="blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
            {blogs.map((blog) => {
              return (
                <Route key={blog.id}>
                  <Route
                    key={blog.id}
                    path={`/components/Blogs/BlogEdit:${blog.id}`}
                    element={<BlogEdit blog={blog} />}
                  />
                  <Route
                    key={blog.id}
                    path={`/components/Blogs/BlogRead:${blog.id}`}
                    element={<BlogRead blog={blog} />}
                  />
                </Route>
              );
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;

import React from "react"

import BlogCreate from "../Blogs/BlogCreate"
import BlogList from "../Blogs/BlogList"

const Blog = () => {
  return (
    <div className="BlogCard">
        <BlogList/>
        <BlogCreate/>
    </div>
  )
}
export default Blog
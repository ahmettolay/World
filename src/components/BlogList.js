import { useContext } from "react"
import BlogContext from "../context/blogs"
import BlogShow from "./BlogShow"


const BlogList  = ()=> {
    const {blogs}=useContext(BlogContext)
    const renderedBlogs = blogs.map((blog)=>{
        return <BlogShow  key={blog.id} blog={blog} />
    })
    return <div>{renderedBlogs}</div>
}

export default BlogList

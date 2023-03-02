import { useContext, useState } from "react"
import BlogContext from "../context/blogs"

function BlogEdit({blog,onSubmit}) {
    const {editBlogById}=useContext(BlogContext)
    const [title,setTitle]=useState(blog.title)
const handleChange =(e)=>{
setTitle(e.target.value)
}
const handleSubmit = (e)=>{
    e.preventDefault()
    onSubmit()
    editBlogById(book.id,title)
}

  return (
    <form className="blog-edit" onSubmit={handleSubmit}>
<label >Title</label>
<input className="input" value={title} onChange={handleChange} />
<button className='button is-primary'>Save</button>
    </form>
  )
}
export default BlogEdit
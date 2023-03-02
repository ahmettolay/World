import { useContext, useState } from "react"
import BlogContext from "../context/blogs"

function BlogEdit({ blog, onSubmit }) {
    const {editBlogById}=useContext(BlogContext)
    const [title,setTitle]=useState(blog.title)
    const [body,setBody]=useState(blog.body)
const handleChangeTitle =(e)=>{
setTitle(e.target.value)
}
const handleChangeBody =(e)=>{
  setBody(e.target.value)
  }
const handleSubmit = (event)=>{
  event.preventDefault()
    editBlogById(blog.id,title,body)
    onSubmit()
}

  return (
    <form className="blog-edit" onSubmit={handleSubmit}>
<label >Title</label>
<input className="input" value={title} onChange={handleChangeTitle} />
<label >Body</label>
<input className="input" value={body} onChange={handleChangeBody} />
<button className='button is-primary'>Save</button>
    </form>


  )
}

export default BlogEdit
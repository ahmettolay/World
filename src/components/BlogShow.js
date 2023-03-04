import { useState, useContext } from 'react'
import BlogEdit from "./BlogEdit"
import BlogContext from "../context/blogs"

function BlogShow({blog}) {
  const { deleteBlogById } = useContext(BlogContext)
  const [showEdit, setShowEdit] = useState(false);
console.log(blog);
  const handleDeleteClick = () => {
    deleteBlogById(blog.id)
  }
  const handleEditClick = () => {
    setShowEdit((p) => !p)
  }

  const handleSubmit = () => {
    setShowEdit(false)
  }
  let content = (<>
  <h3>{blog.title}</h3>
  <p>{blog.body}</p>
  <img src={blog.img} alt={blog.title} />
  <p>{blog.blogCreateDate}</p>
  </> )
  
  if (showEdit) {
    content = <BlogEdit onSubmit={handleSubmit} blog={blog} />
  }


  return (
    <div className="blog-show">
      {content}
      <div className="actions">
        <button className="edit"  onClick={handleEditClick} >
          Edit
        </button>
        <button className='delete' onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default BlogShow;



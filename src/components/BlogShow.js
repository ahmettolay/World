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
  let content = <h3>{blog.title}</h3>
  if (showEdit) {
    content = <BlogEdit onSubmit={handleSubmit} blog={blog} />
  }
  return (
    <div className="blog-show">
      {content}
      <img src={`https://picsum.photos/seed/${blog.id}/300/200`} alt="blogs" />
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



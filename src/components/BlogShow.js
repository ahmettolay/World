import { useState, useContext } from 'react'
import BlogEdit from "./BlogEdit"
import BlogContext from "../context/blogs"
import '../BlogCard.css'

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
  
  <div className='h1'>{blog.title}</div>
  <p>{blog.body}</p>
  </> )
  
  if (showEdit) {
    content = <BlogEdit onSubmit={handleSubmit} blog={blog} />
  }
  const date = new Date();
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  return (
    <div className='container'>
    <div className="square">
        <img src={`https://picsum.photos/seed/${blog.id}/300/200`} alt="blogs" className="mask" />
      {content}
      
    
        <div>{formattedDate}</div>
      
      <div className="actions">
        <button className="button"  onClick={handleEditClick} >
          Edit
        </button>
        <button className='button' onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
    </div>
  );
}
export default BlogShow;



import { useState, useContext } from 'react'
import BlogEdit from "./BlogList"

function BlogShow({blog}) {
  const [showEdit, setShowEdit] = useState(false);


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
        <button className="edit" >
          Edit
        </button>
        <button className="delete">Delete</button>
      </div>
    </div>
  );
}
export default BlogShow;

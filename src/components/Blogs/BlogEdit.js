import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogContext from "../../context/blogs";

function BlogEdit({ blog, onSubmit }) {
  const { editBlogById } = useContext(BlogContext);
  const [title, setTitle] = useState(blog.title);
  const [body, setBody] = useState(blog.body);
  const [img, setImg] = useState(blog.img);
  const navigete = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    editBlogById(blog.id, title, body, img);
    navigete("/components/Page/Blog")
  };

  return (
    <form className="blog-edit" onSubmit={handleSubmit}>
      <div className="blog-edit-square">
        <label>Title:</label>
        <input
          className="input-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label>Img:</label>
        <input
          className="input-img"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
      </div>
      <div>
        <label>Body:</label>
        <textarea
          className="input-body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>

      <button className="button is-primary" onClick={handleSubmit}>
       Save
        </button>
    </form>
  );
}

export default BlogEdit;

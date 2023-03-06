import { useContext, useState } from "react";
import BlogContext from "../context/blogs";

function BlogEdit({ blog, onSubmit }) {
  const { editBlogById } = useContext(BlogContext);
  const [title, setTitle] = useState(blog.title);
  const [body, setBody] = useState(blog.body);
  const [img, setImg] = useState(blog.img);

  const handleSubmit = (event) => {
    event.preventDefault();
    editBlogById(blog.id, title, body, img);
    onSubmit();
  };

  return (
    <form  className="blog-edit" onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label>Img:</label>
        <input
          className="input"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
      </div>
      <div>
        <label>Body:</label>
        <input
          className="input"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>


      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BlogEdit;

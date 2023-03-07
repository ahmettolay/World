import { useState, useContext } from "react";
import BlogContext from "../../context/blogs";

const BlogCreate = () => {
  const { createBlog } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [blogCreateDate, setBlogCreateDate] = useState("");
  const [img, setImg] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTitle = title.trim();
    const newBody = body.trim();
    console.log(newBody);
    console.log(newTitle);

    if (newTitle && newBody) {
      createBlog(newTitle, newBody, blogCreateDate, img);
      setTitle("");
      setBody("");
      setImg("");
    }
  };

  const date = new Date();
  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  return (
    <div className="blog-create">
      <div className="blog-create-square">
        <div>
          <h2>Blog Ekle</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title </label>
            <input
              className="input-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Img: </label>
            <input
              className="input-img"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>
          <div>
            <label>Body: </label>
            <textarea
              className="input-body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <div>
            <button
              className="button"
              onClick={() => setBlogCreateDate(formattedDate)}
            >
              Oluştur
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default BlogCreate;

import { useState, useContext } from "react";
import BlogContext from "../../context/blogs";

const BlogCreate = ({ onCancel }) => {
  const { createBlog } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [blogCreateDate, setBlogCreateDate] = useState("");
  const [img, setImg] = useState("");

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
      onCancel(); // İşlem tamamlandıktan sonra onCancel fonksiyonunu çağırarak BlogCreate componentini kapat
    }
  };

  const handleCancel = () => {
    onCancel(); // "Cancel" butonuna tıklandığında onCancel fonksiyonunu çağırarak BlogCreate componentini kapat
  };

  const date = new Date();
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

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
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Blog başlığını giriniz"
            />
          </div>
          <div>
            <label>Img: </label>
            <input
              className="input-img"
              type="url"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              required
              placeholder="blog için görsel ekleyiniz"
            />
          </div>
          <div>
            <label>Blog Yazısı </label>
            <textarea className="input-body" value={body} onChange={(e) => setBody(e.target.value)} required />
          </div>
          <div>
            <button className="button" onClick={() => setBlogCreateDate(formattedDate)}>
              Oluştur
            </button>
            <button
              className="button"
              type="button"
              onClick={handleCancel} // "Cancel" butonuna tıklandığında handleCancel fonksiyonunu çağırarak BlogCreate componentini kapat
            >
              İptal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default BlogCreate;

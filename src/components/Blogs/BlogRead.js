const BlogRead = ({ blog }) => {
  return (
    <div>
      <div>
        <h1>{blog.title}</h1>
      </div>
      <div>
        <img src={blog.img} />
      </div>
      <div>
        <p>{blog.body}</p>{" "}
      </div>
    </div>
  );
};
export default BlogRead;

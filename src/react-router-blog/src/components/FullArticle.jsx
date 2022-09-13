import { Link, useParams } from "react-router-dom";

import posts from "../data/posts";

const FullPost = () => {
  const { id } = useParams();

  const post = posts.find((post) => post.id === +id);

  return (
    <div className="full-post">
      <h1>{post.title}</h1>
      <img src={post.imageUrl} alt={post.title} />
      <p>{post.text}</p>
      <Link to="/">Назад</Link>
    </div>
  );
};

export default FullPost;

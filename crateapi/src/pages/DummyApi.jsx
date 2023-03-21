
import React, { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://dummyjson.com/posts")
      .then((res) => {
        console.log(res.data.posts);
        setPosts(res.data.posts);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "4",
      }}
    >
      <div style={{ fontSize:'30px' }}> Available Posts Here</div>
      {posts.map((post) => (
        <div class="card w-50 mt-2">
          <div class="card-body">
            <h5 class="card-title">{post.title}</h5>
            <p class="card-text">{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
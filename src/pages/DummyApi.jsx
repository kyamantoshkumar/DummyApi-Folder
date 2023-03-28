
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/style.css"
const Posts = () => {
const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://dummyjson.com/posts ")  //https://pokeapi.co/api/v2/pokemon/ditto http://dummyjson.com/posts https://dog.ceo/api/breed/hound/images
      .then((res) => {
        console.log(res.data.posts);
        setPosts(res.data.posts);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
    className="my-4 shadow"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "4",
      }}
    >
      <div style={{ fontSize:'30px', position:'' }}> Available Posts Here</div>
      {posts.map((post) => (
        <div className="card w-50 mt-2">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
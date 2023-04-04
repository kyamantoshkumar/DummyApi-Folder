/*
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/style.css"
const Posts = () => {
const [posts, setPosts] = useState([]);

  useEffect(() => {
    
    axios.get("http://dummyjson.com/posts")  //https://pokeapi.co/api/v2/pokemon/ditto http://dummyjson.com/posts https://dog.ceo/api/breed/hound/images
      .then((res) => {
        console.log(res.data.posts);
        setPosts(res.data.posts);
      })
      .catch((err) => console.log(err));
     
  }, []);
  //https://dog.ceo/api/breeds/image/random'
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
*/

/* 
import React, { useState, useEffect } from 'react';

function Posts() {
  const [dogImage, setDogImage] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDogImage(data.message))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='w-50 h-50 px-4 py-4'>
      {dogImage && <img src={dogImage} alt="Random dog" />}
    </div>
  );
}

export default Posts;

*/

import React, { useState, useEffect } from 'react';

function Posts() {
  const [pokemonCards, setPokemonCards] = useState([]);

  useEffect(() => {
    fetch('https://api.pokemontcg.io/v2/cards')  //https://pokeapi.co/api/v2/pokemon/ditto  https://pokeapi.co/api/v2/pokemon https://api.pokemontcg.io/v2/cards
      .then(response => response.json())
      .then(data => setPokemonCards(data.data))
      .catch(error => console.log(error));
      
      console.log(pokemonCards);
  }, []);

  return (
    <div className=''>
      {pokemonCards.map(card => (
        <img key={card.id} src={card.images.small} alt={card.name} />
      ))}
    </div>
  );
}

export default Posts;





/*
import {useEffect} from "react";
import axios from "axios"

function Posts() {

useEffect(() => {
	(async () => {
	try {
		const result = await axios.get(
"https://jsonplaceholder.typicode.com/todos")
		console.log(result.data);
	} catch (error) {
		console.error(error);
	}
	})()
})

return (
	<div >
		Different ways to fetch Data
	</div>
);
}

export default Posts;
*/

    
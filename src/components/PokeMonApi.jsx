import React from 'react'
import "../assets/css/Card.css"
const PokeMonApi = () => {
    
const poke_container = document.getElementById("poke-container")
const pokemon_count = 100
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
}


const main_types = Object.keys(colors)

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    // returns a promise we need to await
    await getPokemon(i)
  }
}

const getPokemon = async (id) => {
  // api url
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url) //await the fetch promise
  const data = await res.json()
  createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div")
  pokemonEl.classNameList.add("pokemon")

  // Converting first letter to uppercase
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
  // for 001 next is 002
  const id = pokemon.id.toString().padStart(3, "0")

  // Getting the types name which is array of objects of type
  const poke_types = pokemon.types.map((type) => type.type.name)
  const type = main_types.find((type) => poke_types.indexOf(type) > -1)
  const color = colors[type]
  // background is dependent on type
  pokemonEl.style.backgroundColor = color

  const pokemonInnerHTML = `
    <div className="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${name}">
    </div>
    <div className="info">
        <span className="number">#${id}</span>
        <h3 className="name">${name}</h3>
        <small className="type">Type: <span>${type}</span> </small>
    </div>
    `

  // insert into HTML
  pokemonEl.innerHTML = pokemonInnerHTML
  // put it into DOM
  poke_container.appendChild(pokemonEl)
}

fetchPokemons()

  return (
    <div>


    </div>
  )
}

export default PokeMonApi
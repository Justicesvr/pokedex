import PokemonCard from "./components/PokemonCard"
import NavBar from "./components/NavBar"

import { useState } from "react";
import './App.css'

 const pokemonList = [
{
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];


function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleNextClick = () => {
    setPokemonIndex(pokemonIndex + 1);
  }
   const handlePrevClick = () => {
    setPokemonIndex(pokemonIndex - 1);
  }

  const next = handleNextClick;
  const prev = handlePrevClick;

  return (
    <>
    <div>
    </div>
    <NavBar next={next} prev={prev} pokemonList={pokemonList} pokemonIndex={pokemonIndex}/>
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
    </div>
    </>
  );
}

export default App;
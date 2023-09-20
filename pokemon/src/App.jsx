import PokemonCard from "./components/PokemonCard"
import NavBar from "./components/NavBar"
// import { useEffect } from "react";
import { useState } from "react";
import './App.css'

 const pokemonList = [
{
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    backgroundColor: '#90ee90',
  },
  {
    name: "Charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      backgroundColor: '#f69169',
  },
  {
    name: "Squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    backgroundColor: '#69e8f6',

  },
  {
    name: "Pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    backgroundColor: '#ffff99',
  },
  {
    name: "Mew",
    backgroundColor: '#9999ff',
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  // useEffect(
  //   () => {
  //     alert("Hello pokemon trainer !!");
  //   }, [])
    
  //   ;
  // const handleNextClick = () => {
  //   setPokemonIndex(pokemonIndex + 1);
  // }
  //  const handlePrevClick = () => {
  //   setPokemonIndex(pokemonIndex - 1);
  // }

  // const next = handleNextClick;
  // const prev = handlePrevClick;

  return (
    <>
    <div>
    </div>
    <NavBar pokemonList = {pokemonList} pokemonIndex = {pokemonIndex} setPokemonIndex = {setPokemonIndex}/>
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
    </div>
    </>
  );
}

export default App;
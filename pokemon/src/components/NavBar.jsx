import PropTypes from "prop-types";

function NavBar({pokemonList, setPokemonIndex}) {

function handleClick(index) {
 if (index === 3) {
      alert("PIKA PIKA!!");
    }  return setPokemonIndex(index);

}
  return (
    <>
    <h1>Pokémons</h1>
    <div>
   
    {
      pokemonList.map((pokemon, index) => (
        <button className="btn" key={index} onClick={ () => handleClick(index)}>{pokemon.name}</button>
      ))
    }  

   </div>
   </>
  );
}

NavBar.propTypes = {
  pokemonList: PropTypes.array,
  pokemonIndex: PropTypes.number,
  next: PropTypes.number,
  prev: PropTypes.number,
  setPokemonIndex: PropTypes.number,
}

  {/* {pokemonIndex > 0 ? (
     <button onClick={prev}>Précédent</button> ) : ( " "
     )}

      {pokemonIndex < pokemonList.length - 1 ? ( 
      <button onClick={next}>Suivant</button> ) :( " "
      )} */}

export default NavBar;

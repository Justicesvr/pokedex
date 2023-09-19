import PropTypes from "prop-types";

function NavBar({next, prev, pokemonIndex, pokemonList}) {

  return (
    <>
    <div>
     {pokemonIndex > 0 ? (
     <button onClick={prev}>Précédent</button> ) : ( " "
     )}

      {pokemonIndex < pokemonList.length - 1 ? ( 
      <button onClick={next}>Suivant</button> ) :( " "
      )}
   </div>
   </>
  );
}

NavBar.propTypes = {
  pokemonList: PropTypes.array,
  pokemonIndex: PropTypes.number,
  next: PropTypes.number,
  prev: PropTypes.number,
}

export default NavBar;

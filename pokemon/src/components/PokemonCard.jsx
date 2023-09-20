import PropTypes from "prop-types";

function PokemonCard({pokemon}) {

  // const backgroundColors = ['#90ee90', '#f69169', '#69e8f6', '#ffff99', '#9999ff'];
  // const backgroundColor = backgroundColors[index % backgroundColors.length];


  return (

  <figure className="card" style={{ backgroundColor: pokemon.backgroundColor }}>
    {pokemon.imgSrc ? (
      <img className="card-img"src={pokemon.imgSrc} alt={pokemon.name}/>
    ) : (
      <p>???</p>
    )}
    <figcaption>{pokemon.name}</figcaption>
  </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
    backgroundColor: PropTypes.string,
  }),
 
}

export default PokemonCard;

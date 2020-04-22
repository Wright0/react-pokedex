import React from 'react';
import './SelectedPokemonPanels.css';

const SelectedPokemonImage = ({pokemon}) => {
  if (!pokemon) return null;

  const pokemonType = pokemon.types.map(typeObject => {
    return <p>{typeObject.type.name}</p>;
  })

  return(
    <article id="pokemon-image-box">
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
    </article>
  )
}

export default SelectedPokemonImage;

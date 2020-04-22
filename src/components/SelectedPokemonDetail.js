import React from 'react';
import './SelectedPokemonPanels.css';

const SelectedPokemonDetail = ({pokemon}) => {
  if (!pokemon) return null;

  const pokemonType = pokemon.types.map(typeObject => {
    return <li key={typeObject.type.name}>{typeObject.type.name}</li>;
  })

  // This turns the api's measurements into kgs
  const pokemonWeight = pokemon.weight/10

  const pokemonHeight = () => {
    const decimetersInMeter = 10
    const decimetersInCentimeters = 0.1
    
    if (pokemon.height < 10) {
      return <p>{pokemon.height/decimetersInCentimeters}cm</p>
    } else {
      return <p>{pokemon.height/decimetersInMeter}m</p>
    }
  }

  const returnTypeSingularOrPlural = () => {
    let typeOrTypes

    if (pokemonType.length > 1){
      typeOrTypes = <p>Types:</p>;
    } else {
      typeOrTypes = <p>Type:</p>;
    }

    return typeOrTypes;
  } 

  return(
    <article id="pokemon-info-box">
      { returnTypeSingularOrPlural() }
      <ul>
        { pokemonType }
      </ul>
      <p>Weight:</p>
      <p>{pokemonWeight}kg</p>
      <p>Height:</p>
      { pokemonHeight() }
    </article>
  )
}

export default SelectedPokemonDetail;

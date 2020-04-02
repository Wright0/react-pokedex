import React from 'react';

const PokemonDetail = ({pokemon}) => {
  if (!pokemon) return null;

  const pokemonType = pokemon.types.map(typeObject => {
    return <p>{typeObject.type.name}</p>;
  })

  const returnTypeSingularOrPlural = () => {
    let typeOrTypes = <p></p>;

    if (pokemonType.length > 1){
      typeOrTypes = <p>Types:</p>;
    } else {
      typeOrTypes = <p>Type:</p>;
    }

    return typeOrTypes;
  } 

  return(
    <article>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
      { returnTypeSingularOrPlural() }
      { pokemonType }
    </article>
  )
}

export default PokemonDetail;

import React from 'react';
import './SelectedPokemonPanels.css';

const SelectedPokemonDetail = ({pokemon}) => {
  if (!pokemon) return null;

  const returnXPokemonMovesArray = (numberOfMoves) => {
    const finalMoveArrayPostion = numberOfMoves + 1
    const movesArray = pokemon.moves.slice(0, finalMoveArrayPostion)
    return movesArray;
  }

  const pokemonMove = returnXPokemonMovesArray(10).map(moveObject => {
    return <li key={moveObject.move.name}>{moveObject.move.name}</li>
  })

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

  const returnSingularOrPluralHeading = (arrayList, baseWord) => {
    let singularOrPlural

    if (arrayList.length > 1){
      singularOrPlural = <p>{`${baseWord}s`}:</p>;
    } else {
      singularOrPlural = <p>{baseWord}:</p>;
    }

    return singularOrPlural;
  }

  return(
    <article id="pokemon-info-box">
      { returnSingularOrPluralHeading(pokemonType, 'Type') }
      <ul>
        { pokemonType }
      </ul>
      <p>Weight:</p>
      <p>{pokemonWeight}kg</p>
      <p>Height:</p>
      { pokemonHeight() }
      { returnSingularOrPluralHeading(pokemonMove, 'Move') }
      <ul>
        { pokemonMove }
      </ul>
    </article>
  )
}

export default SelectedPokemonDetail;

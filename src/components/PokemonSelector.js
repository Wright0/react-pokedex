import React from 'react';

const PokemonSelector = ({pokemonList, onSelectPokemon}) => {

  const options = pokemonList.map(pokemon => {
    return <option value={pokemon.url} key={pokemon.name}>{pokemon.name}</option>
  })

  function handleSelectedPokemon(event){
    onSelectPokemon(event.target.value)
  }

  return(
    <select onChange={handleSelectedPokemon}>
      <option value="default">Who's that Pokemon?</option>
      { options }
    </select>
  )
}

export default PokemonSelector;
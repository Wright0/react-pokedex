import React from 'react';


const PokemonSelector = (props) => {

  const options = props.pokemonList.map(pokemon => {
    return <option value={pokemon.url} key={pokemon.name}>{pokemon.name}</option>
  })

  function handleSelectedPokemon(event){
    props.onSelectPokemon(event.target.value)
  }

  return(
    <select onChange={handleSelectedPokemon}>
      <option disabled value="default">Who's that Pokemon?</option>
      { options }
    </select>
  )
}

export default PokemonSelector

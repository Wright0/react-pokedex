import React, { useState, useEffect } from 'react';

const PokemonSearch = ({pokemonList}) => {

    const [searchQuery, setSearchQuery] = useState('');

    const findMatchingPokemon = () => {
        const matchingPokemon = pokemonList.filter(pokemon => {
            return pokemon.name.startsWith(searchQuery)
        })
        console.log(matchingPokemon); 
    }

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    }

    useEffect( () => {
        findMatchingPokemon();
      }, [searchQuery])

    return (
        <article>
            <input type="text" onChange={handleSearchInputChange}/>
            
        </article>
    )

}

export default PokemonSearch;
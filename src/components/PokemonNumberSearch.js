import React, { useState, useEffect } from 'react';
import './PokemonSearch.css';

const PokemonNumberSearch = ({pokemonList, onSelectPokemon}) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [matchingPokemon, setMatchingPokemon] = useState([]);

    const findMatchingPokemon = () => {
        const matchingPokemonfromQuery = pokemonList.filter(pokemon => {
            return pokemon.name.startsWith(searchQuery)
        })
        setMatchingPokemon(matchingPokemonfromQuery);
    }

    // Sets searchQuery
    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    }

    // Runs function from Pokedex and sets selected Pokemon there
    const handleSelectedPokemon = (event) => {
        setSearchQuery(null)
        onSelectPokemon(event.currentTarget.dataset.url);
    }

    const foundPokemon = matchingPokemon.map(pokemon => {
        return <li data-url={pokemon.url} key={pokemon.name} onClick={handleSelectedPokemon}>{pokemon.name}</li>
      })

    // Runs the findMatchingPokemon function every time the searchQuery is updated.
    useEffect(() => {
        findMatchingPokemon();
      }, [searchQuery])

    return (
        <article className="search">
            <label htmlfor="number-search">Search by number:</label>
            <input type="number" name="number-search" id="number-search" min="1" max="151" onChange={handleSearchInputChange}></input>
        </article>
    )
}

export default PokemonNumberSearch;
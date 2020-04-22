import React, { useState, useEffect } from 'react';
import './PokemonSearch.css';

const PokemonNameSearch = ({pokemonList, onSelectPokemon}) => {

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
            <label htmlFor="name-search">Search by name:</label>
            <input type="text" name="name-search" id="text-search" onChange={handleSearchInputChange}></input>
            <ul>
                { foundPokemon }
            </ul>
        </article>
    )
}

export default PokemonNameSearch;
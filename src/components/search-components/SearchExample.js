import React from 'react';
import SelectSearch from 'react-select-search';
import './SearchExample.css';

const SearchExample = ({pokemonList, onSelectPokemon}) => {

    const pokemonListFormatted = pokemonList.map(({ url: value, ...rest }) => ({ value, ...rest }));
    
    const handleUpdatePokemonUrl = (value) => onSelectPokemon(value);

    return (
        <SelectSearch
        options={pokemonListFormatted}
        onChange={handleUpdatePokemonUrl}
        multiple={false}
        placeholder="Search enabled"
        search
        />
    )             
}

export default SearchExample;

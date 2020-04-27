import React, { useEffect, useState } from 'react';
import SelectedPokemonImage from '../components/SelectedPokemonImage.js'
import SelectedPokemonDetail from '../components/SelectedPokemonDetail.js'
import SearchExample from '../components/search-components/SearchExample.js';
import './Pokedex.css';

const Pokedex = () => {

  const [pokemonList, setPokemonList] = useState([])
  const [selectedPokemonUrl, setSelectedPokemonUrl] = useState('')
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  const getPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(pokemon => setPokemonList(pokemon.results))
    .catch(err => console.error)
  }

  const fetchSelectedPokemon = () => {
    fetch(selectedPokemonUrl)
    .then(response => response.json())
    .then(pokemonObject => setSelectedPokemon(pokemonObject))
    .catch(err => console.error)
  }

  useEffect( () => {
    getPokemon();
  }, [])

  useEffect( () => {
    fetchSelectedPokemon();
  }, [selectedPokemonUrl])

  return(
    <>
    <section className="pokedex-box">
        <div className="main-pokedex-body">
            <div className="left-grey-circle">
                <div className="left-green-circle"></div>
            </div>
            <div className="bottom-left-corner-squared"></div>
            <div className="hinge-bar"></div>
            <div className="hinge-bar-indent"></div>
            <div className="screen-border-top">
                <div className="screen-border-double"></div>
                <div className="screen">
                <section className="info-box">
                  <SelectedPokemonImage pokemon={selectedPokemon}/>
                </section>
                </div>
                <section className="top-search">
                  <SearchExample pokemonList={pokemonList} onSelectPokemon={setSelectedPokemonUrl} />
                </section>  
                  <div className="darkgrey-box">
                      <div className="audio-hole"></div>
                  </div>
                  <div className="darkgrey-circle"></div> 
                
            </div>
            <div className="screen-border-bottom">
                <div className="d-pad">
                    <div className="button b-up"></div>
                    <div className="button b-right"></div>
                    <div className="button b-down"></div>
                    <div className="button b-left"></div>
                    <div className="button b-middle"></div>
                </div>
                <div className="screen-border-double"></div>
                <div className="darkgrey-box">
                    <div className="select-button-top"></div>
                    <div className="select-button-bottom"></div>
                </div>
                <div className="screen">
                <section className="info-box">
                  <SelectedPokemonDetail pokemon={selectedPokemon}/>
                </section>
                </div>
                <div className="darkgrey-circle"></div> 
            </div>
            <div className="right-control-pad">
                <div className="joystick">
                    <div className="joystick-center"></div>
                    <div className="joystick-ring"></div>
                    <div className="joystick-ring-button"></div>
                </div>
                <div className="joystick-background-circle"></div>
                <div className="joystick-background-square"></div>
            </div>
        </div>
    </section> 
      </>
  )
}

/* <PokemonNumberSearch pokemonList={pokemonList} onSelectPokemon={setSelectedPokemonUrl}/> */
/* <PokemonNameSearch pokemonList={pokemonList} onSelectPokemon={setSelectedPokemonUrl}/> */

export default Pokedex;

{/* <section className="pokedex-box">
<div className="main-pokedex-body">
    <div className="left-gray-circle">
        <div className="left-darkgrey-circle"></div>
        <div className="left-green-circle"></div>
    </div>
    <div className="left-red-vertical-bar"></div>
    <div className="hinge-bar"></div>
    <div className="hinge-bar-indent"></div>
    <div className="info-box-border-top">
        <div className="info-box-border-double"></div>
        <div className="top-darkgrey-box"></div>
        <section className="info-box">
          <SearchExample pokemonList={pokemonList} onSelectPokemon={setSelectedPokemonUrl} />
          <SelectedPokemonImage pokemon={selectedPokemon}/>
        </section>
    </div>
    <div className="info-box-border-bottom">
        <div className="info-box-border-double"></div>
        <div className="bottom-darkgrey-box"></div>
        
        <section className="info-box">
          <SelectedPokemonDetail pokemon={selectedPokemon}/>
        </section>
    </div>
    <div className="d-pad">
        <div className="button b-up"></div>
        <div className="button b-right"></div>
        <div className="button b-down"></div>
        <div className="button b-left"></div>
        <div className="button b-middle"></div>
    </div>
</div>
<div className="right-control-pad">

    <div className="cp-gray-circle"></div>
    <div className="cp-gray-square"></div>
</div>
</section>  */}
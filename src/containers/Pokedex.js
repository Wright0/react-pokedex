import React, { useEffect, useState } from 'react';
import SelectedPokemonImage from '../components/SelectedPokemonImage.js'
import SelectedPokemonDetail from '../components/SelectedPokemonDetail.js'
import Search from '../components/search-components/Search.js';
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
                
                <div className="darkgrey-panel">
                  <section className="top-search">
                    <Search pokemonList={pokemonList} onSelectPokemon={setSelectedPokemonUrl} />
                  </section>
                  <div className="darkgrey-circle"></div> 
                  <div className="darkgrey-box">
                    <div className="audio-hole"></div>
                  </div>
                  
                </div>
            </div>

            <div className="screen-border-bottom">
                <div className="screen-border-double"></div>
                <div className="screen">
                <section className="info-box">
                  <SelectedPokemonDetail pokemon={selectedPokemon}/>
                </section>
                </div>
                
                <div className="darkgrey-panel">
                  <div className="d-pad">
                    <div className="button b-up"></div>
                    <div className="button b-right"></div>
                    <div className="button b-down"></div>
                    <div className="button b-left"></div>
                    <div className="button b-middle"></div>
                </div>
                  <div className="darkgrey-circle"></div> 
                  <div className="darkgrey-box">
                    <div className="select-button-top"></div>
                    <div className="select-button-bottom"></div>
                  </div>
                </div>
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

export default Pokedex;
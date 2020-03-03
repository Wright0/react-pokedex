import React, { Component, Fragment } from 'react';
import PokemonSelector from '../components/PokemonSelector.js'
import PokemonDetail from '../components/PokemonDetail.js'

class Pokedex extends Component {

  constructor(props){
    super(props)
    this.state = {
      pokemonNameUrl: [],
      selectedPokemonUrl:'',
      selectedPokemon: null
    }
  }

  render(){
    return(
      <Fragment>
        <h1>I am the Pokedex</h1>
        <PokemonSelector/>
        <PokemonDetail/>
      </Fragment>
    )
  }
}

export default Pokedex;

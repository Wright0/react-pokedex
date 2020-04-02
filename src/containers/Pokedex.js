import React, { Component, Fragment } from 'react';
import PokemonSelector from '../components/PokemonSelector.js'
import PokemonDetail from '../components/PokemonDetail.js'
import PokemonSearch from '../components/PokemonSearch.js';

class Pokedex extends Component {

  constructor(props){
    super(props)
    this.state = {
      pokemonList: [],
      selectedPokemonUrl:'',
      selectedPokemon: null
    };
    this.setSelectedPokemonUrl = this.setSelectedPokemonUrl.bind(this);
  }

  setSelectedPokemonUrl(pokemonUrl){
      this.setState({selectedPokemonUrl: pokemonUrl})
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(pokemon => this.setState({ pokemonList: pokemon.results }))
    .catch(err => console.error)
  }

  componentDidUpdate(){
    fetch(this.state.selectedPokemonUrl)
    .then(response => response.json())
    .then(pokemonObject => this.setState({ selectedPokemon: pokemonObject }))
    .catch(err => console.error)
  }

  render(){
    return(
      <Fragment>
        <h1>First Generation Pokedex</h1>
        <PokemonSearch pokemonList={this.state.pokemonList}/>
        <PokemonSelector pokemonList={this.state.pokemonList} onSelectPokemon={this.setSelectedPokemonUrl}/>
        <PokemonDetail pokemon={this.state.selectedPokemon}/>
      </Fragment>
    )
  }
}

export default Pokedex;

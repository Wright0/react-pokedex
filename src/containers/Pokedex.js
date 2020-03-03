import React, { Component, Fragment } from 'react';
import PokemonSelector from '../components/PokemonSelector.js'
import PokemonDetail from '../components/PokemonDetail.js'

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
    fetch('https://pokeapi.co/api/v2/pokemon')
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
        <h1>I am the Pokedex</h1>
        <PokemonSelector pokemonList={this.state.pokemonList} onSelectPokemon={this.setSelectedPokemonUrl}/>
        <PokemonDetail/>
      </Fragment>
    )
  }
}

export default Pokedex;

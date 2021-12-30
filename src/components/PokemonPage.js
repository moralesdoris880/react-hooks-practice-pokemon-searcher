import React, { useState,useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons,setPokemons]= useState([]);

  useEffect(()=>{
    fetch("http://localhost:3001/pokemon")
    .then(response => response.json())
    .then(data => setPokemons(data))
  },[]);

  function handleSearchPokemon(string){
    const results = (pokemons.filter((pokemon)=> {return (pokemon.name === string)}))
    setPokemons(results)
  }
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search onSearchPokemon={handleSearchPokemon}/>
      <br />
      <PokemonCollection pokemons={pokemons}/>
    </Container>
  );
}

export default PokemonPage;

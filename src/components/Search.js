import React from "react";

function Search({onSearchPokemon}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={onSearchPokemon}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;

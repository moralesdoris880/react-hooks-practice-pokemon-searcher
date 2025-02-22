import React,{ useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const[image,setImage]= useState(pokemon.sprites.front)

  function handleImage(){
    if(image === pokemon.sprites.front)return setImage(pokemon.sprites.back)
    else{
      return setImage(pokemon.sprites.front)
    }
  }
  return (
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" src={image} onClick={handleImage}/> 
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

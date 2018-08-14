import React from 'react';
import { Link } from 'react-router';

const CharacterTile = (props) => {
  let image = props.image_url+props.image_tier+".png"
  return(
    <div className="character_tile row">
      <div  className="column small-8">
        <Link to={`/characters/${props.id}`}>
          <img className="character_image" src={image} alt={props.name} />
          <h4 className="character_name">{props.name}</h4>
        </Link><br/>
        {props.className} || level: {props.level}<br/>
        Task: {props.task}
      </div>
      <div  className="column small-4">
        <button className="task_button" id={props.id} onClick={props.onClick}>
              Complete Task
        </button>
      </div>
    </div>
  )
}

export default CharacterTile;

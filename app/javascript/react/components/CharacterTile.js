import React from 'react';
import { Link } from 'react-router';

const CharacterTile = (props) => {
  let image = props.image_url+props.image_tier+".png"
  return(
    <div className="character_tile">
      <Link to={`/characters/${props.id}`}>
        <img src={image} alt={props.name} />
        {props.name}
      </Link>
      <p>{props.className} || level: {props.level}</p>
      <div>
        Task: {props.task}
        <button className="task_button" id={props.id} onClick={props.onClick}>
              Complete Task
        </button>
      </div>
    </div>
  )
}

export default CharacterTile;

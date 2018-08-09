import React from 'react';
import { Link } from 'react-router';

const CharacterTile = (props) => {
  let image = props.image_url+props.image_tier+".png"
  return(
    <div className="character_tile">
      <Link to={`/characters/${props.id}`}>
        <img src={image} alt={props.name} />
        <p>{props.className}</p>
      </Link>
      <p>{props.name} || level: {props.level}</p>
      <p>Task: {props.task}</p>
    </div>
  )
}

export default CharacterTile;

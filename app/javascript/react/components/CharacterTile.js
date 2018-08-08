import React from 'react';
import { Link } from 'react-router';

const CharacterTile = (props) => {
  return(
    <div className="character_tile">
      <Link to={`/characters/${props.id}`}>
        <img src={props.image_url} alt={props.name} />
        <p>{props.class_name}</p>
      </Link>
      <p>{props.name} || level: {props.level}</p>
      <p>Task: {props.task}</p>
    </div>
  )
}

export default CharacterTile;

//`${img_base_url}${props.class_name}/1.png`

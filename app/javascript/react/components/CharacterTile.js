import React from 'react';
import { Link } from 'react-router';

const CharacterTile = (props) => {
  let img_base_url = "https://s3.amazonaws.com/dungeon-party-planner-production/images/characters/"
  return(
    <div className="character_tile">
      <img src={props.image_url} alt={props.name} />
      <p>{props.class_name}</p>
      <p>{props.name} || level: {props.level}</p>
      <p>Task: {props.task}</p>
    </div>
  )
}

export default CharacterTile;

//`${img_base_url}${props.class_name}/1.png`

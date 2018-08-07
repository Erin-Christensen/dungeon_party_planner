import React from 'react';
import { Link } from 'react-router';

const CharacterTile = (props) => {
  return(
    <div>
      <p>{props.name} - {props.task}</p>

      <img src={props.image} alt={props.name} />
    </div>
  )
}

export default CharacterTile;

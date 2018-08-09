import React from 'react';

const CharacterShowTile = (props) => {
  let image = props.imageUrl+props.imageTier+".png"
  return(
    <div className="character_tile">
        <img src={image} alt={props.name} />
      <p>{props.className}</p>
      <p>{props.name} || level: {props.level}</p>
      <p>Task: {props.task}</p>
    </div>
  )
}

export default CharacterShowTile;

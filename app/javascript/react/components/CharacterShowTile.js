import React from 'react';
import { Link } from 'react-router';

const CharacterShowTile = (props) => {
  let image = props.imageUrl+props.imageTier+".png"
  let icon = props.imageUrl+"icon.png"
  return(
    <div className="character_tile row">
      <div className="column small-8 move_left">
        <img src={image} alt={props.name} className="detail_image"/>
        <img src={icon} alt="icon" />
        {props.className}<br/>
        Level: {props.level}<br/>
        {props.statName}: {props.statValue} || Health: {props.health}<br/>
      </div>
      <div className="column small-4 move_right">
        <button className="task_button" id={props.id} onClick={props.onClick}>
          Complete Task
        </button>
        <button onClick={props.confirm} className="delete_character">
        Delete
        </button>
      </div>
      <div className="column task">
        Task: {props.task}
      </div>
    </div>
  )
}

export default CharacterShowTile;

import React from 'react';


const CharacterShowTile = (props) => {
  let image = props.imageUrl+props.imageTier+".png"
  let icon = props.imageUrl+"icon.png"
  return(
    <div className="character_tile">
      <img src={image} alt={props.name} className="detail_image"/>
      <img src={icon} alt="icon" />
      {props.className}<br/>
      {props.statName}: {props.statValue}<br/>
      {props.name} || level: {props.level} || health: {props.health}<br/>
      Task: {props.task}<br/>
      <button className="task_button" id={props.id} onClick={props.onClick}>
            Complete Task
      </button>
    </div>
  )
}

export default CharacterShowTile;

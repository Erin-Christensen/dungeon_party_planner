import React from 'react';
import { Link } from 'react-router';

const CharacterTile = (props) => {
  let image = props.image_url+props.image_tier+".png"
  let message
  if(props.message !== ""){
    message = <div className="message">{props.message}</div>
  }
  return(
    <div className="character_tile row">
      <div className="message_space column">
        {message}
      </div>
      <div  className="column small-8 move_left">
        <Link to={`/characters/${props.id}`}>
          <img className="character_image" src={image} alt={props.name} />
          <h4 className="character_name">{props.name}</h4>
        </Link><br/>
        {props.className} || level: {props.level}<br/>
      </div>
      <div  className="column small-4 move_right">
        <button className="task_button" id={props.id} onClick={props.onClick}>
          Complete Task
        </button>
      </div>
      <div className="column task">
        {props.task}
      </div>
    </div>
  )
}

export default CharacterTile;

import React from 'react';

const ClassDetailTile = (props) => {
  let image
  if(props.imageUrl != ""){
  image = <img src={props.imageUrl+"icon.png"} alt={props.name} className="detail_image"/>
  }
  else {
    image = <div className="icons"><img src="https://s3.amazonaws.com/dungeon-party-planner-production/images/characters/fighter/icon.png" className="icon column small-4"/> <img src="https://s3.amazonaws.com/dungeon-party-planner-production/images/characters/bard/icon.png" className="icon column small-4"/> <img src="https://s3.amazonaws.com/dungeon-party-planner-production/images/characters/wizard/icon.png" className="icon column small-4"/></div>
  }
  return(
    <div className="class_detail column">
        <h4 className="character_name">{props.name}</h4><br/>
        {image}
        <h5 className="stat_name">{props.stat}</h5><br/>
        {props.description}
    </div>
  )
}
export default ClassDetailTile

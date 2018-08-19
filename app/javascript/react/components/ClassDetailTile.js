import React from 'react';

const ClassDetailTile = (props) => {
  let image
  if(props.imageUrl != ""){
  image = <img src={props.imageUrl+"icon.png"} alt={props.name} className="detail_image"/>
  }
  return(
    <div className="class_detail column">
        {image}
        <h4 className="character_name">{props.name}</h4><br/>
        <h5 className="stat_name">{props.stat}</h5><br/>
        {props.description}
    </div>
  )
}
export default ClassDetailTile

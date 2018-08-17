import React from 'react';

const ClassDetailTile = (props) => {
  let image = props.imageUrl+"icon.png"
  return(
    <div className="class_detail column">
        <img src={image} alt={props.name} className="detail_image"/>
        <h4 className="character_name">{props.name}</h4><br/>
        <h5 className="stat_name">Main Stat: {props.stat}</h5><br/>
        {props.description}
    </div>
  )
}
export default ClassDetailTile

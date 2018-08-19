import React from 'react';

const SkillTile = (props) => {
  return(
    <div className="character_tile">
      <h5 className="stat_name">{props.name}</h5><br/>
      {props.description}
    </div>
  )
}

export default SkillTile;

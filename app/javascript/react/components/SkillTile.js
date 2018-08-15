import React from 'react';

const SkillTile = (props) => {
  return(
    <div className="character_tile">
      {props.name}<br/>
      {props.description}
    </div>
  )
}

export default SkillTile;

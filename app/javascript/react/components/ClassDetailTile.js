import React from 'react';

const ClassDetailTile = (props) => {
  return(
    <div className="detail">
        <p>You have selected: {props.name}</p>
        <p>Main Stat: {props.stat}</p><br/>
        <p>{props.description}</p>
    </div>
  )
}
export default ClassDetailTile

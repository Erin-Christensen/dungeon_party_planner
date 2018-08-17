import React from 'react';

const InputTile = (props) => {

  return(
    <div>
      <label>{props.label}
        <input
          name={props.name}
          type="text"
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.handleChange}
        />
      </label>
    </div>
  )
}

export default InputTile;

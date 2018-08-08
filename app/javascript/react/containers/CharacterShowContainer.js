import React, { Component } from 'react';
import SkillTile from '../components/SkillTile';

class CharacterShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      character: {}
    }
  }

  componentDidMount(){
    fetch(`/api/v1/characters/${this.props.params.id}`,{
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        character: body
      })
    })
    .catch(error => console.error(`Error in venue show mount fetch: ${error.message}`));
  }

  render(){
    let character = this.state.character
    return(
      <div>
      <h2>Character</h2>
        <div className="character_tile">
            <img src={character.image_url} alt={character.name} />
            <p>{character.class_name}</p>
          <p>{character.name} || level: {character.level}</p>
          <p>Task: {character.task}</p>
        </div>
        <h2>Skills</h2>
        <SkillTile

        />
      </div>
    )
  }
}

export default CharacterShowContainer

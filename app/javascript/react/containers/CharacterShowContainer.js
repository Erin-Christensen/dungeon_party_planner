import React, { Component } from 'react';
import SkillTile from '../components/SkillTile';
import CharacterShowTile from '../components/CharacterShowTile';

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
        character: body.character
      })
    })
    .catch(error => console.error(`Error in venue show mount fetch: ${error.message}`));
  }

  render(){
    let character = this.state.character
    let className
    let imageUrl
    if(character.class_type){
      className = character.class_type.name
      imageUrl = character.class_type.image_url
    }

    return(
      <div>
        <h2>Character</h2>
        <CharacterShowTile
          name={character.name}
          task={character.task}
          level={character.level}
          className={className}
          imageUrl={imageUrl}
          imageTier={character.image_tier}
        />
        <h2>Skills</h2>
        <SkillTile

        />
      </div>
    )
  }
}

export default CharacterShowContainer

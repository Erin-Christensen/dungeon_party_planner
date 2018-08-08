import React, { Component } from 'react';
import CharacterTile from '../components/CharacterTile';

class CharactersIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters_array: [],
    }
  }

  componentDidMount(){
    fetch(`/api/v1/characters`, {
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
        characters_array: body
        //member: body.member,
        //admin: body.admin
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){

    let characters = this.state.characters_array.map((character => {
      return(
        <CharacterTile
          key={character.id}
          id={character.id}
          class_name={character.class_name}
          level={character.level}
          image_url={character.image_url}
          name={character.name}
          task={character.task}
        />
      )
    }))
    return(
      <div>
        {characters}
      </div>
    )
  }
}

export default CharactersIndexContainer;

import React, { Component } from 'react';
import { Link } from 'react-router';
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
        characters_array: body.characters
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
          className={character.class_type.name}
          level={character.level}
          image_url={character.class_type.image_url}
          image_tier={character.image_tier}
          name={character.name}
          task={character.task}
        />
      )
    }))
    
    return(
      <div>
        <h2>Your Characters</h2>
        {characters}
        <Link to={'/characters/new'}>
          Add a Character
        </Link>
      </div>
    )
  }
}

export default CharactersIndexContainer;

import React, { Component } from 'react';
import { Link } from 'react-router';
import CharacterTile from '../components/CharacterTile';

class CharactersIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters_array: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.confirm = this.confirm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick(event){
    let id = event.target.id
    fetch(`/api/v1/characters/${id}`, {
      credentials: 'same-origin',
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'}
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

  confirm(event) {
    if(confirm('Are you sure you want to delete this character?')) {
      this.handleDelete(event);
    } else {
      event.preventDefault();
    }
  }

  handleDelete(event) {
    event.preventDefault();

    fetch(`/api/v1/${event.currentTarget.attributes.href.value}`, {
      credentials: 'same-origin',
      method: 'DELETE'
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
        <div key={character.id}>
          <CharacterTile
            key={character.id}
            id={character.id}
            className={character.class_type.name}
            level={character.level}
            image_url={character.class_type.image_url}
            image_tier={character.image_tier}
            name={character.name}
            task={character.task}
            onClick={this.handleClick}
            message={character.message}
          />
          <Link to={`characters/${character.id}`} onClick={this.confirm}>Delete {character.name}</Link>
        </div>
      )
    }))

    return(
      <div>
        <h1>Your Characters</h1>
        {characters}
        <Link to={'/characters/new'}>
          <button type="button" className="add_button">
            Add a Character
          </button>
          </Link>
      </div>
    )
  }
}

export default CharactersIndexContainer;

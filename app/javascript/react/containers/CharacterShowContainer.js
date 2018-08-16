import React, { Component } from 'react';
import { Link } from 'react-router';
import SkillTile from '../components/SkillTile';
import CharacterShowTile from '../components/CharacterShowTile';

class CharacterShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      character: {},
      messages: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    let payload = { source: 'show' }
    fetch(`/api/v1/characters/${this.state.character.id}`, {
      credentials: 'same-origin',
      method: 'PATCH',
      body: JSON.stringify(payload),
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
        character: body.character
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
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
    let statName
    let skills
    if(character.class_type){
      className = character.class_type.name
      imageUrl = character.class_type.image_url
      statName = character.class_type.main_stat
    }

    if(character.skills){
      skills = character.skills.map((skill => {
        return(
          <SkillTile
            key={skill.id}
            name={skill.name}
            description={skill.description}
          />
        )
      }))
    }

    return(
      <div>
        <Link to={'/characters'}>
          <button type="button" className="back_button">
            Back
          </button>
        </Link>

          <h2>{character.name}</h2>
          <CharacterShowTile
            id={character.id}
            name={character.name}
            task={character.task}
            level={character.level}
            className={className}
            imageUrl={imageUrl}
            imageTier={character.image_tier}
            statName={statName}
            statValue={character.stat}
            health={character.health}
            onClick={this.handleClick}
          />

          <h2>Skills</h2>
            {skills}
      </div>
    )
  }
}

export default CharacterShowContainer

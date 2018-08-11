import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import ClassDetailTile from '../components/ClassDetailTile';
import InputTile from '../components/InputTile';

class CharacterFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      class_array: [],
      selected_class: {},
      name: "",
      task: ""
    }
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelect(event) {
    let selected;
    this.state.class_array.forEach( classType =>{
      if(classType.id == event.target.value){
        selected = classType
      }
    })
    this.setState({
      selected_class: selected,
      task: "Suggestion: " + selected.suggested_task
    });
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    let payload = {
        name: this.state.name,
        task: this.state.task,
        class_type_id: this.state.selected_class.id
    }


    fetch('/api/v1/characters', {
      credentials: 'same-origin',
      method: 'POST',
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
        //browserHistory.push(`/characters/${this.body.character.id}`)
        this.props.router.push(`/characters/${body.character.id}`)
      }
    )
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount(){
    fetch(`/api/v1/class_types`, {
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
        class_array: body.class_types,
        selected_class: body.class_types[0],
        task: "Suggestion: " + body.class_types[0].suggested_task
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let classOptions = this.state.class_array.map((class_type => {
        return(
            <option value={class_type.id} key={class_type.id}>{class_type.name}</option>
        )
      }))

    let classType = this.state.selected_class

    return(
      <div>
        <ClassDetailTile
          name={classType.name}
          stat={classType.main_stat}
          description={classType.description}
        />
        <form onSubmit={this.handleSubmit}>
          <label>
            Choose a Class:
            <select value={this.state.selected_class.id} onChange={this.handleSelect}>
              {classOptions}
            </select>
          </label>
          <InputTile
            name="name"
            label="Choose a Character Name:"
            value={this.state.name}
            handleChange={this.handleChange}
          />
          <InputTile
            name="task"
            label="Give Your Hero a Task to Track:"
            value={this.state.task}
            handleChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default CharacterFormContainer
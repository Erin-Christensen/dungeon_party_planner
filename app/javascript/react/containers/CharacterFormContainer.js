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
      placeholder: "",
      task: ""
    }
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelect(event) {
    let selected = this.state.class_array.find(x => x.id == event.target.value );
    this.setState({
      selected_class: selected,
      placeholder: "Suggestion: " + selected.suggested_task,
      task: ""
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
        this.props.router.push(`/characters`)
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
        placeholder: "Suggestion: " + body.class_types[0].suggested_task
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let classOptions = this.state.class_array.map((class_type => {
          return(
            <div className="column small-4">
              <button type="button" className="class_button column" key={class_type.id} value={class_type.id} onClick={this.handleSelect}>
                {class_type.name}
              </button>
            </div>
          )
      }))

    let classType = this.state.selected_class

    return(
      <div className="row">
        <ClassDetailTile
          name={classType.name}
          stat={classType.main_stat}
          description={classType.description}
          imageUrl={classType.image_url}
        />
        <div className="column" id="class_form">
          <form onSubmit={this.handleSubmit}>
            <label>
              Choose a Class:
              <div className="row">
                {classOptions}
              </div>
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
              placeholder={this.state.placeholder}
              value={this.state.task}
              handleChange={this.handleChange}
            />
            <button type="submit" className="submit_button">submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterFormContainer

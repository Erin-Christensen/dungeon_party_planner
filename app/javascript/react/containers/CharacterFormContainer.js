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
      task: "",
      errors: []
    }
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleSelect(event) {
    let selected = this.state.class_array.find(x => x.id == event.target.value );
    this.setState({
      selected_class: selected,
      placeholder: "Suggestion: " + selected.suggested_task,
      task: ""
    });
  }

  handleRedirect(){
    this.props.router.push(`/characters`)
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
        if(body.errors) {
          this.setState({
            errors: body.errors,
          })
        } else {
          this.handleRedirect()
        }
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
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let classOptions = this.state.class_array.map((class_type => {
          return (
            <div className="column small-4" key={class_type.id}>
              <button type="button" className="class_button column"  value={class_type.id} onClick={this.handleSelect}
              key={class_type.name}>
                {class_type.name}
              </button>
            </div>
          )
      }))

    let classType = this.state.selected_class
    let classDetail
    let errors = this.state.errors.map((error => {
      return (
        <span className="error_message">{error} <br/></span>
      )
    }))

    if(this.state.placeholder === ""){
      classDetail =
      <ClassDetailTile
        name="Choose a Class Below"
        stat=""
        description=""
        imageUrl=""
      />
    } else {
      classDetail=
      <ClassDetailTile
        name={classType.name}
        stat={"Main Stat: " + classType.main_stat}
        description={classType.description}
        imageUrl={classType.image_url}
      />
    }

    return(
      <div className="row">
        {classDetail}
        <div className="column" id="class_form">
          <form onSubmit={this.handleSubmit}>
            <label>
              Choose a Class:
              <div className="row">
                {classOptions}
              </div>
            </label>
            <InputTile
            name="task"
            label="Give Your Hero a Task to Track:"
            placeholder={this.state.placeholder}
            value={this.state.task}
            handleChange={this.handleChange}
            />
            <InputTile
              name="name"
              label="Choose a Character Name:"
              value={this.state.name}
              handleChange={this.handleChange}
            />
            <div className="row submit_errors">
            <button type="submit" className="submit_button column small-4">submit</button>
            <div className="column small-7">{errors}</div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterFormContainer

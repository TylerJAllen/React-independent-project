import React from 'react';
import Item from '../models/Item.js';
import PropTypes from 'prop-types';
import {Form, InputGroup, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
// import styles from '../styles/App.css';

class NewItemForm extends React.Component{
  constructor(props){
    super(props);
    this.handleNewItemFormSubmission = this.handleNewItemFormSubmission.bind(this);
  }

  handleNewItemFormSubmission(event) {
    event.preventDefault();
    // const {_title, _note} = this.refs;
    var newItem = new Item(this.textInput.value, this.textareaInput.value);
    this.props.onNewItemCreation(newItem);
    this.props.hideFormAfterSubmission();
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleNewItemFormSubmission}>
          <FormGroup controlId="formControlsText">
            <ControlLabel>What would you like me to keep track of?</ControlLabel>
            <FormControl
              id="formControlsText"
              type="text"
              inputRef={ref => { this.textInput = ref; }}
              />
          </FormGroup>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Add notes that will help me help you. <em>Update this section with specifics such as favorites, dates, locations, previous events, etc.</em></ControlLabel>
            <FormControl componentClass="textarea" placeholder="Notes"
            inputRef={ref => { this.textareaInput = ref; }}
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func,
  hideFormAfterSubmission: PropTypes.func
};

export default NewItemForm;

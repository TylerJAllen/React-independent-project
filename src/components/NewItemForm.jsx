import React from 'react';
import item from '../models/item.js';
import PropTypes from 'prop-types';
import {Form, InputGroup, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
// import styles from '../styles/App.css';


class NewItemForm extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <form>
          <FormGroup controlId="formControlsText">
            <ControlLabel>What would you like me to keep track of?</ControlLabel>
            <FormControl
              id="formControlsText"
              type="text"
              />
          </FormGroup>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Add notes that will help me help you. <em>Update this section with specifics such as favorites, dates, locations, previous events, etc.</em></ControlLabel>
            <FormControl componentClass="textarea" placeholder="Notes" />
          </FormGroup>
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

import React from 'react';
import PropTypes from 'prop-types';
import {ButtonGroup, Button} from 'react-bootstrap';
// import styles from '../styles/App.css';


function Item(props){
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.note}</p>
      <p>Duration Interval: {props.duration}</p>
      <p>{props.timeRemaining}</p>
      <ButtonGroup>
        <Button bsStyle="success"
          bsSize="xsmall">
          Reset</Button>
        <Button bsStyle="warning"
          bsSize="xsmall">
          Edit</Button>
        <Button bsStyle="danger"
          bsSize="xsmall">
          Remove</Button>
      </ButtonGroup>
    </div>
  );
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  timeRemaining: PropTypes.string.isRequired
};

export default Item;

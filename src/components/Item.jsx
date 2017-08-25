import React from 'react';
import PropTypes from 'prop-types';
import {ButtonGroup, Button} from 'react-bootstrap';
// import styles from '../styles/App.css';


function Item(props){
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.note}</p>
      <ButtonGroup>
        <Button>Reset</Button>
        <Button>Edit</Button>
        <Button>Remove</Button>
      </ButtonGroup>
    </div>
  );
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired
};

export default Item;

import React from 'react';
import NewItemForm from './NewItemForm';
import PropTypes from 'prop-types';
import { Button }  from "react-bootstrap";
// import styles from '../styles/App.css';


function NewItemControl(props){
  return (
    <div>
      <button
        block
        bsStyle=""
        bsSize="large">
        Add Item
      </button>
      <NewItemForm />
    </div>
  );
}

NewItemControl.propTypes = {
};

export default NewItemControl;

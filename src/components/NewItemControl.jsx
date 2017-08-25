import React from 'react';
import NewItemForm from './NewItemForm';
import PropTypes from 'prop-types';
import { Button }  from "react-bootstrap";
import { Modal } from "react-bootstrap";
// import styles from '../styles/App.css';


function NewItemControl(props){
  return (
    <div>
      <Button
        block
        bsStyle="info"
        bsSize="large">
        Add Item
      </Button>
      <Modal
        show={this.state.formModalIsShowing}
        onHide={this.hideFormModal}
        bsSize="large">
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewItemForm
            onNewItemCreation={this.props.onNewItemCreation}
            hideFormAfterSubmission = {this.hideFormModal}/>
        </Modal.Body>
      </Modal>
    </div>
  );
}

NewItemControl.propTypes = {
};

export default NewItemControl;

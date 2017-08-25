import React from 'react';
import NewItemForm from './NewItemForm';
import PropTypes from 'prop-types';
import { Button }  from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
// import styles from '../styles/App.css';


class NewItemControl extends React.Component{
  constructor(props){
    super(props);
    this.showFormModal = this.showFormModal.bind(this);
    this.hideFormModal = this.hideFormModal.bind(this);
    this.state={
      formModalIsShowing: false
    };
  }

  showFormModal(){
    this.setState({
      formModalIsShowing: true
    });
  }

  hideFormModal(){
    this.setState({
      formModalIsShowing: false
    });
  }

  render(){
    return (
      <div>
        <Button
          block
          bsStyle="info"
          bsSize="large"
          onClick={this.showFormModal}>
          Add Item
        </Button>
        <Modal
          show={this.state.formModalIsShowing}
          onHide={this.hideFormModal}
          bsSize="large">
          <Modal.Header>
            <Modal.Title>Add a new item</Modal.Title>
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
}

NewItemControl.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemControl;

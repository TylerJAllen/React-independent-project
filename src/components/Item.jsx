import React from 'react';
import PropTypes from 'prop-types';
// import styles from '../styles/App.css';


function Item(props){
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.note}</p>
    </div>
  );
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired
};

export default Item;

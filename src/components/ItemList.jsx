import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';
// import styles from '../styles/App.css';


function ItemList(props){
  return (
    <div>
      <Item />
    </div>
  );
}

ItemList.propTypes = {
};

export default ItemList;

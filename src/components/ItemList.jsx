import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';
// import styles from '../styles/App.css';


function ItemList(props){
  return (
    <div>
      <hr/>
      {props.itemList.map((item, index) =>
        <Item title={item.title}
          note={item.note}
          key={index}
          />
      )}
    </div>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array
};

export default ItemList;

import React from 'react';
import ItemList from './ItemList';
import NewItemControl from './NewItemControl';
import styles from '../styles/App.css';

class Queue extends React.Component{
  constructor(props){
    super(props);
    this.state={
      masterItemList: []
    };
  }

  render(){
    return (
      <div className={styles}>
        <ItemList />
        <NewItemControl />
      </div>
    );
  }
}


export default Queue;

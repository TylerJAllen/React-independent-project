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
    this.addNewItemToList = this.addNewItemToList.bind(this);
  }

  addNewItemToList(newItem){
   let newMasterItemList = this.state.masterItemList.slice();
   newMasterItemList.push(newItem);
   this.setState({masterItemList: newMasterItemList});
   console.log(this.state.masterItemList);
 }

  render(){
    return (
      <div className={styles}>
        <ItemList itemList={this.state.masterItemList}/>
        <NewItemControl onNewItemCreation= {this.addNewItemToList}/>
      </div>
    );
  }
}


export default Queue;
